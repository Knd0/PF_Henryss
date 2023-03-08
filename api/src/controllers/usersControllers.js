const { Car, User } = require('../db')

const getUsersDb = async () => {
    return await User.findAll({
        include: [
            {
                model: Car,
                attributes: ['brand'],
                through: {
                    attributes: []
                }

            }
        ]
    })
}

const getUserDb = async (email) => {
    const data = await getUsersDb();
    const filteredUsers = data.filter((user) => user.email.toLowerCase().includes(email.toLowerCase()));

    return filteredUsers
}

const createUserDb = ( username, email, name, image ) => {
    if(!username || !email || !name || !image ) return ("Misssing info")
    let searchUser = User.findOne({
        where: { name: name }
    });
    if (!searchUser) return (" Existing car")

    let userCreate =  User.create({ username, email, name, image });
    return userCreate;
}


module.exports = {
    getUsersDb,
    getUserDb, 
    createUserDb
};