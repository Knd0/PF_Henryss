import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars, cleanState } from "../../Redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "../MyFavorites/MyFavorites.module.css";
import swal from 'sweetalert';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/Login";




export default function MyFavorites() {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites)
  const [currentPage, setCurrentPage] = useState(1)
  const [carsPerPage, setCountriesPerPage] = useState(8)
  const indexOfLastCar = currentPage * carsPerPage
  const indexOfFirstCar = indexOfLastCar - carsPerPage
  // const currentCars = allcars.slice(indexOfFirstCar,indexOfLastCar)
  const [order, setOrder] = useState("");
  const cars = useSelector((state) => state.allcars);
  const loading = useSelector((state) => state.loading);
  const [input, setInput] = useState("");
  const maximo = favorites.length / carsPerPage
  const { isAuthenticated } = useAuth0()

  console.log(favorites)


  useEffect(() => {
    dispatch(cleanState());
    dispatch(getCars())
  }, [dispatch]);


  return (
    <>
      <Navbar />
      <h1>My Favorites</h1>
      <div className={style.cardconteinerFavorite}>

        {
          isAuthenticated ? favorites.length ?
            favorites.map((e) => {
              return (
                <div>
                  <Card
                    carId={e.carId || e.id}
                    brand={e.brand}
                    img={e.img}
                    model={e.model}
                    year={e.year}
                    kilometers={e.kilometers}
                    price={e.price}
                  />
                </div>
              );
            }) : (
              <div className={style.cardModal}>
                <h3>Nothing to show 🤔</h3>
              </div>
            ) :
            <>
              <h2>This site is exclusively for registered users.</h2>
            </>
        }
        {/* {favorites.length ? (
          favorites.map((e) => {
            return (
              <div>
                <Card
                  carId={e.carId || e.id}
                  brand={e.brand}
                  img={e.img}
                  model={e.model}
                  year={e.year}
                  kilometers={e.kilometers}
                  price={e.price}
                />
              </div>
            );
          })
        ) : (
          <div className={style.cardModal}>
              <h3>Nothing to show 🤔</h3>
          </div>
        )} */}
      </div>
      <div></div>
      {/*    <div><Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={maximo}/></div>  */}
      <Footer />
    </>

  )
}