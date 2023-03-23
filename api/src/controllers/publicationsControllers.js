const { User } = require('../db');
const { getCarDetail } = require('./carsControllers');


const getPublications = async (userId) => {
    if(!userId) return ('You need to login for see your hola')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    if(!searchUser.publications.length) return ('You dont have publications')
    let promises = []
    for (let index = 0; index < searchUser.publications.length; index++) {
        promises.push(await getCarDetail(searchUser.publications[index]))
    }
    promises = promises.filter(arr => arr.length > 0);
    return await Promise.all(promises)
}

const deletePublications = async (userId, carId) => {
    if(!userId) return ('You need to login for see your publication')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if (searchUser) {
        if(searchUser.publications.length){
        searchUser.publications = searchUser.publications.filter((id) => id !== carId)
        await User.update({ publications: searchUser.publications }, {
            where: { userId: userId }
        });
        } else return ('You dont have publications')
    }
    return ('delete to publication')
}

module.exports = {
    getPublications,
    deletePublications
}