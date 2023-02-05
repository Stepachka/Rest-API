const Router = require('express')
const router = new Router()
const orderController = require('../controller/order.controller')

router.post('/order', orderController.createOrder)
router.get('/order', orderController.getOrder)
router.get('/order/:id', orderController.getOneOrder)
router.put('/order/:id', orderController.updateOrder)
router.delete('/order/:id', orderController.deleteOrder)


module.exports = router