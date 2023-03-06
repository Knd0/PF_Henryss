import React from "react";
import styles from "../Card/Card.module.css"

export default function Card({ img, brand, model, year, price }) {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <img class="p-15 rounded-t-lg" src={img} alt="" />
      <h5 class="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
        Brand: <span className={styles.subtitulo} >{brand}</span>
      </h5>


      <h3 class={styles.titulo}>
        Model: <span className={styles.subtitulo} >{model}</span>
      </h3>



      <p class={styles.titulo}>
        Year: <span className={styles.subtitulo} >{year}</span>
      </p>



      <span class={styles.titulo}>
        $ <span className={styles.subtitulo} >{price}</span>
      </span>
    </div>
  );
}
