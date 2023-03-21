import React from "react";
import style from "./Payments.module.css";
import { loadStripe } from "@stripe/stripe-js"
import { useEffect, useState } from "react";
import validateCheckout from "../Helpers/validateCheckout";
import axios from "axios";
import { useSelector } from "react-redux";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { 
  Elements,
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from "@stripe/react-stripe-js"




const stripePromise = loadStripe("pk_test_51Mkjw9ETVvdZ62yxAbbo4ZMtivK65brWg5vL57vmKkbchNPzh2BLMEADmslAhtlkLQvyjMoUnDArJta0m0unzLB200BrVKqTze");


const CheckoutForm = (props) => {
  const  {     
    setShowCheckoutForm={setShowCheckoutForm},    
    setShowSevenComponent={setShowSevenComponent}
   } = props;
  const stripe = useStripe();
  const elements = useElements();
  const usersDetails = useSelector((state) => state.usersDetails)
  const userId = usersDetails[0].userId
  
  console.log(userId)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errorsCheckout.name ) { 
      toast.error('Please write an appropiate name', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;}
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)      
    });
    if(!error){
      const { id } = paymentMethod;
      const { data } = await axios.post('/checkout',{
        id,
        amount: 111111,
        userId: userId
      });
      

      elements.getElement(CardElement).clear();   

      toast.success('Payment succeeded 🛒', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",   
        // onClose: () => {
        //   navigate("/cars");
        // }    
        })
        setTimeout(function() {
          setShowCheckoutForm(false);             
          setShowSevenComponent(true);
        }, 3000);

      
      
    }
  }


  const [errorsCheckout,setErrorsCheckout] = useState({}); //estado local para errores

  const [checkout, setCheckout] = useState({ //estado local para crear el car
    name: ""
  });





  useEffect(() => { //valido el form
    setErrorsCheckout(validateCheckout(checkout));
  }, [checkout]);




function onInputChange(e) { //cambio el estado segun el input
  e.preventDefault();
  setCheckout({
    ...checkout,
    [e.target.name]: e.target.value,
  });
}





  return(
    <>
    <h2 className="mb-8 text-4x1 font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white mt-10">Checkout 🛒</h2>
        
        <div >
          <form  className="max-w-[400px] mx-auto bg-[blue] rounded-lg p-8" onSubmit={handleSubmit}>
            
              <label htmlFor="username-success" className="text-white block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Total</label>
              <label className="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400">$50</label>
            
            <div >
                            <label htmlFor="username-success" className="text-white block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Name on Card</label>
                            <input type="text" id="username-success" className="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                            placeholder="John Doe" 
                            onChange={onInputChange}
                            name="name"
                            value={checkout.name}                   
                            />
                            {!errorsCheckout.name ? (
                              <p></p>
                            ) : (
                              
                              <p className="inline-block p-1 mt-2 text-sm text-red-600 dark:text-red-500 bg-white rounded-lg"><span className="font-medium">{errorsCheckout.name}</span> </p>
                            )}

            </div>
            
        <div >
        <div className="">
          <label htmlFor="username-success" className="text-white text-left block mb-2 text-sm font-medium text-black-700 dark:text-blue-500 ">Card Information</label>
        </div>

                          </div>
      <div className="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400">
        <CardElement/>
      </div>
              <button disabled={!stripe} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-black rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">Pay</button>
            </form>
    </div>
    </>
  )
}
export default function Payment(props){
  const  { 
    setShowCheckoutForm={setShowCheckoutForm},
    setShowSevenComponent={setShowSevenComponent}
    
   } = props;
  return(
    <Elements stripe={stripePromise}>
      <div>
        <div>
          <CheckoutForm
          setShowCheckoutForm={setShowCheckoutForm}
          setShowSevenComponent={setShowSevenComponent}         
          />
        </div>
      </div>
    </Elements>
  )
}


