const { Router } = require('express')
const carsRoutes = require('./carsRoutes')

const router = Router();

router.use('/cars', carsRoutes);

module.exports = router;