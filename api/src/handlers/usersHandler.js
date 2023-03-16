const { getUsersDb, getUserDb, createUserDb, getUserName, deleteToUser, updateToUser, getUserDbId } = require('../controllers/usersControllers')

const createUser = async (req, res) => {
    const { nickname, email, name, picture } = req.body
    try {
        const response = await createUserDb(nickname, email, name, picture)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const getAllUsers = async (req, res) => {
    const { email, name, userId } = req.query
    try {
        if(email){
            const response = await getUserDb(email)
            res.status(200).send(response)
        } else if(name) {
            const response = await getUserName(name)
            res.status(200).send(response)
        } else if(userId){
            const response = await getUserDbId(userId)
            res.status(200).send(response)
        }else {
            const response = await getUsersDb()
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    const { userId } = req.params
    try {
        const response = await deleteToUser(userId);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const changeUser = async (req, res) => {
    const { userId } = req.params
    try {
        const response = await updateToUser(userId, req.body);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    createUser, 
    getAllUsers,
    changeUser,
    deleteUser 
}