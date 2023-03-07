import React from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { allUsers } from "../../Redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const LoginButton = () => {
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const handlelogin = () => {
    loginWithRedirect();
    dispatch(allUsers);
  };

  return (
    <button type="button" onClick={() => handlelogin()}>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    </button>
  );
};