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


module.exports = {
    getUsersDb,
    getUserDb, 
    createUserDb,
    getUserName
};