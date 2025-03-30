const resources = [
  {
    resource_id: 1,
    resource_name: "Build API",
    resource_description: "Create an Express API",
  },
  {
    resource_id: 2,
    resource_name:  "Google Work Space",
    resource_description: "Meeting room B",
  },
  {
    resource_id: 3,
    resource_name:  "Server",
    resource_description: "AWS EC2 instance",
  },
];
exports.resources = resources;
exports.seed = function (knex) {
  return knex("resources").insert(resources);
}
