import React from 'react';
import { useState, useEffect } from 'react';
import styles from "../StarRating/StarRating.module.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { addReview, getCars } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

function StarRating() {
  const dispatch = useDispatch()
  const [rating, setRating] = useState(0);
  const fechaActual = new Date().toLocaleDateString();
  const [input, setInput] = useState("");
  const usersDetails = useSelector((state) => state.usersDetails)
  const name = usersDetails.length > 0 ? usersDetails[0].nickname : null
  const userId = usersDetails.length > 0 ? usersDetails[0].userId : null
  console.log("ESTO ES NAME===========>",name);
  console.log("ESTO ES RATING===========>",rating);



  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const opinion = event.target.opinion.value;
    const payload = {
      rating:rating,
      fechaActual:fechaActual,
      opinion:opinion,
      name:name
    };

    console.log("ESTO ES PAYLOAD============>",payload)
     if(!opinion){
      swal("This modal will disappear soon!", {
        buttons: false,
        timer: 3000,
      });
     }else{
      dispatch(addReview(userId,payload))
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
                color: index < rating ? 'yellow' : 'black',
              }}
              onClick={() => handleStarClick(index + 1)}
            >
              &#9733;
            </span>
          ))}</p>
          <form className={styles.containerForm} onSubmit={handleSubmit}>
            <label htmlFor="opinion"></label>
            <textarea id='opinion' name="textarea" rows="10" cols="50">Write something here</textarea>
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

export default StarRating;