
const mercadopago = require("mercadopago");

const { ACCESS_TOKEN } = process.env;

const payment = Router();

mercadopago.configure({ access_token: ACCESS_TOKEN });


const postPayments = (req, res) => {
  const {  } = req.body;


    // const mp_items =  [{
    //   id: ,
    //   title: ,
    //   unit_price: ,
    //   quantity: ,
    // }]
 }