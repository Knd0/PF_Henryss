import React from "react";
import { useDispatch, useSelector} from "react-redux";
import * as te from "tw-elements";
<<<<<<< HEAD
import Cars from "../Cars/Cars";
import Footer from "../Footer/Footer";
import Filters from "../Filters/Filters";
=======
import style from "../Home/Home.module.css"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import PRUEBA from "./Img/PRUEBA.jpg"
import PRUEBA2 from "./Img/PRUEBA2.jpg"
import PRUEBA3 from "./Img/PRUEBA3.jpg"


>>>>>>> 3674c6169fe9ee40c045d39cc3b54e41b11e665d

export default function Home() {
    const dispatch = useDispatch()
    const allCars = useSelector ((state) => state.cars)
<<<<<<< HEAD
   

  return (
    <>
     
=======
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
>>>>>>> 3674c6169fe9ee40c045d39cc3b54e41b11e665d
      <Footer />
      <Cars/>
  
    </>
  );
}
