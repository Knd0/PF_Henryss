import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Home/Home.module.css"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import PRUEBA from "./Img/PRUEBA.jpg"
import PRUEBA2 from "./Img/PRUEBA2.jpg"
import PRUEBA3 from "./Img/PRUEBA3.jpg"
import { getCars } from "../../Redux/actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";



export default function Home() {
  const dispatch = useDispatch()
  const allCars = useSelector((state) => state.cars)
  useEffect(() => {
    dispatch(getCars())
  }, [dispatch])
  const images = [
    PRUEBA,
    PRUEBA2,
    PRUEBA3
  ];

  return (
    <div class="flex flex-col">

      <Navbar />
      <div className={style.containerSlider}>
        <Slider images={images}></Slider>
      </div>
        {
          //   allCars.slice(0, 3).map(e => <Link to={`/cars/${e.id}`}>
          //   <Card
          //     class="max-md:col-span3"
          //     id={e.id}
          //     brand={e.brand}
          //     img={e.img}
          //     model={e.model}
          //     year={e.year}
          //     price={e.price}
          //     key={e.id}
          //   />
          // </Link>)
          <div class="w-full flex justify-center max-md:grid max-md:grid-cols-4 max-sm:flex max-sm:flex-col max-sm:flex-wrap sm:mt-20 md:justify-around">

            <div class="max-md:col-span-2 max-sm:block max-sm:mx-auto max-sm:w-9/12 m-0 hover:shadow-lg hover:shadow-zinc-400 rounded-xl border-zinc-400 border-solid border-2 border-sky-500">
              <Card
                id={allCars[0].id}
                brand={allCars[0].brand}
                img={allCars[0].img}
                model={allCars[0].model}
                year={allCars[0].year}
                price={allCars[0].price}
                key={allCars[0].id}
              ></Card>
            </div>
            <div class="max-md:col-start-3 max-md:col-end-5 max-sm:block max-sm:mx-auto max-sm:w-9/12 hover:shadow-lg hover:shadow-zinc-400 rounded-xl border-zinc-400 border-solid border-2 border-sky-500">

              <Card 
                id={allCars[1].id}
                brand={allCars[1].brand}
                img={allCars[1].img}
                model={allCars[1].model}
                year={allCars[1].year}
                price={allCars[1].price}
                key={allCars[1].id}
              ></Card>
            </div>
            <div class="max-md:col-start-2 max-md:col-end-4 max-sm:hidden hover:shadow-lg hover:shadow-zinc-400 rounded-xl border-zinc-400 border-solid border-2 border-sky-500">
              <Card 
                id={allCars[2].id}
                brand={allCars[2].brand}
                img={allCars[2].img}
                model={allCars[2].model}
                year={allCars[2].year}
                price={allCars[2].price}
                key={allCars[2].id}
              ></Card>
            </div>
          </div>
        }
        <div class="flex justify-center">
          <Link to="/cars"><button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See more...</button></Link>
        </div>
      <Footer />
    </div>
  );
}
