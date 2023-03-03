const { Router } = require('express')
const { getFavorites, deleteFavorites } = require('../handlers/favoritesHandlers')

const favoritesRouter = Router();

favoritesRouter.get('/', getFavorites)
favoritesRouter.delete('/', deleteFavorites)


module.exports = favoritesRouter