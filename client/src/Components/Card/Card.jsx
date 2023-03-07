import React from "react";
import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite } from "../../Redux/actions";
import { useDispatch } from "react-redux";

export default function Card({
    img,
    brand,
    model,
    year,
    price,
    carId,
    kilometers,
    }) {
    const dispatch = useDispatch();
    function handleChange(e) {
        e.preventDefault();
        dispatch(addFavorite(carId));
    }

    return (
        <div className={styles.cardConteiner}>
        <div className={styles.elementsContainerCard}>
        <div className={styles.divEnlaceCard}>
            <label className={styles.container}>
                <input onChange={(e) => handleChange(e)} type="checkbox" />
                <div className={styles.checkmark}>
                <svg viewBox="0 0 256 256">
                    <rect fill="none" height="256" width="256"></rect>
                    <path
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    stroke-width="20px"
                    stroke="#000"
                    fill="white"
                    ></path>
                </svg>
                </div>
            </label>
            </div>
            <Link to={`/cars/${carId}`}>
            {" "}
            <img
                className={styles.img}
                class="p-15 rounded-t-lg"
                src={img}
                alt=""
            />
            </Link>
            <hr />
            <h5 class="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
            {" "}
            Brand: <span className={styles.subtitulo}>{brand}</span>
            </h5>

            <h3 class="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
            {" "}
            Model: <span className={styles.subtitulo}>{model}</span>
            </h3>

            <p class="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
            {" "}
            Year: <span className={styles.subtitulo}>{year}</span>
            </p>

            <p class="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
            {" "}
            KM: <span className={styles.subtitulo}>{kilometers}</span>
            </p>

            <span class={styles.titulo}>
            $ <span className={styles.subtitulo}>{price}</span>
            </span>

          <div>
          <button>Delete</button>
          </div>

            
        </div>
        </div>
    );
}
