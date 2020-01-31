/** @format */
const db = require("../../config/db")
const { catalog: getCatalog } = require("../Query/Catalog")
const uniqid = require("uniqid")

const mutations = {
	async newCatalog(_, { data }) {
		const _id = uniqid()

		await db("catalogs").insert({
			_id,
			name: data.name,
		})

		return db("catalogs")
			.where({ _id })
			.first()
	},

	async updateCatalog(_, { filter, data }) {
		try {
			const catalog = await getCatalog(_, { filter })

			await db("catalogs")
				.where({ _id: catalog._id })
				.update({
					...data,
				})

			return !catalog ? null : catalog
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},

	async deleteCatalog(_, { filter }) {
		try {
			const catalog = await getCatalog(_, { filter })

			if (catalog) {
				await db("catalogs")
					.where({ _id: catalog._id })
					.update({ active: false })

				catalog.active = false
			}

			return !catalog ? null : catalog
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},

	async destroyCatalog(_, { filter }) {
		try {
			const catalog = await getCatalog(_, { filter })

			if (catalog && catalog.active == false) {
				await db("catalogs")
					.where({ _id: catalog._id })
					.delete()
			} else if (catalog.active == true) {
				return new Error("It's not possible to delete an active catalog")
			}

			return !catalog ? null : catalog
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},
}

module.exports = mutations
