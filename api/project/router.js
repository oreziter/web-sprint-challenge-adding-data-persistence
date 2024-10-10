// build your `/api/projects` router here

// const express = require('express');
// const Post = require('./projects-model');


// const projects = express.Router()

// router.get('/api/tasks', (req, res) => {
// res.status(200).json(tasks);
//});


// projects.get('/', (req, res) => {
//   Post.get()
//   .then(found => {
//     res.json(found)
//     // res.send('welcome')
//   })
//   .catch(err => {
//     res.status(200).json({ 
//       message: "project_id":1,"project_name":
//         "bar","project_description":null,
//          "project_completed":false",
//       err: err.message,
//       stack: err.stack,
//     })
//   })

// })




// projects.post('/', (req, res) => {
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
