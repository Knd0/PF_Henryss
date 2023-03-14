import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars, cleanState, getUsersDetails, getFavorites, addFavorite, removeFavorite } from "../../Redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "../MyFavorites/MyFavorites.module.css";
// import swal from 'sweetalert';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
// import LoginButton from "../Login/Login";
// import Loading from "../Loading/Loading";




export default function MyFavorites() {
  const dispatch = useDispatch()
  const { user } = useAuth0()
  const userDetails = useSelector((state) => state.usersDetails)
  const favorites = useSelector((state) => state.favorites)
  const [currentPage, setCurrentPage] = useState(1)
  const [carsPerPage, setCountriesPerPage] = useState(8)
  const indexOfLastCar = currentPage * carsPerPage
  const indexOfFirstCar = indexOfLastCar - carsPerPage
  let currentCars = favorites
  if (currentCars.length > 8) {
    currentCars = favorites.slice(indexOfFirstCar, indexOfLastCar)
  }
  const [input, setInput] = useState("");
  const maximo = favorites.length / carsPerPage
  useEffect(() => {
    dispatch(getUsersDetails(user.email))
  }, [])
  useEffect(() => {
    if (userDetails.length) {
      dispatch(getFavorites(userDetails[0].userId))
    }
  }, [dispatch])

  if (favorites === "You dont have favorites") {
    return (
      <>
        <Navbar />
        <h1>My favorites</h1>
        <div className={style.cardconteinerFavorite}>
          <div className={style.cardModal}>
            <h3>Nothing to show 🤔</h3>
          </div>
          <Footer />
        </div>
      </>
    )
  }
  if (currentCars.length) {
    return (
      <>
        <Navbar />
        <div className={style.cardconteiner}>
          {currentCars.map((e) => {
            return <div className={style.containerCard} key={e[0].carId}>
              <Card
                carId={e[0].carId}
                brand={e[0].brand}
                img={e[0].img.secure_url || e[0].img}
                model={e[0].model}
                year={e[0].year}
                kilometers={e[0].kilometers}
                price={e[0].price}
                key={e[0].carId}
              />
            </div>
          }
          )}
        </div>
        {favorites.length > 8 ? <div><Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maximo={maximo} /></div> : null}

        <Footer />
      </>
    )
  }
  // if (favorites.length) {
  // return (
  //   <>
  //     <Navbar />
  //     {favorites.map(e =>
  //       <Card
  //         carId={e[0].carId}
  //         brand={e[0].brand}
  //         img={e[0].img.secure_url}
  //         model={e[0].model}
  //         year={e[0].year}
  //         kilometers={e[0].kilometers}
  //         price={e[0].price}
  //         key={e[0].carId}
  //       />
  //     )}
  //     <div><Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maximo={maximo} /></div>
  //     <Footer />
  //   </>
  // )
  // }
  else return (
    <>
      <Navbar />
      <h1>My favorites</h1>
      <div className={style.cardconteinerFavorite}>
        <div className={style.cardModal}>
          <h3>Nothing to show 🤔</h3>
        </div>
        <Footer />
      </div>
    </>
  )
}