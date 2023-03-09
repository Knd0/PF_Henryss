const { getPublications } = require('../controllers/publicationsControllers')

const getAllPublications = async (req, res) => {
    const { userId } = req.params
    try {
        const response = await getPublications(userId)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getAllPublications
}