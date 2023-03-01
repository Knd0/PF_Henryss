import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import style from "../Cars/Cars.module.css"
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";
import Footer from "../Footer/Footer";
import { getCars, cleanState } from "../../Redux/actions";

export default function Cars() {
    const dispatch = useDispatch()
    const allcars = useSelector ((state) => state.cars)
    const [currentPage, setCurrentPage] = useState(1)
    const [carsPerPage, setCountriesPerPage] = useState(8)
    const indexOfLastCar = currentPage * carsPerPage
    const indexOfFirstCar = indexOfLastCar - carsPerPage 
    const currentCars = allcars.slice(indexOfFirstCar,indexOfLastCar)

    const page = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(cleanState());
        dispatch(getCars())
    }, [dispatch]);

    return (
        <>
        
        <Filters />
        <div className={style.cardconteiner}>
            {currentCars.length ? (
            currentCars.map((e) => {
                return (
                <div>
                    <Link to={`cars/${e.id}`}>
                    <Card
                        id={e.id}
                        brand={e.brand}
                        img={e.img}
                        model={e.model}
                        year={e.year}
                        price={e.price}
                    />
                    </Link>
                </div>
                );
            })
            ) : (
            <div>
                <h3>Loading...</h3>
            </div>
            )}
        </div>
        <Pagination
        carsPerPage = {carsPerPage}
        allcars = {allcars.length}
        page = {page}
        />
        <Footer />
        </>
    );
}

