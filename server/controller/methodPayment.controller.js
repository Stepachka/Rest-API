const db = require('../db')

class MethodPaymentController {

    async createMethodPayment(req, res) {
        const {method_payment} = req.body
        const newMethodPayment = await db.query(
            `insert into method_payment (method_payment) values ($1) RETURNING *`, [method_payment])
        res.json(newMethodPayment.rows[0])
    }
    async getMethodPayment(req, res) {
        const MethodPayment = await db.query(
            'select * from method_payment'
        )
        res.json(MethodPayment.rows)
    }

    async deleteMethodPayment(req, res){
        const id = req.params.id
        const MethodPayment = await db.query(
            'delete from method_payment where id = $1', [id])
        res.json(MethodPayment.rows[0])
    }
}

module.exports = new MethodPaymentController()