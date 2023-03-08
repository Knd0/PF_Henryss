const { getAllCars, getCarDetail } = require('./carsControllers')


const getDbFavorites = async () => {
    const data = await getAllCars()
    const filteredFavorites = data.filter((car) => car.favorite === true)
    if(filteredFavorites.length) return filteredFavorites
    else return('You dont have favorites yet')
}



module.exports = {
    getDbFavorites,
}