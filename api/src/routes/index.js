const { Router } = require('express');
const brandRoutes = require('./brandRoutes');
const carsRoutes = require('./carsRoutes')
const favoritesRoutes = require('./favoritesRoutes')
const usersRoutes = require('./usersRoutes')


const router = Router();

router.use('/cars', carsRoutes);
router.use('/brands', brandRoutes)
router.use('/favorites', favoritesRoutes)
router.use('/user', usersRoutes)


module.exports = router;