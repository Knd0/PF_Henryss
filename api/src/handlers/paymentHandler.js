const { pay } = require('../controllers/paymentControllers')

const proceedToPay= async (req, res) => {
    const { id, amount, userId} = req.body
    try {
        const response = await pay(id, amount, userId)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    proceedToPay
}


