// build your `Resource` model here
const db = require("../../data/dbConfig"); 

async function getAllResources() {
  return db("resources")
}

async function getResourceById(resource_id) {
  return db("resources").where({ resource_id }).first();
}

async function addResource(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return getResourceById(resource_id);
}

module.exports = {
  getAllResources,
  getResourceById,
  addResource,
};



