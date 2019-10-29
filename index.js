const express = require('express');

const server = express();
server.use(express.json());

const projects = [];

//Create Project
server.post('/projects', (req, res)=>{
  const body = req.body;
  
  projects.push(body);

  return res.json(body);

});

server.get('/projects', (req,res)=>{
  return res.json(projects)
});


server.listen(3000);