import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars, cleanState, getUsersDetails, getFavorites } from "../../Redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "../MyFavorites/MyFavorites.module.css";
// import swal from 'sweetalert';
import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "../Login/Login";
// import Loading from "../Loading/Loading";




export default function MyFavorites() {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites)
  const { user } = useAuth0()
  const userDetails = useSelector((state) => state.usersDetails)
  const userId = userDetails[0].userId
  const [currentPage, setCurrentPage] = useState(1)
  const [carsPerPage, setCountriesPerPage] = useState(8)
  // const allcars = useSelector((state) => state.allcars)
  // const indexOfLastCar = currentPage * carsPerPage
  // const indexOfFirstCar = indexOfLastCar - carsPerPage
  // const currentCars = allcars.slice(indexOfFirstCar, indexOfLastCar)
  // const [order, setOrder] = useState("");
  // const cars = useSelector((state) => state.allcars);
  // const loading = useSelector((state) => state.loading);
  // const [input, setInput] = useState("");
  const maximo = favorites.length / carsPerPage

  useEffect(() => {
    dispatch(getCars())
    dispatch(getUsersDetails(user.email))
    dispatch(getFavorites(userId))
  }, [dispatch, user.email, userId])
  if (favorites === "You dont have favorites") {
    return <>
      <Navbar />
      <h1>My favorites</h1>
      <div className={style.cardconteinerFavorite}>
        <div className={style.cardModal}>
          <h3>Nothing to show 🤔</h3>
        </div>
        {/* <div>
          <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={maximo} />
        </div> */}
        <Footer />
      </div>
    </>
  }
  if (favorites.length > 0) {
    return <>
      <Navbar />
      <h1>My favorites</h1>
      {
        favorites.map(e =>
          <>
            <Card
              carId={e[0].carId}
              brand={e[0].brand}
              img={e[0].img.secure_url}
              model={e[0].model}
              year={e[0].year}
              kilometers={e[0].kilometers}
              price={e[0].price}
              key={e[0].carId}
            />
          </>
        )
      }
      <div>
        <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={maximo} />
      </div>
      <Footer />
    </>
  } return <>
    <Navbar />
    <h1>My favorites</h1>
    <div className={style.cardconteinerFavorite}>
      <div className={style.cardModal}>
        <h3>Nothing to show 🤔</h3>
      </div>
      <div>
        <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={maximo} />
      </div>
      <Footer />
    </div>
  </>


  // if(!userDetails[0].favorites.length) {
  //   return (<>
  //        <Navbar />
  //        <h1>My favorites</h1>
  //        <div className={style.cardconteinerFavorite}>
  //          <div className={style.cardModal}>
  //            <h3>Nothing to show 🤔</h3>
  //          </div>
  //        </div>
  //      </>)
  // }
  // return (
  //     <>
  //       <Navbar />
  //       <h1>My Favorites</h1>
  //       <div className={style.cardconteinerFavorite}>
  //         {
  //           favorites.length ?
  //             favorites.map(e =>
  //               <Card
  //                 carId={e[0].carId}
  //                 brand={e[0].brand}
  //                 img={e[0].img.secure_url}
  //                 model={e[0].model}
  //                 year={e[0].year}
  //                 kilometers={e[0].kilometers}
  //                 price={e[0].price}
  //               />)
  //             :
  //             (
  //               <div className={style.cardModal}>
  //                 <h3>Nothing to show 🤔</h3>
  //               </div>
  //             )
  //         }
  //       </div>
  //       <div></div>
  //       <div>
  //         <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={maximo} /></div>
  //       <Footer />
  //     </>
  // )
  // if (!favorites.length) {
  //   return (<>
  //     <Navbar />
  //     <h1>My favorites</h1>
  //     <div className={style.cardconteinerFavorite}>
  //       <div className={style.cardModal}>
  //         <h3>Nothing to show 🤔</h3>
  //       </div>
  //     </div>
  //   </>)

  // }
  // return (
  //   <>
  //     <Navbar />
  //     <h1>My Favorites</h1>
  //     <div className={style.cardconteinerFavorite}>
  //       {
  //         favorites.length ?
  //           favorites.map(e =>
  //             <Card
  //               carId={e[0].carId}
  //               brand={e[0].brand}
  //               img={e[0].img.secure_url}
  //               model={e[0].model}
  //               year={e[0].year}
  //               kilometers={e[0].kilometers}
  //               price={e[0].price}
  //             />)
  //           :
  //           (
  //             <div className={style.cardModal}>
  //               <h3>Nothing to show 🤔</h3>
  //             </div>
  //           )
  //       }
  //     </div>
  //     <div></div>
  //     <div>
  //       <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={maximo} /></div>
  //     <Footer />
  //   </>

  // )
}