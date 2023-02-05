const db = require('../db')

class CourierController {

    async createCourier(req, res) {
        const {first_name, last_name, phone_number, delivery_type} = req.body
        const courier = await db.query(
            `insert into courier_info (first_name, last_name, phone_number, delivery_type)
                values ($1, $2, $3, $4) RETURNING *`, [first_name, last_name, phone_number, delivery_type])
        res.json(courier.rows[0])
    }
    async getCourier(req, res) {
        const courier = await db.query(
            'select * from courier_info'
        )
        res.json(courier.rows)
    }

    async getCourierInProcessing(req, res) {
        const courier = await db.query(
            `select ci.first_name , ci.last_name , ci.phone_number, ci.type_delivery, dl.delivery_status
                from (select ci.id, ci.first_name , ci.last_name , ci.phone_number, td.type_delivery from courier_info ci inner join type_delivery td on ci.delivery_type = td.id) ci 
                inner join (select dl.courier_id , dl.delivery_status  from delivery_list dl where dl.delivery_status = 'in process') dl on ci.id = dl.courier_id`
        )
        res.json(courier.rows)
    }

    async getOneCourier(req, res) {
        const id = req.params.id
        const courier = await db.query(
            'select * from courier_info where id = $1', [id])
        res.json(courier.rows[0])

    }


    async updateCourier(req, res) {
        const id = req.params.id
        const {first_name, last_name, phone_number, delivery_type} = req.body
        const courier = await db.query(
            'update courier_info set ' +
            'first_name = $1, last_name = $2, phone_number = $3, delivery_type = $4 ' +
            'where id = $5 RETURNING *', [first_name, last_name, phone_number, delivery_type ,id])
        res.json(courier.rows[0])
    }
    async deleteCourier(req, res){
        const id = req.params.id
        const courier = await db.query(
            'delete from courier_info where id = $1', [id])
        res.json(courier.rows[0])
    }
}

module.exports = new CourierController()