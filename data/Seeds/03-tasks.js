const tasks = [
  {
    
    task_description: "Design UI",
    task_notes: "Create Wireframes",
    task_completed: false,
    project_id: 1
  },

  {

    task_description: "Develop Backend",
    task_notes: "Set up Express API",
    task_completed: true,
    project_id: 2
  },
];
exports.seed = async function (knex) {
  await knex("tasks").insert(tasks);
};
