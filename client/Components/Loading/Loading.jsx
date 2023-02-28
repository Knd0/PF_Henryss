import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loadingcontainer">
      <div className="contentloading">
        <h1 className="loading">Loading</h1>
        <span className="loading"></span>
      </div>
    </div>
  );
}
// importar la funcion donde exista un tiempo de carga o de esperea (CarsDetails.jsx , Home.jsx, NavBar.jsx , etc,)
//import Loading from ../Loading/Loading";
//const loading = useSelector((state) => state.loading);
//if (loading === true)

//// MODIFICACION de reducer.js
// case "LOADING_ACTION":
//     const loading = state.loading;
//     if (loading === true) {
//       return {
//         ...state,
//         loading: false,
//       };
//     } else {
//       return {
//         ...state,
//         loading: true,
//       };
//     }