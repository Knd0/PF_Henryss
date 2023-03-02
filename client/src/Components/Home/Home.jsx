import React from "react";
import { useDispatch, useSelector} from "react-redux";
import * as te from "tw-elements";
import style from "../Home/Home.module.css"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import PRUEBA from "./Img/PRUEBA.jpg"
import PRUEBA2 from "./Img/PRUEBA2.jpg"
import PRUEBA3 from "./Img/PRUEBA3.jpg"



export default function Home() {
    const dispatch = useDispatch()
    const allCars = useSelector ((state) => state.cars)
    const images = [
      PRUEBA,
      PRUEBA2,
      PRUEBA3
    ];

  return (
    <>
      <Navbar/>
      <div className={style.containerSlider}>
        <Slider images={images}></Slider>
      </div>
      <hr className={style.hr} />

      <h5 class='text-[#dc2626]'>ACA HAY QUE PONER 3 CARDS</h5>
      <Footer />
    </>
  );
}
