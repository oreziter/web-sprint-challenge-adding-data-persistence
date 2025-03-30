// build your `Task` model here
//  const db = require('../../data/db-config');
 
const knex = require("knex")(require("../knexfile").development);

async function getTaskById(task_id) {
  return knex("tasks").where({ task_id }).first().then((task) => {
    if (task) {
      // task.task_completed = task.task_completed;
    }
    return task;
  });
}


async function addTask(task) {
  const [task_id] = await knex("tasks").insert({
    ...task,
    task_completed: task.task_completed
  });
  return getTaskById(task_id);
}

module.exports = {
  // getAllTasks,
  getTaskById,
  addTask,
};





