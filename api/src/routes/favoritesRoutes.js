const { Router } = require('express')
const { getFavorites, deleteFavorites } = require('../handlers/favoritesHandler')

const favoritesRouter = Router();

favoritesRouter.get('/', getFavorites)
favoritesRouter.delete('/', deleteFavorites)


module.exports = favoritesRouter