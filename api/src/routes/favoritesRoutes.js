const { Router } = require('express')
const { getFavorites, addToFavorites, deleteToFavorites } = require('../handlers/favoritesHandler')

const favoritesRouter = Router();

favoritesRouter.get('/:userId', getFavorites)
favoritesRouter.post('/:userId/:carId', addToFavorites)
favoritesRouter.delete('/:userId/:carId', deleteToFavorites)



module.exports = favoritesRouter