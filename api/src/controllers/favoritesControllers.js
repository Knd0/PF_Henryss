const User = require('../models/User')
const { getAllCars, getCarDetail } = require('./carsControllers')


const getDbFavorites = async () => {
    const data = await getAllCars()
    const filteredFavorites = data.filter((car) => car.favorite === true)
    if(filteredFavorites.length) return filteredFavorites
    else return('You dont have favorites yet')
}

const addFavorites = async (userId, carId) => {
    let searchUser = User.findOne({
        where: { userId: userId }
    });
        if(searchUser){
            console.log(searchUser);
        }

}


module.exports = {
    getDbFavorites,
}