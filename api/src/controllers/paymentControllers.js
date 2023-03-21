const Stripe = require('stripe')
const stripe = new Stripe('sk_test_51Mkjw9ETVvdZ62yxIbqQuiRYkXR7hcFJhuj57N2zmwI998nlKYoLsgRBIEyGqkvNVvVyRsl9lMQHSwIAyfmP0A6L00ew0ZdokN')
const nodemailer = require("nodemailer");
const sgTransport = require('nodemailer-sendgrid-transport');
const { User } = require('../db');

const options = {
  auth: {
    api_key: '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'
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
