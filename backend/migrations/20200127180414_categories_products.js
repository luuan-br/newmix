/** @format */

exports.up = function(knex, Promise) {
	return knex.schema.createTable("categories_products", table => {
		table.string("product_id")
		table.string("categories_id")
		table.foreign("product_id").references("products._id")
		table.foreign("categories_id").references("categories._id")
		table.primary(["product_id", "categories_id"])
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("categories_products")
}
