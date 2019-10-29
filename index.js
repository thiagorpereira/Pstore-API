const express = require('express');

const server = express();
server.use(express.json());

const projects = [];

//Middleware Global
server.use((req,res, next) =>{
  console.count("Requisições")
  return next();
});

//Middleware Específico
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  if(!projects[id]){
    return res.json({ error : "Project not found"})
  }
  return next()
}

//Create Project
server.post('/projects', (req, res)=>{
  const body = req.body;
  
  projects.push(body);

  return res.json(body);

});

// Read All Projects
server.get('/projects', (req,res)=>{
  return res.json(projects)
});

// Read One project
server.get('/projects/:id', checkProjectExists, (req, res) =>{
  const { id } = req.params;
  const project = projects[id];
  return res.json(project);
});


// Update project
server.put('/projects/:id', checkProjectExists, (req, res) =>{
  const { id } = req.params;
  const { title } = req.body; //new title

  projects[id].title = title;
  return res.json(projects)

})

// Delete
server.delete('/projects/:id', checkProjectExists, (req, res) =>{
  const { id } = req.params;
  projects.splice(id, 1);
  return res.send()
})

//Create task
server.post('/projects/:id/tasks', checkProjectExists, (req, res) =>{
  const { id } = req.params;
  const { title } = req.body; 
  projects[id].tasks.push(title);
  return res.json(projects)

})



server.listen(3000);