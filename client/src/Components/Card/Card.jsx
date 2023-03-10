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
  const dispatch = useDispatch();
  function handleDeleteFavorite(e, carId) {
    e.preventDefault();
    dispatch(removeFavorite(carId));
  }
  
  const { isAuthenticated } = useAuth0()
  const { user } = useAuth0()
  const notAuthenticated = () => {
    swal({
      title: "Only registered users have this option.",
      icon: "error",
      button: "Ok"
    })
  }
  const [checkbox, setCheckbox] = useState({id:carId, checked:false})
  const usersDetails = useSelector((state) => state.usersDetails)
  const handleChange = (e) => {
    dispatch(getUsersDetails(user.email))
    if(checkbox.checked === false) {
       setCheckbox({
        ...checkbox,
        checked:true
      })
      dispatch(addFavorite(usersDetails[0].userId,checkbox.id))
      return
    }else 
    setCheckbox({
      ...checkbox,
      checked:false
    })
    dispatch(removeFavorite(usersDetails[0].userId,checkbox.id))
  }
  
  
  return (
    <div className={styles.cardConteiner}>
      <div className={styles.elementsContainerCard}>
        {isAuthenticated ?
          <div className={styles.divEnlaceCard}>
            <label className={styles.container}>
              <input onChange={(e) => handleChange(e)} type="checkbox" value={carId}/>
              <div className={styles.checkmark}>
                <svg viewBox="0 0 256 256">
                  <rect fill="none" height="256" width="256"></rect>
                  <path
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    strokeWidth="20px"
                    stroke="#000"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </label>
          </div> :
          <div className={styles.divEnlaceCard}>
            <label className={styles.container}>
              <input onChange={(e) => notAuthenticated(e)} type="checkbox" />
              <div className={styles.checkmarkNotRegistered}>
                <svg viewBox="0 0 256 256">
                  <rect fill="none" height="256" width="256"></rect>
                  <path
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    strokeWidth="20px"
                    stroke="#000"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </label>
          </div>
        }
        <Link to={`/cars/${carId}`}>
          {" "}
          <img className="p-15 rounded-t-lg" src={img.secure_url} alt="" />
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

        <div>
          <button
            onClick={(e) => handleDeleteFavorite(e, carId)}
            id="boton"
            className={styles.deleteB}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
