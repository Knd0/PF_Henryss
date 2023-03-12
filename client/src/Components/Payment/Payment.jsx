import React from "react";
import style from "./Payments.module.css";
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios";
import { 
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"

const stripePromise = loadStripe("pk_test_51Mkjw9ETVvdZ62yxAbbo4ZMtivK65brWg5vL57vmKkbchNPzh2BLMEADmslAhtlkLQvyjMoUnDArJta0m0unzLB200BrVKqTze");
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if(!error){
      const { id } = paymentMethod;
      const { data } = await axios.post('/checkout',{
        id,
        amount: 111111
      });
      console.log(data);
      elements.getElement(CardElement).clear();
    }
  }
  return(
    <form onSubmit={handleSubmit}>
      <img className={style.img} src="https://scontent.fsty3-1.fna.fbcdn.net/v/t39.30808-6/243193457_102298218891167_834442695997563719_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=FJMvcwdagkwAX_CK707&_nc_ht=scontent.fsty3-1.fna&oh=00_AfC7iKXvNLcb2k7mwf7DnmdskCX7KNtC5llJsxh0vOnayA&oe=64111028" alt="The cover of Stubborn Attachments" />
      <div className={style.description}>
        <h3 className={style.h3}>Car Post</h3>
        <h5 className={style.h5}>$1.00</h5>
      </div>
      <div>
        <CardElement/>
      </div>
      <button disabled={!stripe} className={style.button}>Buy</button>
    </form>
  )
}
function Payment(){
  return(
    <Elements stripe={stripePromise}>
      <div>
        <div>
          <CheckoutForm/>
        </div>
      </div>
    </Elements>
  )
}

export default Payment;

