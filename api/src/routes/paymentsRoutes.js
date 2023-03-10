const { Router } = require("express");

const { postPayments } = require("../handlers/paymentsHandlers");

const paymentsRouter = Router();

paymentsRouter.post("/", postPayments);
paymentsRouter.get('/', getPayments)

module.exports = paymentsRouter;
