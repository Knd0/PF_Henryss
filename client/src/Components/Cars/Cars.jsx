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
   // const allcars = useSelector ((state) => state.cars)
   const [currentPage, setCurrentPage] = useState(1)
    const [carsPerPage, setCountriesPerPage] = useState(8)
    /*const indexOfLastCar = currentPage * carsPerPage
    const indexOfFirstCar = indexOfLastCar - carsPerPage 
    const currentCars = allcars.slice(indexOfFirstCar,indexOfLastCar) */
   var allcars =  [{
        "id": 1,
        "brand": "Honda",
        "model": "Civic",
        "year": 2014,
        "price": 22000,
        "img": "https://s.aolcdn.com/os/ab/_cms/2022/11/14104754/2023-Honda-Civic-Type-R-Sonoma-action-front-three-quarter.jpg",
        "features": {
            "engine": "2.0L 4 cilindros",
            "power": "158 hp",
            "transmission": "CVT",
            "drive": "front-wheel drive",
            "capacity": "5 passengers"
        }
    },
    {
        "id": 2,
        "brand": "Ford",
        "model": "Mustang",
        "year": 2006,
        "price": 35000,
        "img": "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=75",
        "features": {
            "engine": "2.3L 4 cilindros turbo",
            "power": "310 hp",
            "transmissión": "automatic",
            "drive": "rear",
            "capacity": "4 passengers"
        }
    },
    {
        "id": 3,
        "brand": "Chevrolet",
        "model": "Corvette",
        "year": 2010,
        "price": 62000,
        "img": "https://cdn.carbuzz.com/gallery-images/840x560/1023000/700/1023747.jpg",
        "features": {
            "engine": "6.2L V8",
            "power": "490 hp",
            "transmission": "Automatic",
            "drive": "rear",
            "capacity": "2 passengers"
        }
    },
    {
        "id": 4,
        "brand": "Tesla",
        "model": "Model S",
        "year": 2012,
        "price": 80000,
        "img": "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/2682/",
        "features": {
            "engine": "Eléctrico",
            "power": "670 hp",
            "transmission": "Automatic",
            "drive": "all-wheel",
            "capacity": "5 passengers"
        }
    },
    {
        "id": 5,
        "brand": "Toyota",
        "modelo": "RAV4",
        "año": 2004,
        "precio": 26000,
        "img": "https://www.mitsuiautomotriz.com/uploads/images/07e87-rav4-colores7.png",
        "features": {
            "engine": "2.5L 4 cilindros",
            "power": "203 hp",
            "transmission": "Automatic",
            "drive": "all-wheel",
            "capacity": "5 passengers"
        }
    },
    {
        "id": 6,
        "brand": "Toyota",
        "model": "Corolla",
        "year": 2014,
        "price": 25000,
        "img": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220923074240_Corolla%20Flex%20Fuel.jpg&w=700&q=90&c=1",
        "features": {
            "engine": "1.8L 4 cilindros",
            "power": "139 hp",
            "transmission": "CVT",
            "drive": "front-wheel",
            "capacity": "5 passengers"
        }
    },
    {
        "id": 7,
        "brand": "Jeep",
        "model": "Wrangler",
        "year": 2022,
        "price": 30000,
        "img": "https://cars.usnews.com/static/images/Auto/izmo/i159614897/2022_jeep_wrangler_angularfront.jpg",
        "features": {
            "engine": "3.6L V6",
            "power": "285 hp",
            "transmission": "automatic",
            "drive": "all-wheel",
            "capacity": "4 passengers"
        }
    },
    {
        "id": 8,
        "brand": "Ford",
        "model": "F-150",
        "year": 2022,
        "price": 35000,
        "img": "https://upload.wikimedia.org/wikipedia/commons/f/f0/2018_Ford_F-150_XLT_Crew_Cab%2C_front_11.10.19.jpg",
        "features": {
            "engine": "3.3L V6",
            "power": "290 hp",
            "transmission": "automatic",
            "drive": "rear",
            "capacity": "6 passengers"
        }
    },]

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
            {allcars.length ? (
            allcars.map((e) => {
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
