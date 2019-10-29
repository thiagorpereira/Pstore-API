const express = require('express');

const server = express();
server.use(express.json());

const projects = [];


//Middleware Global
server.use((req,res, next) =>{
  console.time('Request');
  console.log(`Method : ${req.method}; URL : ${req.url} `);

  next();

  console.timeEnd('Request');
});


//Middleware Específico
function checkProjectExists(req, res, next) {
  const { index } = req.params;
  if(!projects[index]){
    return res.json({message : "Project not found"})
  }
  return next()
}



//Create Project
server.post('/projects', (req, res)=>{
  const body = req.body;
  
  projects.push(body);

  return res.json(body);

});

// Read All
server.get('/projects', (req,res)=>{
  return res.json(projects)
});

// Read One
server.get('/projects/:index', checkProjectExists, (req, res) =>{
  const { index } = req.params;
  const project = projects[index];
  return res.json(project);
});


// Update
server.put('/projects/:index', checkProjectExists, (req, res) =>{
  const { index } = req.params;
  projects[index] = req.body;
  return res.json(projects)
})


// Delete
server.delete('/projects/:index', checkProjectExists, (req, res) =>{
  const { index } = req.params;
  projects.splice(index, 1);
  return res.send()
})




server.listen(3000);