const db = require('../db')

class ProductsController {

    async createProducts(req, res) {
        const {price, menu} = req.body
        const newProducts = await db.query(
            `insert into products (price, menu) values ($1, $2) RETURNING *`, [price, menu])
        res.json(newProducts.rows[0])
    }
    async getProducts(req, res) {
        const Products = await db.query(
            'select * from products'
        )
        res.json(Products.rows)
    }

    async deleteProducts(req, res){
        const id = req.params.id
        const Product = await db.query(
            'delete from products where id = $1', [id])
        res.json(Product.rows[0])
    }
}

module.exports = new ProductsController()