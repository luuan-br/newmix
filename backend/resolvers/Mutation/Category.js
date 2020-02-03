/** @format */
const db = require("../../config/db");
const { category: getCategory } = require("../Query/Category");
const uniqid = require("uniqid");

const mutations = {
	async newCategory(_, { data }) {
		const _id = uniqid();

		await db("categories").insert({
			_id,
			name: data.name
		});

		return db("categories")
			.where({ _id })
			.first();
	},

	async updateCategory(_, { filter, data }) {
		try {
			const category = await getCategory(_, { filter });

			await db("categories")
				.where({ _id: category._id })
				.update({
					...data
				});

			return !category ? null : category;
		} catch (e) {
			throw new Error(e.sqlMessage);
		}
	},

	async deleteCategory(_, { filter }) {
		try {
			const category = await getCategory(_, { filter });

			if (category) {
				await db("categories")
					.where({ _id: category._id })
					.update({ active: false });

				category.active = false;
			}

			return !category ? null : category;
		} catch (e) {
			throw new Error(e.sqlMessage);
		}
	},

	async destroyCategory(_, { filter }) {
		try {
			const category = await getCategory(_, { filter });

			if (category && category.active == false) {
				await db("categories")
					.where({ _id: category._id })
					.delete();
			} else if (category.active == true) {
				return new Error(
					"It's not possible to delete an active category"
				);
			}

			return !category ? null : category;
		} catch (e) {
			throw new Error(e.sqlMessage);
		}
	}
};

module.exports = mutations;
