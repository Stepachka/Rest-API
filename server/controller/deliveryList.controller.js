const db = require('../db')

class DeliveryListController {

    async createDeliveryList(req, res) {
        const {payment_method, delivery_status, courier_id, order_id} = req.body
        const order = await db.query(
            `insert into delivery_list (payment_method, delivery_status, courier_id, order_id) values ($1, $2, $3, $4) RETURNING *`, [payment_method, delivery_status, courier_id, order_id])
        res.json(order.rows[0])
    }
    async getDeliveryList(req, res) {
        const order = await db.query(
            `select * from delivery_list`
        )
        res.json(order.rows)
    }
    async getOneDeliveryList(req, res) {
        const id = req.params.id
        const order = await db.query(
            'select * from delivery_list where id = $1', [id])
        res.json(order.rows[0])

    }
    async updateDeliveryList(req, res) {
        const id = req.params.id
        const {payment_method, delivery_status, courier_id, order_id} = req.body
        const order = await db.query(
            'update delivery_list set ' +
            'payment_method = $1, delivery_status = $2, courier_id = $3, order_id = $4 ' +
            'where id = $5 RETURNING *', [payment_method, delivery_status, courier_id, order_id, id])
        res.json(order.rows[0])
    }
    async deleteDeliveryList(req, res){
        const id = req.params.id
        const order = await db.query(
            'delete from delivery_list where id = $1', [id])
        res.json(order.rows[0])
    }


}

module.exports = new DeliveryListController()