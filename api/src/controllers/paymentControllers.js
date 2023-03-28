const Stripe = require('stripe')
require('dotenv').config()
const { API_KEY_STRIPE, email, password } = process.env
const stripe = new Stripe("sk_test_51Mkjw9ETVvdZ62yxIbqQuiRYkXR7hcFJhuj57N2zmwI998nlKYoLsgRBIEyGqkvNVvVyRsl9lMQHSwIAyfmP0A6L00ew0ZdokN")
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

    if (payment.status === 'succeeded') {
        const mailOptions = {
            from: email,
            to: searchUser.email,
            subject: 'Payment Confirmation',
            text: "Hello!\n \nWe would like to confirm that we have received your payment for publishing your car on our platform, Radiator Springs. We are thrilled that you have chosen our platform to promote your vehicle.\n \nWe want to remind you of the benefits of publishing your car on Radiator Springs, such as reaching a wider audience and having access to our network of car enthusiasts. Our platform is designed to help you sell your car quickly and easily, and we are committed to providing you with the best possible experience.\n \nThank you for choosing Radiator Springs as your option for selling your vehicle. If you have any questions or need further assistance, please do not hesitate to contact us.\n \nBest regards,\n \nThe Radiator Springs team."
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