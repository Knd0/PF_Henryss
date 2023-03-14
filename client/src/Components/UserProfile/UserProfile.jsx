import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "../UserProfile/UserProfile.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function UserProfile() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.usersDetails);

  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.contornoGeneral}>
          <div className={styles.contornoDeImagen}>
            <img className={styles.avatar} src={details[0].picture} alt="user.img" />
            <div className={styles.tarjetaPresentacion}>
              <h1>My profile</h1>
              <div className={styles.tarjeta}>
                <h2>
                  <FontAwesomeIcon icon={solid("user")} />{" "}
                  Full Name : {details[0].name}
                </h2>
                <h5>
                  <FontAwesomeIcon icon={solid("envelope")} />{" "}
                  Email: <span>{details[0].email}</span>
                </h5>
              </div>
                <div className={styles.Buttonsss}>
                  <Link to="/mypublications">
                    <button className={styles.btn1}>My Publications</button>
                  </Link>
                  <Link to="/myfavorites">
                    <button className={styles.btn1}>My Favorites</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}
















// <h5>
//   <FontAwesomeIcon icon={solid("user")} />
//   Name: <span>{user.name}</span>
// </h5>;
