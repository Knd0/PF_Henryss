
import React, { useEffect, useState } from "react";
import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite, addToPublications, getUsersDetails } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";

export default function Card({
  img,
  brand,
  model,
  year,
  price,
  carId,
  kilometers,
}) {

 /*  const[isFav,setIsFav]=useState(false)
  const favotites =useSelector((state)=>state.favotites)
  console.log("ESTO ES FAVORITES==================>",favotites) */
  const dispatch = useDispatch();
  function handleDeleteFavorite(e, carId) {
    e.preventDefault();
    dispatch(removeFavorite(carId));
  }
  
  
  return (
    <div className={styles.cardConteiner}>
      <div className={styles.elementsContainerCard}>
        <Link to={`/cars/${carId}`}>
          {" "}
          <img className="p-15 rounded-t-lg" src={img} alt="img" />
        </Link>
        <hr />
        <h5 className="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
          {" "}
          Brand: <span className={styles.subtitulo}>{brand}</span>
        </h5>

        <h3 className="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
          {" "}
          Model: <span className={styles.subtitulo}>{model}</span>
        </h3>

        <p className="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
          {" "}
          Year: <span className={styles.subtitulo}>{year}</span>
        </p>

        <p className="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
          {" "}
          KM: <span className={styles.subtitulo}>{kilometers}</span>
        </p>

        <span className={styles.titulo}>
          $ <span className={styles.subtitulo}>{price}</span>
        </span>
      </div>
    </div>
  );
}
