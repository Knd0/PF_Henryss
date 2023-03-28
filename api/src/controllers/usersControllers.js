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

const getUserDbId = async (userId) => {
    const data = await getUsersDb();
    const filteredUsers = data.filter((user) => user.userId == userId);

    return filteredUsers
}

const getUserDb = async (email) => {
    const data = await getUsersDb();
    const filteredUsers = data.filter((user) => user.email.toLowerCase().includes(email.toLowerCase()));

    return filteredUsers
}

const getUserName = async (name) => {
    const data = await getUsersDb();
    const filteredUsers = data.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));

    return filteredUsers
}

const createUserDb = async (nickname, email, name, picture) => {
    if (!nickname) return "Missing nickname";
    if (!email) return "Missing email";
    if (!name) return "Missing name";
    if (!picture) return "Missing picture";
    
    try {
        let searchUser = await User.findOne({
            where: { name: name }
        });
    if (searchUser) return "Existing user";
    let userCreate = await User.create({ nickname, email, name, picture });
        return userCreate;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateToUser = async (userId, user) => {
    if(!userId) return ('You need to login for see your review')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    await searchUser.update({...user});
    return ('User updated');
}


const deleteToUser = async (userId) => {
    if(!userId) return ('You need to login for delete')
    let user = await User.findOne({
        where: { userId: userId }
    });
    if(!user) return ('This user does not exist')
    await user.destroy();
    return ('User deleted')
}

module.exports = {
    getUsersDb,
    getUserDb, 
    createUserDb,
    getUserName,
    deleteToUser,
    updateToUser,
    getUserDbId
};