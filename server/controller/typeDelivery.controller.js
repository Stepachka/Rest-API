const db = require('../db')

class TypeDeliveryController {

    async createTypeDelivery(req, res) {
        const {type_delivery} = req.body
        const TypeDelivery = await db.query(
            `insert into type_delivery (type_delivery) values ($1) RETURNING *`, [type_delivery])
        res.json(TypeDelivery.rows[0])
    }
    async getTypeDelivery(req, res) {
        const TypeDelivery = await db.query(
            'select * from type_delivery'
        )
        res.json(TypeDelivery.rows)
    }

    async deleteTypeDelivery(req, res){
        const id = req.params.id
        const TypeDelivery = await db.query(
            'delete from type_delivery where id = $1', [id])
        res.json(TypeDelivery.rows[0])
    }
}

module.exports = new TypeDeliveryController()