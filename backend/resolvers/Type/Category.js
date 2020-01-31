/** @format */

const db = require("../../config/db")

module.exports = {
	products(category) {
		return db("products")
			.join(
				"categories_products",
				"products._id",
				"categories_products.product_id"
			)
			.where({
				categories_id: category._id,
			})
	},
}
