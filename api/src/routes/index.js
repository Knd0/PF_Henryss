const { Router } = require('express');
const brandRoutes = require('./brandRoutes');
const carsRoutes = require('./carsRoutes')
const favoritesRoutes = require('./favoritesRoutes');
const publicationsRouter = require('./publicationsRoutes');
const usersRoutes = require('./usersRoutes')



const router = Router();

router.use('/cars', carsRoutes);
router.use('/brands', brandRoutes)
router.use('/favorites', favoritesRoutes)
router.use('/user', usersRoutes)
router.use('/publications', publicationsRouter)



module.exports = router;