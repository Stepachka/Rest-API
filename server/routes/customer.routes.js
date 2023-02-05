const Router = require('express')
const router = new Router()
const customerController = require('../controller/customers.controller')

router.post('/customers', customerController.createCustomer)
router.get('/customers', customerController.getCustomer)
router.get('/customers/:id', customerController.getOneCustomer)
router.put('/customers/:id', customerController.updateCustomer)
router.delete('/customers/:id', customerController.deleteCustomer)


module.exports = router