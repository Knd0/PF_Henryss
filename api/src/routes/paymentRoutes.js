const { Router } = require('express')
const { proceedToPay } = require('../handlers/paymentHandler')

const paymentRouter = Router();

paymentRouter.post('/', proceedToPay)


module.exports = paymentRouter

