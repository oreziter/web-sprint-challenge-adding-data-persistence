// build your `/api/tasks` router here

const router = require('express').Router()
const Tasks = require('./model');

router.get("/", async (req, res, next) => { 
    try {
      const getTasks = await Tasks.getAllTasks();
      res.status(200).json(getTasks);
    } catch (err) {
      next(err);
    }
  });

router.post("/", async (req, res, next) => {
try {
    const newTask = await Tasks.createTask(req.body)
    res.status(201).json(newTask)
  } catch(err){
    next(err)
  }
  
})

module.exports = router;





