const { Router } = require('express')
const { getCars, getCarById, postCar, putCar, deleteCar } = require('../handlers/carsHandlers')

const carsRouter = Router();

carsRouter.get('/', getCars)
carsRouter.get('/:id', getCarById)
carsRouter.post('/:userId', postCar)
carsRouter.put('/:userId/:id', putCar)
carsRouter.delete('/:userId/:id', deleteCar)


module.exports = carsRouter
