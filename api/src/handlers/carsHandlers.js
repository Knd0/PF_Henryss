const { getApiCars, getCarByMake, getCarByModel } = require("../controllers/carsControllers")


const getCars = (req, res) => {
    const { make } = req.query
    const { model } = req.query
    try {
        if(make){
            const response = getCarByMake(make);
            res.status(200).send(response) 
        }
        if(model){
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
    res.send('estoy en la ruta por id')
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