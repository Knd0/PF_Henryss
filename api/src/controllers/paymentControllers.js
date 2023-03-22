const Stripe = require('stripe')
require('dotenv').config()
const { API_KEY_STRIPE, email, password } = process.env
const stripe = new Stripe(API_KEY_STRIPE)
const nodemailer = require("nodemailer");
const { User } = require('../db')

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: email,
        pass: password,
    },
});



const pay = async (id, amount, userId) => {
    if(!userId) return ('You need to login to procced with the pay')
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

    if (payment.status === 'succeeded') {
        const mailOptions = {
            from: email,
            to: searchUser.email,
            subject: 'Payment Confirmation',
            text: 'Your payment has been processed successfully!'
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        return ('Success payment and email sent');
    } else {
        return ('Payment failed');
    }
}

module.exports = {
    pay
}