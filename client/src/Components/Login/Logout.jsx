import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch({ type: "GET_USER_PROFILE", payload: "" });
        logout();
      }}
    >
      Logout
    </button>
  );
};