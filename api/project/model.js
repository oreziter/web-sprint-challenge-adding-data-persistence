// build your `Project` model here
const db = require("../../data/dbConfig"); 
module.exports = {
  getAllProjects,
};

async function getAllProjects() {
  const projects = await db('projects');
  
  
  return projects.map(project => ({
    ...project,
    project_completed: project.project_completed === 1  
  }));
}





