import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const {loginWithRedirect } = useAuth0();


  return <button className="bg-indigo-700 text-white rounded-xl hover:bg-indigo-500 ease-in duration-200" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;