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
import Card from"../Card/Card"



export default function Home() {
    const dispatch = useDispatch()
    const allCars = useSelector ((state) => state.cars)
   const cards3= allCars.slice(0,3)
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
      <div className={style.card} class="w-full max-w-sm bg-white border border-gray-200 rounded-lg mx-5 my-2 shadow dark:bg-gray-800 dark:border-gray-700">
      {cards3?.map(c=>{
          return(
            <div >
            <Card
              img={c.img}
              brand={c.brand}
              model={c.model}
              price={c.price}
            />
            </div>
          )
      })}
      </div>
       
         
    </>
  );
}
