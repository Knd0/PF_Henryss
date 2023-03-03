const { getDbFavorites, deleteDbFavorites } = require("../controllers/favoritesControllers")


const getFavorites = (req, res) => {
    try {
            const response = getDbFavorites();
            res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteFavorites = (req, res) => {
    try {
        const { id } = req.params;
        const result = deleteDbFavorites(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getFavorites,
    deleteFavorites,
}