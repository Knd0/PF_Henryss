import React from "react";
import styles from "../Card/Card.module.css"

export default function Card({ img, brand, model, year, price }) {
  return (
    <div class= {styles.card}>
      
       <div> <img class={styles.img} src={img} alt="" /></div>

       <div className={styles.flexItems}>
      <h5 class={styles.titulo}>
          {" "}
          Brand: <span className={styles.subtitulo} >{brand}</span>
        </h5>
  
       
       <h3 class={styles.titulo}>
          {" "}
          Model: <span className={styles.subtitulo} >{model}</span>
        </h3>
       

       
       <p class={styles.titulo}>
          {" "}
          Year: <span className={styles.subtitulo} >{year}</span>
        </p>
      
        
        
        <span class={styles.titulo}>
            $ <span className={styles.subtitulo} >{price}</span>
          </span>
        </div>
        

         <div>
         <a
            href="#"
          >
            Add to favorites
          </a>
         </div>
    </div>
    
  );
}
