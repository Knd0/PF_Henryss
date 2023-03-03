import React from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../Login/Login.module.css";
import { allUsers } from "../../Redux/actions";


export const LoginButton = () => {
  const dispatch = useDispatch();
  const { loginWithPopup } = useAuth0();
  const handlelogin = () => {
    loginWithPopup();
    dispatch(allUsers);
  };

  return (
    <button
      className={styles.loginButton}
      type="button"
      onClick={() => handlelogin()}
    >
      Login
    </button>
  );
};
