const { pay } = require('../controllers/paymentControllers')

const proceedToPay= async (req, res) => {
    try {
        const response = await pay()
        res.redirect(303, response);
        // res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    proceedToPay
}


