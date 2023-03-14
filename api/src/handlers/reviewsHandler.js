const { getDbReviews, addReview, deleteReview, updateReview } = require("../controllers/reviewsControllers")


const getReviews = async (req, res) => {
    const { userId } = req.params
    try {
        const response = await getDbReviews(userId);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const addToReview = async (req, res) => {
    const { userId } = req.params
    const { review } = req.body
    try {
        const response = await addReview(userId, review);
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
    const { review } = req.body
    try {
        const response = await updateReview(userId, review);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getReviews,
    addToReview,
    deleteToReview,
    changeReview
}