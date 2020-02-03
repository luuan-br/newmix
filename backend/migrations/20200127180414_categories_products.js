/** @format */

exports.up = function(knex, Promise) {
	return knex.schema.createTable("categories_products", table => {
		table.string("product_id")
		table.string("category_id")
		table.foreign("product_id").references("products._id")
		table.foreign("category_id").references("categories._id")
		table.primary(["product_id", "category_id"])
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("categories_products")
}
