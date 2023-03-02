const { getBrandsDb } = require('../controllers/brandsControllers')

const getAllBrands = async (req, res) => {
    try {
        const response = await getBrandsDb()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getAllBrands
}