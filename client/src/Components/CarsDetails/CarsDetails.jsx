import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCarsDetail } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./CarsDetails.module.css"


export default function CarsDetail() {
    const dispatch = useDispatch()
    const [isFav, setIsFav] = useState(false)
    const { id } = useParams()
    const carDetail = useSelector((state) => state.detail)
    useEffect(() => {
        dispatch(getCarsDetail(id))
    }, [dispatch, id])

    const handleFavorite = (e) => {
        if (isFav) {
            setIsFav(false)
        } else {
            setIsFav(true)
        }
    }

    if (carDetail?.length !== 0) {
        return (
            <>
                <Navbar />
                <div class="grid grid-cols-3">
                    <div class="col-span-2 row-start-1 row-span-2">
                        <img src={carDetail[0]?.img.secure_url} alt="car" />
                    </div>
                    <div class="row-start-1 row-span-5 pt-12">
                        <h4 class="text-xl text-left pl-10">Name car: {carDetail[0]?.brand} {carDetail[0]?.model}</h4>
                        {
                            isFav ? <button onClick={handleFavorite}>❤️</button> : <button onClick={handleFavorite}>🤍</button>
                        }
                        <h4 class="text-xl text-left pl-10">Price: {carDetail[0]?.price}</h4>
                        <h4 class="text-xl text-left pl-10">Place: {carDetail[0]?.place}</h4>
                        <h2 class="text-2xl text-left pl-10 mt-10">Seller information:</h2>
                        <h4 class="text-xl text-left pl-10">Email: {carDetail[0]?.email}</h4>
                        <h4 class="text-xl text-left pl-10">Phone: {carDetail[0]?.phone}</h4>
                    </div>
                    <div class="col-span-2">
                        {/* <h3 class="text-6xl text-left pl-10">Features:</h3>
                        <h4 class="text-left pl-10 pt-3 font-bold">Brand: {carDetail[0]?.brand}</h4>
                        <h4 class="text-left pl-10 pt-3 font-bold">Model: {carDetail[0]?.model}</h4>
                        <h4 class="text-left pl-10 pt-3 font-bold">Year: {carDetail[0]?.year}</h4>
                        <h4 class="text-left pl-10 pt-3 font-bold">Transmission: {carDetail[0]?.transmission}</h4> */}
                        <table class="table-auto w-full border-b-2 border-neutral-400 mt-8">
                            <thead>
                                <tr>
                                    <th class="bg-neutral-400">Feature</th>
                                    <th class="bg-neutral-400">Spec</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="w-full">
                                    <td class="bg-neutral-200" className={styles.border_table}>Brand</td>
                                    <td class="bg-neutral-200" className={styles.border_table}>{carDetail[0]?.brand}</td>
                                </tr>
                                <tr className="w-full">
                                    <td class="bg-neutral-300">Model</td>
                                    <td class="bg-neutral-300">{carDetail[0]?.model}</td>
                                </tr>
                                <tr className="w-full">
                                    <td class="bg-neutral-200">Year</td>
                                    <td class="bg-neutral-200">{carDetail[0]?.year}</td>
                                </tr>
                                <tr className="w-full">
                                    <td class="bg-neutral-300">KM</td>
                                    <td class="bg-neutral-300">{carDetail[0]?.kilometers}</td>
                                </tr>
                                <tr className="w-full">
                                    <td class="bg-neutral-200">Capcity</td>
                                    <td class="bg-neutral-200">{carDetail[0]?.capacity}</td>
                                </tr>
                                <tr className="w-full">
                                    <td class="bg-neutral-300">Color</td>
                                    <td class="bg-neutral-300">{carDetail[0]?.color}</td>
                                </tr>
                                <tr className="w-full">
                                    <td class="bg-neutral-200">Fuel</td>
                                    <td class="bg-neutral-200">{carDetail[0]?.fuel}</td>
                                </tr>
                                <tr className="w-full">
                                    <td class="bg-neutral-300">Transmission</td>
                                    <td class="bg-neutral-300">{carDetail[0]?.transmission}</td>
                                </tr>
                                <tr className="w-full">
                                    <td class="bg-neutral-200">Power</td>
                                    <td class="bg-neutral-200">{carDetail[0]?.power}</td>
                                </tr>
                                <tr className="w-full">
                                    <td class="bg-neutral-300">Engine</td>
                                    <td class="bg-neutral-300">{carDetail[0]?.engine}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-span-2 flex-col">
                        <h2 className="font-medium text-lg mt-20 mb-2 text-left ml-10">Description:</h2>
                        <p className="text-left ml-10">{carDetail[0].description}</p>
                    </div>
                    <div class="col-span-2 mt-8">
                        <input type="text" className="rounded-md h-10"/>
                        <button type="submit" class="border border-slate-800 bg-blue-600 font-medium h-10 ml-2 text-center px-3.5">Ask</button>
                    </div>
                </div>
                <Footer />
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