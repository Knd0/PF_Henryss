

const getCars = (req, res) => {
    res.send('estoy en la ruta getCars')
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