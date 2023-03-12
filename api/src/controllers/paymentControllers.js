const Stripe = require('stripe')
const stripe = new Stripe('sk_test_51Mkjw9ETVvdZ62yxIbqQuiRYkXR7hcFJhuj57N2zmwI998nlKYoLsgRBIEyGqkvNVvVyRsl9lMQHSwIAyfmP0A6L00ew0ZdokN')


const pay = async (id, amount) => {
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "nada",
        payment_method: id,
        confirm: true

    })
    console.log(payment);
    return ('Success payment')
}

module.exports = {
    pay
}