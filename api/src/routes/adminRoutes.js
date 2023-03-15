const { Router } = require('express')
const { deleteCarByAdmin, deleteReviewByAdmin } = require('../handlers/adminHandlers')

const adminRouter = Router();


adminRouter.delete('/:id', deleteCarByAdmin)

adminRouter.delete('/review/:reviewId', deleteReviewByAdmin)

module.exports = adminRouter