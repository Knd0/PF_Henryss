const { getDbReviews, addReview, deleteReview, updateReview, getAllReviews } = require("../controllers/reviewsControllers")


const getReview = async (req, res) => {
    const { reviewId } = req.params
    try {
        const response = await getDbReviews(reviewId);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getReviews = async (req, res) => {
    try {
        const response = await getAllReviews();
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const addToReview = async (req, res) => {
    const { userId } = req.params
    const { name, review, rating } = req.body
    try {
        const response = await addReview(userId, name, review, rating);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteToReview = async (req, res) => {
    const { userId } = req.params
    try {
        const response = await deleteReview(userId);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const changeReview = async (req, res) => {
    const { userId } = req.params
    try {
        const response = await updateReview(userId, req.body);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getReviews,
    addToReview,
    deleteToReview,
    changeReview,
    getReview
}