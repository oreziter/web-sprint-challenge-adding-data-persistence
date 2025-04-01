// build your `Task` model here
const db = require("../../data/dbConfig"); 

async function getAllTasks() {
  const tasks = await db('tasks');
  
  return tasks.map(task => ({
    ...task,
    task_completed: task.task_completed === 1  
  }));
}
async function createTask(task) {
  const [task_id] = await db('tasks').insert(task)

   const newTask = await db ('tasks').where('task_id',task_id).first()
  if (!newTask){
    return null

  } 
  newTask.task_completed = newTask.task_completed ? true : false 
  return newTask
}

module.exports = {
  getAllTasks,
  createTask,
};





//  const db = require('../../data/db-config');
 
// const knex = require("knex")(require("../knexfile").development);

// async function getTaskById(task_id) {
//   return knex("tasks").where({ task_id }).first().then((task) => {
//     if (task) {
//       task.task_completed = task.task_completed;
//     }
//     return task;
//   });
// }


// async function addTask(task) {
//   const [task_id] = await knex("tasks").insert({
//     ...task,
//     task_completed: task.task_completed
//   });
//   return getTaskById(task_id);
// }

// module.exports = {
//   getAllTasks,
//   getTaskById,
//   addTask,
// };






