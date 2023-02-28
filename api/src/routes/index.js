const { Router } = require('express');
const brandRoutes = require('./brandRoutes');
const carsRoutes = require('./carsRoutes')

const router = Router();

router.use('/cars', carsRoutes);
router.use('/brands', brandRoutes)

module.exports = router;