// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model'); 

const router = express.Router();

console.log("scrum master"),
router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getAllProjects();
    res.json(projects);
  } catch (err) {
    next(err); 
  }
});

router.post ('/', async (req, res, next) => {
  try {
    const newProject = await Projects.createProject(req.body)
    res.status(201).json(newProject)
  } catch(err){
    next(err)
  }
  
})

module.exports = router;


// const router = require('express').Project();
// const Project = require('./model')

// router.get('/', async (req, res, next) => {
//   try {
//     const getProjects = await Project.get();
//     res.status(200).json(getProjects);
//   } catch (err) {
//     next(err);
//   }
// });




// projects.post('/', (req, res, next) => {
//   const { project_name, project_description} = req.body;

// router.post('/api/tasks', (req, res) => {
//   const { task_description, task_notes, task_completed, project_id } = req.body;

//   if (!project_name || !project_description) {
//     return res.status(400).json({
//       message: ""task_id":1,"task_description":
//       "baz","task_notes":null,"task_completed"
//        :false,"project_id:1",
//     });
//   }
//   Post.insert(req.body) 
//     .then(newProject => {
//       res.status(201).json(newTasks); 
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: "hi",
//         error: err.message,
//         stack: err.stack,
//       });
//     });
// });


// module.exports= router;

//   newProject.project_completed = newProject.project_completed;
