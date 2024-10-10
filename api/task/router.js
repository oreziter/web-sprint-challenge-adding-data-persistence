// build your `/api/tasks` router here
const express = require('express');
const app = express();
app.use(express.json());


const tasks = [
  {
    task_id: 1,
    task_description: 'baz',
    task_notes: null,
    task_completed: false, // Boolean sent to client
    project_name: 'bar',
    project_description: null
  }
];

app.get('/api/tasks', (req, res) => {
  res.status(200).json(tasks);
});


