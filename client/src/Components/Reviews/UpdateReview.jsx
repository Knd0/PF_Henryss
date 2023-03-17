import React from 'react';
import { useState, useEffect } from 'react';
import styles from "../StarRating/StarRating.module.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {  updateReview } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

function UpdateReview() {
  const usersDetails = useSelector((state) =>state.usersDetails)
  const userId = usersDetails.length > 0 ? usersDetails[0].userId : null
  const dispatch = useDispatch()
  const [rating, setRating] = useState(0);
  const fechaActual = new Date().toLocaleDateString();
  const name = usersDetails.length > 0 ? usersDetails[0].nickname : null
  const reviews = useSelector((state)=>state.opinion)
 /*  const elemento = reviews.filter((r)=>userId===(r.userId.toString()))*/
  const [input, setInput] = useState(/* elemento[0].review */ "");
 

 

  const handleStarClick = (value) => {
    setRating(value);
  };
   function handleChange(e){
     e.preventDefault()
     setInput(e.target.value)
   }

   

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const payload = {
      review:input,
      name:name,
      rating:rating
    };

    
     if(!input){
      swal("you need to write something!", {
        buttons: false,
        timer: 3000,
      });
     }else{
      dispatch(updateReview(userId,payload))
      swal({
        title: "Thanks for your opinion!!!",
      });
     }
   

  }

  return (
    <>
      <Navbar/>
    
      <div className={styles.contenedor}>
        <div className={styles.containerItems}>
          <p>Rate us   {[...Array(5)].map((_, index) => (
            <span
              key={index}
              style={{
                cursor: 'pointer',
                color: index < rating ? 'yellow' : 'white',
              }}
              onClick={() => handleStarClick(index + 1)}
            >
              &#9733;
            </span>
          ))}</p>
          <form className={styles.containerForm} onSubmit={handleSubmit}>
            <label htmlFor="opinion"></label>
             <input onChange={(e)=>handleChange(e)} type="text" />
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Publish
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default UpdateReview;