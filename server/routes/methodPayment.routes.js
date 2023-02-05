const Router = require('express')
const router = new Router()
const methodPaymentController = require('../controller/methodPayment.controller')

router.post('/methodPayment', methodPaymentController.createMethodPayment)
router.get('/methodPayment', methodPaymentController.getMethodPayment)
router.delete('/methodPayment/:id', methodPaymentController.deleteMethodPayment)


module.exports = router