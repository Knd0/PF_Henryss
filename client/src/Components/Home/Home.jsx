import React from "react"
import Cars from "../Cars/Cars"
import { useDispatch, useSelector} from "react-redux";
import Footer from "../Footer/Footer";

export default function Home() {
    const dispatch = useDispatch()
    const allCars = useSelector ((state) => state.cars)
  return (
    <>
      <Cars/>
      <Footer />
    </>
  );
}
