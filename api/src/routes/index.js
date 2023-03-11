const { Router } = require('express');
const brandRoutes = require('./brandRoutes');
const carsRoutes = require('./carsRoutes')
const favoritesRoutes = require('./favoritesRoutes');
const publicationsRouter = require('./publicationsRoutes');
const usersRoutes = require('./usersRoutes')
const payment = require('./paymentRoutes')
const stripe = require('stripe')('sk_test_51MkEizLwPl3TbqY3UnOrOrRTmSkK8iEKzyHdGCK0WkaqwGwTUTeIywzyNAz2omxlmR0cMFIgKADq2yqXyGVvhzBa00UYARhkZF');
require('dotenv').config();
const { DB_HOST, DB_PORT } = process.env;
const YOUR_DOMAIN = `http://${DB_HOST}:${DB_PORT}/`;

const router = Router();

router.use('/cars', carsRoutes);
router.use('/brands', brandRoutes)
router.use('/favorites', favoritesRoutes)
router.use('/user', usersRoutes)
router.use('/publications', publicationsRouter)
// router.use('/createcheckoutsession', payment)



router.post('/createcheckoutsession', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1MkEmnLwPl3TbqY3INO8LkqY',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
});


module.exports = router;

