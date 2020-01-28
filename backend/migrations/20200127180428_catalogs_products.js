/** @format */

exports.up = function(knex, Promise) {
	return knex.schema.createTable("catalogs_products", table => {
		table.string("product_id")
		table.string("catalog_id")
		table.foreign("product_id").references("products._id")
		table.foreign("catalog_id").references("catalogs._id")
		table.primary(["product_id", "catalog_id"])
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("catalogs_products")
}
