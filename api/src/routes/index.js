const { Router } = require('express');
const brandRoutes = require('./brandRoutes');
const carsRoutes = require('./carsRoutes')
const favoritesRoutes = require('./favoritesRoutes');
const publicationsRouter = require('./publicationsRoutes');
const usersRoutes = require('./usersRoutes')
const payment = require('./paymentRoutes')
const reviewsRoutes = require('./reviewsRoutes')
const adminRoutes = require('./adminRoutes')




const router = Router();

router.use('/cars', carsRoutes);
router.use('/brands', brandRoutes);
router.use('/favorites', favoritesRoutes);
router.use('/user', usersRoutes);
router.use('/publications', publicationsRouter);
router.use('/checkout', payment);
router.use('/review', reviewsRoutes);
router.use('/admin', adminRoutes);





module.exports = router;
