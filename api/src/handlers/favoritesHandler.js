const { getDbFavorites, addFavorites, deleteFavorites } = require("../controllers/favoritesControllers")


const getFavorites = async (req, res) => {
    const { userId } = req.params
    try {
        const response = await getDbFavorites(userId);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const addToFavorites = async (req, res) => {
    const { userId, carId } = req.params
    try {
        const response = await addFavorites(userId, carId);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteToFavorites = async (req, res) => {
    const { userId, carId } = req.params
    try {
        const response = await deleteFavorites(userId, carId);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getFavorites,
    addToFavorites,
    deleteToFavorites
}