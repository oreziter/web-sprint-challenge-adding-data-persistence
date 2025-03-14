// build your `Project` model here
const db = require("../../data/dbConfig"); 

async function getAllProjects() {
  const projects = await db('projects');
  
  return projects.map(project => ({
    ...project,
    project_completed: project.project_completed === 1  
  }));
}

module.exports = {
  getAllProjects,
};


