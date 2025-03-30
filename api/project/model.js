// build your `Project` model here
const db = require("../../data/dbConfig"); 

async function getAllProjects() {
  const projects = await db('projects');
  
  return projects.map(project => ({
    ...project,
    project_completed: project.project_completed === 1  
  }));
}
async function createProject (project) {
  const [project_id] = await db('projects').insert(project)

   const newProject = await db ('projects').where('project_id',project_id).first()
  if (!newProject){
    return null

  } 
  newProject.project_completed = newProject.project_completed ? true : false 
  return newProject
}

module.exports = {
  getAllProjects,
  createProject,
};


