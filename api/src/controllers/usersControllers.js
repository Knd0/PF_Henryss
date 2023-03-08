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

const createUserDb = ( nickname, email, name, picture ) => {
    if(!nickname) return ("Misssing nickname")
    if(!email) return ("Misssing email")
    if(!name) return ("Misssing name")
    if(!picture) return ("Misssing picture")
    let searchUser = User.findOne({
        where: { name: name }
    });
    if (!searchUser) return (" Existing car")

    let userCreate =  User.create({ nickname, email, name, picture });
    return userCreate;
}


module.exports = {
    getUsersDb,
    getUserDb, 
    createUserDb
};