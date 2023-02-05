const db = require('../db')

class CustomerController {

    async createCustomer(req, res) {
        const {first_name, last_name, phone_number, address_id} = req.body
        const customers = await db.query(
            `insert into customers (first_name, last_name, phone_number, address_id) 
                values ($1, $2, $3, $4) RETURNING *`, [first_name, last_name, phone_number, address_id])
        res.json(customers.rows[0])
    }
    async getCustomer(req, res) {
        const address = await db.query(
            'select * from customers'
        )
        res.json(address.rows)
    }
    async getOneCustomer(req, res) {
        const id = req.params.id
        const customers = await db.query(
            'select * from customers where id = $1', [id])
        res.json(customers.rows[0])

    }
    async updateCustomer(req, res) {
        const id = req.params.id
        const {first_name, last_name, phone_number, address_id} = req.body
        const customers = await db.query(
            'update customers set ' +
            'first_name = $1, last_name = $2, phone_number = $3, address_id = $4 ' +
            'where id = $5 RETURNING *', [first_name, last_name, phone_number, address_id, id])
        res.json(customers.rows[0])
    }
    async deleteCustomer(req, res){
        const id = req.params.id
        const customers = await db.query(
            'delete from customers where id = $1', [id])
        res.json(customers.rows[0])
    }
}

module.exports = new CustomerController()