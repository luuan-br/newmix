/** @format */
const db = require("../../config/db")
const uniqid = require("uniqid")
const { product: getProduct } = require("../Query/Product")

const mutations = {
	async newProduct(_, { data }) {
		const productID = uniqid()

		try {
			await db("products").insert({
				_id: productID,
				name: data.name,
				code: data.code,
			})

			for (let image of data.images) {
				await db("images").insert({
					_id: uniqid(),
					name: image.name,
					url_image: image.url_image,
					product_id: productID,
				})
			}

			return db("products")
				.where({ _id: productID })
				.first()
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},

	async updateProduct(_, { filter, data }) {
		try {
			const product = await getProduct(_, { filter })

			if (data.images && data.images.lenght) {
				await db("images")
					.where({ product_id: product._id })
					.delete()

				for (let image of product.images) {
					await db("images").insert({
						_id: uniqid(),
						name: image.name,
						url_image: image.url_image,
						product_id: productID,
					})
				}
			}

			delete data.images

			await db("products")
				.where({ _id: product._id })
				.update({
					...data,
				})

			return db("products")
				.where({ _id: product._id })
				.first()
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},

	async deleteProduct(_, { filter }) {
		try {
			const product = await getProduct(_, { filter })

			if (product) {
				await db("products")
					.where({ _id: product._id })
					.update({ active: false })

				product.active = false
			}

			return !product ? null : product
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},

	async destroyProduct(_, { filter }) {
		try {
			const product = await getProduct(_, { filter })

			if (product && product.active == false) {
				await db("images")
					.where({ product_id: product._id })
					.delete()

				await db("products")
					.where({ _id: product._id })
					.delete()
			} else if (product.active == true) {
				return new Error("It's not possible to delete an active product")
			}

			return !product ? null : product
		} catch (e) {
			throw new Error(e.sqlMessage)
		}
	},
}

module.exports = mutations
