const { Router } = require('express')
const { getReviews, addToReview, deleteToReview, changeReview } = require('../handlers/reviewsHandler')

const reviewsRouter = Router();

reviewsRouter.get('/:userId', getReviews)
reviewsRouter.post('/:userId', addToReview)
reviewsRouter.delete('/:userId', deleteToReview)
reviewsRouter.put('/:userId', changeReview)



module.exports = reviewsRouter