/** @format */
const db = require("../../config/db")

module.exports = {
	catalog(_, { filter }) {
		try {
			const { _id, name } = filter

			if (_id) {
				return db("catalogs")
					.where({ _id })
					.first()
			} else if (name) {
				return db("catalogs")
					.where({ name })
					.first()
			} else {
				return null
			}
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},
	catalogs(_, { all }) {
		try {
			if (all && all === true) {
				return db("catalogs")
			} else {
				return db("catalogs").where({ active: 1 })
			}
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},
}
