/** @format */
const db = require("../../config/db")

module.exports = {
	category(_, { filter }) {
		try {
			const { _id, name } = filter

			if (_id) {
				return db("categories")
					.where({ _id })
					.first()
			} else if (name) {
				return db("categories")
					.where({ name })
					.first()
			} else {
				return null
			}
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},
	categories(_, { all }) {
		try {
			if (all && all === true) {
				return db("categories")
			} else {
				return db("categories").where({ active: 1 })
			}
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},
}
