import Knex from "knex"

export async function up(knex: Knex) {
  return knex.schema.createTable("subjects", table => {
    table.increments("id").primary()
    table.integer("matterId").notNullable()
    table.string("name").notNullable()
    table.integer("do").notNullable().defaultTo(0)
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("subjects")
}
