const Stripe = require('stripe')
const stripe = new Stripe('sk_test_51Mkjw9ETVvdZ62yxIbqQuiRYkXR7hcFJhuj57N2zmwI998nlKYoLsgRBIEyGqkvNVvVyRsl9lMQHSwIAyfmP0A6L00ew0ZdokN')
const nodemailer = require("nodemailer");
const { User } = require('../db')


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "66.radiador.springs@gmail.com",
        pass: "radiador123",
    },
});

const pay = async (id, amount, userId) => {
    if(!userId) return ('You need to login for see your review')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "nada",
        payment_method: id,
        confirm: true

    })
    // Configura el objeto de correo electrónico
    const mailOptions = {
        from: "66.radiador.springs@gmail.com",
        to: searchUser.email,
        subject: "Pago exitoso",
        text: "Se ha realizado un pago exitoso."
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Correo electrónico enviado: " + info.response);
        }
    });
    return ('Success payment')
}

module.exports = {
    pay
}