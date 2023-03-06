const { getUsersDb, getUserDb, createUserDb } = require('../controllers/usersControllers')

const createUser = async (req, res) => {
    try {
        const response = await createUserDb()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const response = await getUserDb()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const response = await getUsersDb()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    createUser, 
    getAllUsers, 
    getUserByEmail
}