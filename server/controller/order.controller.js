const db = require('../db')

class OrderController {

    async createOrder(req, res) {
        const {status_order_id, customer_id, date_get} = req.body
        const order = await db.query(
            `insert into "order" (status_order_id, customer_id, date_get) values ($1, $2, $3) RETURNING *`, [status_order_id, customer_id, date_get])
        res.json(order.rows[0])
    }
    async getOrder(req, res) {
        const order = await db.query(
            'select * from "order"'
        )
        res.json(order.rows)
    }
    async getOneOrder(req, res) {
        const id = req.params.id
        const order = await db.query(
            'select * from "order" where id = $1', [id])
        res.json(order.rows[0])

    }
    async updateOrder(req, res) {
        const id = req.params.id
        const {status_order_id, customer_id, date_get} = req.body
        const order = await db.query(
            'update "order" set ' +
            'status_order_id = $1, customer_id = $2, date_get = $3 ' +
            'where id = $4 RETURNING *', [status_order_id, customer_id, date_get, id])
        res.json(order.rows[0])
    }
    async deleteOrder(req, res){
        const id = req.params.id
        const order = await db.query(
            'delete from "order" where id = $1', [id])
        res.json(order.rows[0])
    }
}

module.exports = new OrderController()