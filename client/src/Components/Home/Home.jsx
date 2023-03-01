import React from "react";
import { useDispatch, useSelector} from "react-redux";
import * as te from "tw-elements";
import Footer from "../Footer/Footer";

export default function Home() {
    const dispatch = useDispatch()
    const allCars = useSelector ((state) => state.cars)
  return (
    <>
      
      <Footer />
    </>
  );
}
