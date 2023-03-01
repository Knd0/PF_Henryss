import React from "react";
import { useDispatch, useSelector} from "react-redux";
import * as te from "tw-elements";
import Cars from "../Cars/Cars";
import Footer from "../Footer/Footer";

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
