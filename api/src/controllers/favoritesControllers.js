const { Car } = require('../db')


const getDbFavorites = () => {
    return data.cars;
}

const deleteDbFavorites = (id) => {
    try {
        const cars = Car.findByPk(id);
        if (!cars) {
            throw new Error("Not found ");
        } else {
            cars.detroy()
            return { msg: "Car successful delete" };
        }
    } catch(error) {
        throw new Error(error.message);
    }
}

module.exports = {
    deleteDbFavorites,
    getDbFavorites
}