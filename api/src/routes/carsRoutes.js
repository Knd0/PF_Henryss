const { Router } = require('express')
const { getCars, getCarById, postCar, putCar, deleteCar } = require('../handlers/carsHandlers')

const carsRouter = Router();

carsRouter.get('/', getCars)
carsRouter.get('/:id', getCarById)
carsRouter.post('/', postCar)
carsRouter.put('/', putCar)
carsRouter.delete('/', deleteCar)


module.exports = carsRouter
