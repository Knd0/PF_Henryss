const { Router } = require('express')
const { getFavorites } = require('../handlers/favoritesHandler')

const favoritesRouter = Router();

favoritesRouter.get('/', getFavorites)




module.exports = favoritesRouter