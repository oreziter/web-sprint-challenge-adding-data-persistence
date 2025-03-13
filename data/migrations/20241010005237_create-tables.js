/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('projects', (table) => {
    table.increments('project_id'); 
    table.string('project_name').notNullable().unique()
    table.text('project_description'); 
    table.boolean('project_completed').defaultTo(false) 
  })


  .createTable('resources', (table) => {
    table.increments('resource_id') 
    table.string('resource_name').notNullable().unique()
    table.text('resource_description'); 
  })


  .createTable('tasks', (table) => {
    table.increments('task_id') 
    table.string('task_description').notNullable().unique()
    table.text('task_notes'); 
    table.boolean('task_completed').defaultTo(false)
    table
      .integer('project_id')
      .unsigned() 
      .notNullable() 
      .references('project_id') 
      .inTable('projects') 
      .onDelete('RESTRICT') 
  })

};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')

};
