import React from "react";
import styles from "../Card/Card.module.css"
import { Link} from "react-router-dom";
import{addFavorite} from "../../Redux/actions"
import {useDispatch} from "react-redux";

export default function Card({ img, brand, model, year, price, id }) {
  const dispatch = useDispatch()
function handleClick(e){
  e.preventDefault()
  dispatch(addFavorite(id))
}
 
  return (
    <div className={styles.cardConteiner}>
      <div className={styles.elementsContainerCard}>
      <Link to={`/cars/${id}`}> <img className={styles.img} class="p-15 rounded-t-lg" src={img} alt="" /></Link>
        <h5 class="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
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

          <div className={styles.divEnlaceCard}>
       <a onClick={(e)=>handleClick(e)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            href="#"
          >
            Add to favorites
          </a>
       </div>
        </div>
        
    </div>
    
  );
}
