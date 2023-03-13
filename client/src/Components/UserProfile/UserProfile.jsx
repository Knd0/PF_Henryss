import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "../UserProfile/UserProfile.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function UserProfile() {
  const { user } = useAuth0();
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.contornoGeneral}>
          <div className={styles.contornoDeImagen}>
            <img className={styles.avatar} src={user.picture} alt="user.img" />
            <div className={styles.tarjetaPresentacion}>
              <h1>MY PROFILE</h1>
              <div className={styles.tarjeta}>
                <h2>
                  <FontAwesomeIcon icon={solid("user")} />{" "}
                  Full Name : {user.name}
                </h2>
                <h5>
                  <FontAwesomeIcon icon={solid("envelope")} />{" "}
                  Email: <span>{user.email}</span>
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
