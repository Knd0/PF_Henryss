import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersDetails, createUs } from "../../Redux/actions.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "../UserProfile/UserProfile.module.css";
import {
  ManageAccounts,
  AlternateEmail,
  AccountBox
} from "@mui/icons-material";

export default function UserProfile() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.usersDetails);
  const users = useSelector((state) => state.users);
  const email = user?.email;

  useEffect(() => {
    dispatch(getUsersDetails(user.email));
    user && dispatch(createUs(user));
  }, []);

  let props = {};
  userInfo
    ? (props = {
        id: userInfo._id,
        name: userInfo.username,
        email: userInfo.email,
        image: userInfo.image,
        active: String(userInfo.active),
      })
    : console.log(userInfo);

  return (
    <>
      <Navbar />
      <div>
        <div className={styles.userContainerFlex}>
          <div>
            <img width={400} height={400} src={props.image} alt="user.img" />
          </div>
          <div>
            <AccountBox />
            <h5>
              Name: <span>{props.name}</span>
            </h5>
            <AlternateEmail />
            <h5>
              Email: <span>{props.email}</span>
            </h5>
            <ManageAccounts />
            <h5>
              Active: <span>{props.active}</span>
            </h5>
          </div>
          <div>
            <Link to="/mypublications">
              <button>My Publications</button>
            </Link>
            <Link to="/myfavorites">
              <button>=My Favorites</button>
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
