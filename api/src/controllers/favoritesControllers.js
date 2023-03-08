const { Car } = require('../db')
const data = require('../../cards.json')

const getDbFavorites = () => {
    return data.cars;
}

const deleteDbFavorites = (id) => {
    return ('controller delete favorite')
}

module.exports = {
    deleteDbFavorites,
    getDbFavorites
}