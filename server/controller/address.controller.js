const db = require('../db')

class AddressController {

    async createAddress(req, res) {
        const {district, street, house, apartment} = req.body
        const newAddress = await db.query(
            `insert into address (district, street, house, apartment) values ($1, $2, $3, $4) RETURNING *`, [district, street, house, apartment])
        res.json(newAddress.rows[0])
    }
    async getAddress(req, res) {
        const address = await db.query(
            'select * from address'
        )
        res.json(address.rows)
    }
    async getOneAddress(req, res) {
        const id = req.params.id
        const address = await db.query(
            'select * from address where id = $1', [id])
        res.json(address.rows[0])

    }
    async updateAddress(req, res) {
        const id = req.params.id
        const {district, street, house, apartment} = req.body
        const address = await db.query(
            'update address set ' +
            'district = $1, street = $2, house = $3, apartment = $4 ' +
            'where id = $5 RETURNING *', [district, street, house, apartment, id])
            res.json(address.rows[0])
    }
    async deleteAddress(req, res){
        const id = req.params.id
        const address = await db.query(
            'delete from address where id = $1', [id])
        res.json(address.rows[0])
    }
}

module.exports = new AddressController()