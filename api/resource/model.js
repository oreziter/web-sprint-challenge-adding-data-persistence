// build your `Resource` model here
const db = require("../../data/dbConfig"); 

async function getAllResources() {
  const resources = await db('resources');
  
  return resources.map(resource => ({
    ...resource,
    resource_completed: resource.resource_completed === 1  
  }));
}
async function createResource (resource) {
  const [resource_id] = await db('resources').insert(resource)

   const newResource = await db ('resources').where('resource_id',resource_id).first()
  if (!newResource){
    return null

  } 
  newResource.resource_completed = newResource.resource_completed ? true : false 
  return newResource
}

module.exports = {
  getAllResources,
  createResource,
};





