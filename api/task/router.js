// build your `/api/tasks` router here
const router = require("express");
// const Task = require('./model');
// const validateTasks = require('./middleware')
// router.get('/', async (req, res, next) => {
//     try {
//       const getTasks = await Task.get();
//       res.status(200).json(getTasks);
//     } catch (err) {
//       next(err);
//     }
//   });

// router.post('/', validateTasks, async (req, res, next) => {
//   try{
//       const newTask = await Task.insert(req.body)
//       res.status(200).json(newTask)
//   }catch(error){
//       next(error)
//   }
// })

module.exports = router;
