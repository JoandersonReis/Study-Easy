import Knex from "knex"

export async function up(knex: Knex) {
  return knex.schema.createTable("matters", table => {
    table.increments("id").primary()
    table.integer("propertyId").notNullable()
    table.string("name").notNullable()
    table.string("days").notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("matters")
}
