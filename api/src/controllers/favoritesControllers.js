const { User } = require('../db')
const { getCarDetail } = require('./carsControllers')


const getDbFavorites = async (userId) => {
    if(!userId) return ('You need to login for see your favorites')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    if(!searchUser.favorites.length) return ('You dont have favorites')
    const promises = []
    for (let index = 0; index < searchUser.favorites.length; index++) {
        promises.push(await getCarDetail(searchUser.favorites[index]))
    }
    return await Promise.all(promises)
}

const addFavorites = async (userId, carId) => {
    if(!userId) return ('You need to login for see your favorites')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if (searchUser) {
        if(!searchUser.favorites.length) return ('You dont have publications')
        const searchCarId = searchUser.favorites.indexOf(carId)
        if(searchCarId !== -1){
            return ('You can not repeat favorites')
        } else {
        searchUser.favorites.push(carId);
        await User.update({ favorites: searchUser.favorites }, {
            where: { userId: userId }
        });
        }
    }
    return ('add to favorite')
}

const deleteFavorites = async (userId, carId) => {
    if(!userId) return ('You need to login for see your favorites')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if (searchUser) {
        if(searchUser.favorites.length){
        searchUser.favorites = searchUser.favorites.filter((id) => id !== carId)
        await User.update({ favorites: searchUser.favorites }, {
            where: { userId: userId }
        });
        } else return ('You dont have favorites')
    }
    return ('delete to favorite')
}


module.exports = {
    getDbFavorites,
    addFavorites,
    deleteFavorites
}