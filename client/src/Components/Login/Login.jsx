import React from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
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
      type="button"
      onClick={() => handlelogin()}
    >
      Login
    </button>
  );
};