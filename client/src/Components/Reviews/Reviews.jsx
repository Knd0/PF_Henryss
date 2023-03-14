import React from 'react';
import { useState } from 'react';
import styles from "../StarRating/StarRating.module.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import moment from 'moment';


function Reviews() {
  const [rating, setRating] = useState(0);
  const nombreUser = useSelector((state)=>state.usersDetails[0].nickname)
  const fechaActual = new Date();
  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <>
      <Navbar/>
     <div className={styles.contenedor}>
    <div className={styles.containerItems}>
    <p>{[...Array(5)].map((_, index) => (
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
      <form className={styles.containerForm}>
            <label htmlFor="opinion"></label>
            <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
      </form>
      <div>
       <div> 
        <p>User: {nombreUser}</p>
       </div>
        <div>
      <p>Fecha: {fechaActual.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Reviews;