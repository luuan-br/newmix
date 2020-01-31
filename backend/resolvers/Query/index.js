/** @format */

const product = require("./Product")
const category = require("./Category")
const catalog = require("./Catalog")

module.exports = {
	...product,
	...category,
	...catalog,
}
