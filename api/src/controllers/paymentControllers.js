require('dotenv').config();
const {
    API_KEY_NODEMAILER,
    API_KEY_STRIPE
  } = process.env;
const Stripe = require('stripe')
const stripe = new Stripe(API_KEY_STRIPE)
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const { User } = require('../db');

const options = {
  auth: {
    api_key: API_KEY_NODEMAILER
  }
};

const transporter = nodemailer.createTransport(sgTransport(options));

const pay = async (id, amount, userId) => {
  if(!userId) return ('You need to login to proceed with the payment');
  let searchUser = await User.findOne({
    where: { userId: userId }
  });
  if(!searchUser) return ('This user does not exist');
  const payment = await stripe.paymentIntents.create({
    amount,
    currency: "USD",
    description: "nada",
    payment_method: id,
    confirm: true
  });

  const mailOptions = {
    from: "66.radiador.springs@gmail.com",
    to: searchUser.email,
    subject: "Pago exitoso",
    text: "Se ha realizado un pago exitoso."
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Correo electrónico enviado: " + info.response);
    }
  });
  return ('Success payment');
};

module.exports = {
  pay
};
