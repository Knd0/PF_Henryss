const { getDbFavorites } = require("../controllers/favoritesControllers")


const getFavorites = async (req, res) => {
    try {
        const response = await getDbFavorites();
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}



module.exports = {
    getFavorites,
}