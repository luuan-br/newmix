/** @format */
const db = require("../../config/db");

module.exports = {
	catalog(_, { filter }) {
		try {
			const { _id, name } = filter;

			if (_id) {
				return db("catalogs")
					.where({ _id })
					.first();
			} else if (name) {
				return db("catalogs")
					.where({ name })
					.first();
			} else {
				return null;
			}
		} catch (e) {
			throw new Error(e.sqlMessage);
		}
	},
	catalogs(_, { all, offset, limit }) {
		// nota offset e limit devem ser parametros obrigatorios
		// pois gerao aviso no back se nao informados
		try {
			if (all && all === true) {
				return db("catalogs")
					.orderBy("created_at")
					.offset(offset)
					.limit(limit);
			} else {
				return db("catalogs")
					.where({ active: 1 })
					.orderBy("created_at")
					.offset(offset)
					.limit(limit);
			}
		} catch (e) {
			throw new Error(e.sqlMessage);
		}
	}
};
