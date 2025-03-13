const resources = [
  {
    resource_id: 1,
    resource_name: "Build API",
    resource_description: "Create an Express API",
  },
  {
    resource_id: 2,
    resource_name:  "Setup Database",
    resource_description: "Create tables using Knex",
  },
];
exports.resources = resources;
exports.seed = function (knex) {
  return knex("resources").insert(resources);
}
