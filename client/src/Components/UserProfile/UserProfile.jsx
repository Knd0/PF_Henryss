import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersDetails, createUs } from "../../Redux/actions.js";
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
  const userInfo = useSelector((state) => state.usersDetails);

  useEffect(() => {
    dispatch(getUsersDetails(user.email));
    user && dispatch(createUs(user));
  }, [dispatch, user]);

  return (
    <>
      <Navbar />
      <div>
        <div className={styles.userContainerFlex}>
          <div>
            <img
              className={styles.img}
              width={400}
              height={400}
              src={user.picture}
              alt="user.img"
            />
          </div>
          <div>
            <h5>
            <FontAwesomeIcon icon={solid('user')} />
              Name: <span>{user.name}</span>
            </h5>

            <h5>
            <FontAwesomeIcon icon={solid('envelope')} />
              Email: <span>{user.email}</span>
            </h5>
          </div>
          <div>
            <Link to="/mypublications">
              <button>My Publications</button>
            </Link>
            <Link to="/myfavorites">
              <button>My Favorites</button>
            </Link>
          </div>
        </div>
        {/*    <div  className={styles.flexButtonsContainer}>
                  <button>my publications</button>
                  <button>my favoites</button>
           </div> */}
      </div>
      <Footer />
    </>
  );
}
