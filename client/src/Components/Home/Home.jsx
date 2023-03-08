import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Home/Home.module.css"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import PRUEBA from "./Img/PRUEBA.jpg"
import PRUEBA2 from "./Img/PRUEBA2.jpg"
import PRUEBA3 from "./Img/PRUEBA3.jpg"
import { getCars, createUs } from "../../Redux/actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";




export default function Home() {
  const { user } = useAuth0();
  const dispatch = useDispatch()
  const allCars = useSelector((state) => state.cars)
  useEffect(() => {
    if (user) {
      const payload = {
        nickname: user.nickname,
        email: user.email,
        name: user.name,
        picture: user.picture,
      };
      dispatch(createUs(payload));
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch])

  const images = [
    PRUEBA,
    PRUEBA2,
    PRUEBA3
  ];

  return (
    <div className="flex flex-col">

      <Navbar />
      <div className={style.containerSlider}>
        <Slider images={images}></Slider>
      </div>
      <div className="w-full max-sm:flex max-sm:content-center max-sm:flex-col max-sm:content-center sm:grid sm:grid-cols-4 lg:flex lg:justify-arround max-w-screen-lg md:mx-auto mt-10">
        {/* {

          allCars.slice(0, 3).map(e =>
            <Card
              carId={e.carId || e.id}
              brand={e.brand}
              img={e.img}
              model={e.model}
              year={e.year}
              kilometers={e.kilometers}
              price={e.price}
            />
          )
        } */}
        <div className={style.homeFlexCardContainer}>

        <div className={style.hideButton}>
          <Card
            carId={allCars[0].carId || allCars[0].id}
            brand={allCars[0].brand}
            img={allCars[0].img}
            model={allCars[0].model}
            year={allCars[0].year}
            kilometers={allCars[0].kilometers}
            price={allCars[0].price}
          />
        </div>

        <div  className={style.hideButton} >
          <Card
            carId={allCars[1].carId || allCars[1].id}
            brand={allCars[1].brand}
            img={allCars[1].img}
            model={allCars[1].model}
            year={allCars[1].year}
            kilometers={allCars[1].kilometers}
            price={allCars[1].price}
          />
          </div>
        </div>

        <div  className={style.hideButton}>
          
          <Card
            carId={allCars[2].carId || allCars[2].id}
            brand={allCars[2].brand}
            img={allCars[2].img}
            model={allCars[2].model}
            year={allCars[2].year}
            kilometers={allCars[2].kilometers}
            price={allCars[2].price}
          />
        
        </div>

        </div>

      <div className="flex justify-center">
        <Link to="/cars"><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See more...</button></Link>
      </div>
      <Footer />
    </div>
  );
}
