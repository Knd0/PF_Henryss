import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCarsDetail } from "../../Redux/actions";


export default function CarsDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const carDetail = useSelector((state) => state.detail)
    useEffect(() => {
        dispatch(getCarsDetail(id))
    },[dispatch, id])

    if (Object.entries(carDetail).length !== 0) {
        return (
            <>
                <img src={carDetail[0].img} alt="car" />
                <div>
                    <h4>Name car: {carDetail[0].brand} {carDetail[0].model}</h4>
                    <h4>Price: {carDetail[0].price}</h4>
                    {/* <h4>Location: </h4>
                    <h4>Seller information: </h4>
                    <p></p> */}
                </div>
                <div>
                    <h3>Features:</h3>
                    <h4>Brand: {carDetail[0].brand}</h4>
                    <h4>Model: {carDetail[0].model}</h4>
                    <h4>Year: {carDetail[0].year}</h4>
                    {/* <h4>Mileage: </h4>
                    <h4>Version: </h4>
                    <h4>Color: </h4>
                    <h4>Fuel: </h4>
                    <h4>Doors: </h4> */}
                    <h4>Transmission: {carDetail[0].features.transmission}</h4>
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
                <div>
                    <input type="text" />
                    <button type="submit">Ask</button>
                </div>
            </>
        )
    }
    else
        return (
            <>
                <h1>loading...</h1>
            </>
        )
}