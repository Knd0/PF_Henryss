const { deleteCar, deleteReview } = require('../controllers/adminControllers')

const deleteCarByAdmin = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await deleteCar(id);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteReviewByAdmin = async (req, res) => {
    const { reviewId } = req.params;
    try {
        const response = await deleteReview(reviewId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    deleteCarByAdmin,
    deleteReviewByAdmin
}