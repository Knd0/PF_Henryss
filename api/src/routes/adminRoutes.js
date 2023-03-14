const { Router } = require('express')
const { deleteCarByAdmin } = require('../handlers/adminHandlers')

const adminRouter = Router();


adminRouter.delete('/:id', deleteCarByAdmin)


module.exports = adminRouter