const { getApiCars, getCarByBrand, getCarByModel, getCarDetail } = require("../controllers/carsControllers")


const getCars = (req, res) => {
    const { brand } = req.query
    const { model } = req.query
    try {
        if(brand){
            const response = getCarByBrand(brand);
            res.status(200).send(response)          
        } 
        else if(model){
            const response = getCarByModel(model);
            res.status(200).send(response) 
        }
        else {
            const response = getApiCars();
            res.status(200).send(response)
        }
    } catch (error) {
            res.status(400).json({ message: error.message })
    }
}


const getCarById = (req, res) => {
    const { id } = req.params
    try {
        const response = getCarDetail(id);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const postCar = (req, res) => {
    res.send('estoy en la ruta post')
}

const putCar = (req, res) => {
    res.send('estoy en la ruta put')
}

const deleteCar = (req, res) => {
    res.send('estoy en la ruta Delete')
} 
module.exports = {
    getCars,
    getCarById,
    postCar,
    putCar,
    deleteCar
}