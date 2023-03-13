import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCarsDetail } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./CarsDetails.module.css"
import { FeaturesTable } from "./FeaturesTable";
import { Description } from "./Description";
import { MainInfoComponent } from "./MainInfoComponent";
import { ContactInfo } from "./ContactInfo";


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
                <div className="w-full">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                <div className="grid grid-cols-3">
                    <div className="col-span-2 row-start-1 row-span-2">
                        <img src={carDetail[0]?.img.secure_url || carDetail[0]?.img} alt="car" />
                    </div>
                    <div className="row-start-1 row-span-5 ">
                        <MainInfoComponent
                            carDetail={carDetail}
                            handleFavorite= {handleFavorite}
                            isFav={isFav}
                        />
                        <ContactInfo
                            carDetail={carDetail}
                        />
                    </div>
                    <div className="col-span-2">

                        <FeaturesTable
                            carDetail={carDetail}
                        />
                    </div>
                    <Description
                    carDetail={carDetail}
                    />

                    <div className="col-span-2 mt-8">
                        <input type="text" className="rounded-md h-10"/>
                        <button type="submit" className="border border-slate-800 bg-blue-600 font-medium h-10 ml-2 text-center px-3.5">Ask</button>
                    </div>
                </div>
                </div>
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