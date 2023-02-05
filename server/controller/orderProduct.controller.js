const db = require('../db')

class OrderProductController {

    async createOrderProduct(req, res) {
        const {order_id, product_id, quantity} = req.body
        const ordersProducts = await db.query(
            `insert into orders_products (order_id, product_id, quantity) values ($1, $2, $3) RETURNING *`, [order_id, product_id, quantity])
        res.json(ordersProducts.rows[0])
    }
    async getOrderProduct (req, res) {
        const ordersProducts = await db.query(
            `select o.first_name, o.last_name, o.phone_number, o.district, o.house, o.apartment, o.date_get, o.status_order, p.menu, p.price, p.quantity
                from (select o.id, c.first_name , c.last_name , c.phone_number, c.district , c.street , c.house , c.apartment, o.date_get, o.status_order
                from (select c.id , c.first_name , c.last_name , phone_number, a.district , a.street , a.house , a.apartment  from customers c inner join address a  on a.id = c.address_id ) c 
                inner join (select o.id , o.customer_id, o.date_get, so.status_order  from "order" o inner join status_order so on o.status_order_id = so.id)  o 
                on c.id = o.customer_id ) o
                inner join (select op.order_id , p.menu , p.price , op.quantity  from orders_products op inner join products p on p.id = op.product_id ) p
                on o.id = p.order_id;`
        )
        res.json(ordersProducts.rows)
    }
    async getOneOrderProduct(req, res) {
        const id = req.params.id
        const ordersProducts = await db.query(
            'select * from orders_products where order_id = $1', [id])
        res.json(ordersProducts.rows[0])

    }
    async updateOrderProduct(req, res) {
        const id = req.params.id
        const {order_id, product_id, quantity} = req.body
        const ordersProducts = await db.query(
            'update orders_products set ' +
            'order_id = $1, product_id = $2, quantity = $3 ' +
            'where order_id = $4 RETURNING *', [order_id, product_id, quantity, id])
        res.json(ordersProducts.rows[0])
    }
    async deleteOrderProduct(req, res){
        const id = req.params.id
        const ordersProducts = await db.query(
            'delete from orders_products where order_id = $1', [id])
        res.json(ordersProducts.rows[0])
    }
}

module.exports = new OrderProductController()