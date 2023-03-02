const data = require('../../cards.json')
console.log(data.cars)

const getApiCars = () => {
    return data.cars;
}

const getCarByBrand = (brand) => {
    
    let query = brand.toLowerCase()
   
    const filteredCars = data.cars.filter(j=>{
        if(j.brand.toLowerCase().includes(query)){
           return j
        }
     });
    return filteredCars
}

const getCarByModel = (model) => {
    let query = brand.toLowerCase()
   
    const filteredCars = data.cars.filter(j=>{
        if(j.brand.toLowerCase().includes(query)){
           return j
        }
     });
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