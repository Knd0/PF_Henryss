import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { getCars, cleanState, orderByAlf, filterByBrand, filterByYear, orderByKM, orderByPrice } from "../../Redux/actions";
import Search from "../Search/Search";
import swal from 'sweetalert';
import style from "../Cars/Cars.module.css"
import { useNavigate } from 'react-router-dom';
import Filters from "../Filters/Filters";




export default function Cars() {
    const dispatch = useDispatch()
    const allcars = useSelector((state) => state.cars)
    const [currentPage, setCurrentPage] = useState(1)
    const [carsPerPage, setCountriesPerPage] = useState(8)
    const indexOfLastCar = currentPage * carsPerPage
    const indexOfFirstCar = indexOfLastCar - carsPerPage
    const currentCars = allcars.slice(indexOfFirstCar, indexOfLastCar)
    // const [order, setOrder] = useState("");
    // const cars = useSelector((state) => state.allcars);
    // const loading = useSelector((state) => state.loading);
    // const [input, setInput] = useState("");
    const maximo = allcars.length / carsPerPage


    const page = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(cleanState());
        dispatch(getCars())
    }, [dispatch]);

    function handleAlert() {

        swal("Oops", "Car not found!", "error")
        dispatch(getCars())
    }


    return (
        <>
            <Navbar />
            <Filters/>
            <div>
                <Search />
            </div>
            <div className={style.cardconteiner}>
                {currentCars.length ? (
                    currentCars.map((e) => {
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
                ) :
                    <div className={style.cardModal}>
                       <h1>nada</h1>



                    </div>
                }
            </div>
            <div><Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={maximo} /></div>

            <Footer />
        </>
    );
}


