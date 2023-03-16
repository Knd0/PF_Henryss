import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars, cleanState, getUsersDetails, getFavorites, addFavorite, removeFavorite } from "../../Redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "../MyFavorites/MyFavorites.module.css";
import { useAuth0 } from "@auth0/auth0-react";




export default function MyFavorites() {
  const dispatch = useDispatch()
  const { user } = useAuth0()
  const userDetails = useSelector((state) => state.usersDetails)
  const favorites = useSelector((state) => state.favorites)
  const [currentPage, setCurrentPage] = useState(1)
  const [carsPerPage, setCountriesPerPage] = useState(8)
  const indexOfLastCar = currentPage * carsPerPage
  const indexOfFirstCar = indexOfLastCar - carsPerPage
  const userId = userDetails.length ? userDetails[0].userId : null
  const [currentCars,setCurrentCars] = useState([])
  const [input, setInput] = useState("");
  const maximo = favorites.length / carsPerPage
  useEffect(() => {
    dispatch(getUsersDetails(user.email))
  }, [])
  useEffect(() => {
    dispatch(getFavorites(userId))
  }, [])
  useEffect(()=>{
    setCurrentCars(favorites)
  }, [ favorites ])

  const deleteFavorites = (e) => {
    dispatch(removeFavorite(userId,e.target.value))
    setCurrentCars(currentCars.filter(car=>car[0].carId.toString() !== e.target.value.toString()))
  }

  

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
              <div className={style.divEnlaceCard}>
                <label className={style.container}>
                  <input onChange={deleteFavorites} checked={true} type="checkbox" value={e[0].carId} />
                  <div className={style.checkmark}>
                    <svg viewBox="0 0 256 256">
                      <rect fill="none" height="256" width="256"></rect>
                      <path
                        d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                        strokeWidth="20px"
                        stroke="#000"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </label>
              </div>
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