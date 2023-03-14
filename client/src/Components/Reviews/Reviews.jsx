import React from 'react';
import { useState } from 'react';
import styles from "../Reviews/Reviews.module.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';


function Reviews() {
  const [rating, setRating] = useState(0);
  const reviews = useSelector((state)=>state.reviews)
  const fechaActual = new Date();
console.log("ESTO ES REVIEWS===============>", reviews)

  return (
    <>
      <Navbar/>
      <h1>Reviews</h1>
     <div className={styles.contenedor}>
        {reviews?.map(r=>{
          return(
            <div className={styles.containerItems}>
            <p>{[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  style={{
                    cursor: 'pointer',
                    color: index < r.name.rating ? 'yellow' : 'black',
                  }}
                >
                  &#9733;
                </span>
              ))}</p>
                <p>{r.name.opinion}</p>
                <div className={styles.fechaOpinionContainer}>
               <div> 
                <p>User: <span>{r.name.name}</span></p>
               </div>
                <div>
              <p>Fecha: <span>{r.name.fechaActual}</span></p>
                </div>
              </div>
            </div>
          
          )
        })}
    </div>
    <Footer/>
    </>
  );
}

export default Reviews;