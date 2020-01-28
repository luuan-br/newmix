/** @format */
const db = require("../../config/db")

module.exports = {
	product(_, { filter }) {
		try {
			const { _id, name } = filter

			if (_id) {
				return db("products")
					.where({ _id })
					.first()
			} else if (name) {
				return db("products")
					.where({ name })
					.first()
			}

			return null
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},
	products(_, { all }) {
		try {
			if (all && all === true) {
				return db("products")
			} else {
				return db("products").where({ active: 1 })
			}
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},
}
