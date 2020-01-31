/** @format */

const db = require("../../config/db")

module.exports = {
	products(catalog) {
		return db("products")
			.join("catalogs_products", "products._id", "catalogs_products.product_id")
			.where({
				catalog_id: catalog._id,
			})
	},
}
