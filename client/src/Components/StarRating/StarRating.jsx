import React from 'react';
import { useState } from 'react';
import styles from "../StarRating/StarRating.module.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

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
      <form className={styles.containerForm}>
            <label htmlFor="opinion"></label>
            <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
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



