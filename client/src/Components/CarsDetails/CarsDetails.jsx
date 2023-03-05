import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCarsDetail } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";



export default function CarsDetail() {
    const dispatch = useDispatch()
    const [isFav, setIsFav] = useState(false)
    const { carId } = useParams()
    const carDetail = useSelector((state) => state.detail)
    useEffect(() => {
        dispatch(getCarsDetail(carId))
    }, [dispatch, carId])

    const handleFavorite = (e) => {
        if(isFav) {
            setIsFav(false)
        } else {
            setIsFav(true)
        }
    }

    if (Object.entries(carDetail).length !== 0) {
        return (
            <>
                <Navbar />
                <div class="grid grid-cols-3 grid-rows-3">
                    <div class="col-span-2 row-start-1 row-span-2">
                        <img src={carDetail[0].img} alt="car" />
                    </div>
                    <div class="row-start-1 row-span-5 pt-12">
                        <h4 class="text-2xl text-left pl-10">Name car: {carDetail[0].brand} {carDetail[0].model}</h4>
                        {
                            isFav?<button onClick={handleFavorite}>❤️</button>:<button onClick={handleFavorite}>🤍</button>
                        }
                        <h4 class="text-2xl text-left pl-10">Price: {carDetail[0].price}</h4>
                        {/* <h4>Location: </h4>
                    <h4>Seller information: </h4>
                    <p></p> */}
                    </div>
                    <div class="col-span-2">
                        <h3 class="text-6xl text-left pl-10">Features:</h3>
                        <h4 class="text-left pl-10 pt-3 font-bold">Brand: {carDetail[0].brand}</h4>
                        <h4 class="text-left pl-10 pt-3 font-bold">Model: {carDetail[0].model}</h4>
                        <h4 class="text-left pl-10 pt-3 font-bold">Year: {carDetail[0].year}</h4>
                        <h4 class="text-left pl-10 pt-3 font-bold">Transmission: {carDetail[0].features.transmission}</h4>
                        {/* <h4>Mileage: </h4>
                    <h4>Version: </h4>
                    <h4>Color: </h4>
                    <h4>Fuel: </h4>
                <h4>Doors: </h4> */}
                        {/* <h4>Type of bodywork: </h4>
                    <h4>Engine: </h4> */}
                        {/* <h4>Capacity: {carDetail[0].features.capacity}</h4>
                    <h4>Drive: {carDetail[0].features.drive}</h4>
                    <h4>Power: {carDetail[0].features.power}</h4>
                    <h4>Engine: {carDetail[0].features.engine}</h4> */}
                    </div>
                    {/* <div>
                    <h3>Description:</h3>
                    <p></p>
                </div> */}
                    <div class="col-span-2 flex content-center justify-start pl-10">
                        <input type="text" />
                        <button type="submit" class="border border-slate-800 pr-5">Ask</button>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
    else
        return (
            <>
                <Loading/>
            </>
        )
}