const data = require('../../cards.json')

const getApiCars = () => {
    return data.cars;
}

const getCarByMake = (make) => {
    const filteredCars = data.cars.filter((car) => car.make == make  );
    return filteredCars
}

const getCarByModel = (model) => {
    const filteredCars = data.cars.filter((car) => car.model == model );
    return filteredCars
}
module.exports = {
    getApiCars,
    getCarByMake,
    getCarByModel,
}