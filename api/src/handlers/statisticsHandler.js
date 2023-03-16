const { getCarsStatistics, getUsersStatistics } = require('../controllers/statisticsControllers')

const getStatisticsCars = async (req, res) => {
    try {
        const response = await getCarsStatistics()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getStatisticsUsers = async (req, res) => {
    try {
        const response = await getUsersStatistics()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports = {
    getStatisticsCars,
    getStatisticsUsers
}