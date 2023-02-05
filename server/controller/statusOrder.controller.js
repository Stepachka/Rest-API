const db = require('../db')

class StatusOrderController {

    async createStatusOrder(req, res) {
        const {status_order} = req.body
        const newStatusOrder = await db.query(
            `insert into status_order (status_order) values ($1) RETURNING *`, [status_order])
        res.json(newStatusOrder.rows[0])
    }
    async getStatusOrder(req, res) {
        const StatusOrder = await db.query(
            'select * from status_order'
        )
        res.json(StatusOrder.rows)
    }

    async deleteStatusOrder(req, res){
        const id = req.params.id
        const StatusOrder = await db.query(
            'delete from status_order where id = $1', [id])
        res.json(StatusOrder.rows[0])
    }
}

module.exports = new StatusOrderController()