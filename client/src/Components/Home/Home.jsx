import React from "react";
import { useDispatch, useSelector} from "react-redux";
import * as te from "tw-elements";
import Cars from "../Cars/Cars";
import Footer from "../Footer/Footer";
import Filters from "../Filters/Filters";

export default function Home() {
    const dispatch = useDispatch()
    const allCars = useSelector ((state) => state.cars)
   

  return (
    <>
     
      <Footer />
      <Cars/>
  
    </>
  );
}
