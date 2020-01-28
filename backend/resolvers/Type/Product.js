/** @format */

const db = require("../../config/db")

module.exports = {
	images(product) {
		return db("images").where({ product_id: product._id })
	},
}
