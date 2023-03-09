import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCars, cleanState }  from "../../Redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from"../MyFavorites/MyFavorites.module.css"




export default function MyFavorites() {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.usersDetails.favorites) // antes era: const favorites = useSelector ((state) => state.favorites)
    const [currentPage, setCurrentPage] = useState(1)
    const [carsPerPage, setCountriesPerPage] = useState(8)
    const indexOfLastCar = currentPage * carsPerPage
    const indexOfFirstCar = indexOfLastCar - carsPerPage
   // const currentCars = allcars.slice(indexOfFirstCar,indexOfLastCar)
    const [order, setOrder] = useState("");
    const cars = useSelector((state) => state.allcars);
    const loading = useSelector((state) => state.loading);
    const [input, setInput] = useState("");
    const maximo = favorites.length/carsPerPage

    console.log(favorites)

    
    useEffect(() => {
        dispatch(cleanState());
        dispatch(getCars())
    }, [dispatch]);


   
  
    return(
        <>
        <Navbar />
         <h1>My Favorites</h1>
        <div className={style.cardconteinerFavorite}>
        {favorites ? (
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
        )}
      </div>
      <div></div>
   {/*    <div><Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={maximo}/></div>  */}
        <Footer />
        </>

    )
}