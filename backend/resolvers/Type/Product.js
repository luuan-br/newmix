/** @format */

const db = require("../../config/db");

module.exports = {
	images(product) {
		return db("images").where({ product_id: product._id });
	},
	catalogs(product) {
		return db("catalogs")
			.join(
				"catalogs_products",
				"catalogs._id",
				"catalogs_products.catalog_id"
			)
			.where({
				product_id: product._id
			});
	},
	categories(product) {
		return db("categories")
			.join(
				"categories_products",
				"categories._id",
				"categories_products.category_id"
			)
			.where({
				product_id: product._id
			});
	}
};
