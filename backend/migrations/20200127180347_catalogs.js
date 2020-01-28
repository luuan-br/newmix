/** @format */

exports.up = function(knex, Promise) {
	return knex.schema.createTable("catalogs", table => {
		table
			.string("_id")
			.notNull()
			.unique()
		table
			.string("name")
			.notNull()
			.unique()
		table.timestamp("created_at").defaultTo(knex.fn.now())
		table.boolean("active").defaultTo(true)
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("catalogs")
}
