const data = require('../../cards.json')

const getApiCars = () => {
    return data.cars;
}

const getCarByBrand = (brand) => {
    
    const filteredCars = data.cars.filter((car) => car.brand == brand  );
    return filteredCars
}

const getCarByModel = (model) => {
    const filteredCars = data.cars.filter((car) => car.model == model );
    return filteredCars
}

const getCarDetail = (id) => {
    const filteredCars = data.cars.filter((car) => car.id == id );
    return filteredCars
}
module.exports = {
    getApiCars,
    getCarByBrand,
    getCarByModel,
    getCarDetail
}