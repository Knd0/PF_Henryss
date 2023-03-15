const { Router } = require('express')
const { getReviews, addToReview, deleteToReview, changeReview, getReview } = require('../handlers/reviewsHandler')

const reviewsRouter = Router();

reviewsRouter.get('/', getReviews)
reviewsRouter.get('/:reviewId', getReview)
reviewsRouter.post('/:userId', addToReview)
reviewsRouter.delete('/:userId', deleteToReview)
reviewsRouter.put('/:userId', changeReview)



module.exports = reviewsRouter