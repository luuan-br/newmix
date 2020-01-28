/** @format */

exports.up = function(knex, Promise) {
	return knex.schema.createTable("images", table => {
		table
			.string("_id")
			.primary()
			.notNull()
			.unique()
		table
			.string("name")
			.notNull()
			.unique()
		table
			.string("url_image")
			.notNull()
			.unique()
		table.string("product_id")
		table.foreign("product_id").references("products._id")
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("images")
}
