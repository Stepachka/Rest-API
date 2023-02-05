const Router = require('express')
const router = new Router()
const StatusOrderController = require('../controller/statusOrder.controller')

router.post('/statusOrder', StatusOrderController.createStatusOrder)
router.get('/statusOrder', StatusOrderController.getStatusOrder)
router.delete('/statusOrder/:id', StatusOrderController.deleteStatusOrder)


module.exports = router