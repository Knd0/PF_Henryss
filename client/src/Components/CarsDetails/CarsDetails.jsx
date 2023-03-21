import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCarsDetail, cleanState, addFavorite, removeFavorite, getUsersDetails } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./CarsDetails.module.css"
import { FeaturesTable } from "./FeaturesTable";
import { Description } from "./Description";
import { MainInfoComponent } from "./MainInfoComponent";
import { ContactInfo } from "./ContactInfo";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";


export default function CarsDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const carDetail = useSelector((state) => state.detail)
    const [favoritesState, setFavoritesState] = useState([])
    const [isFav, setIsFav] = useState(false)
    const { user,isAuthenticated } = useAuth0()
    const userDetails = useSelector((state) => state.usersDetails)
    const userId = userDetails.length ? userDetails[0].userId : null
    const favorites = userDetails.length ? userDetails[0].favorites : null

    useEffect(() => {
        dispatch(cleanState());
        dispatch(getCarsDetail(id))
    }, [ id ])

    useEffect(()=>{
        if(user){
            dispatch(getUsersDetails(user.email))
        }
    }, [  ])

    useEffect(()=>{
        if(userDetails.length){
        setIsFav(userDetails[0].favorites?.includes(carDetail[0]?.carId.toString()))
        }
    }, [ carDetail ])

    useEffect(()=>{
        setFavoritesState(favorites)
    }, [ favorites ])

    const handleFavorite = (e) => {
        if(!isAuthenticated){
            return swal({
                title: "Only registered users have this option.",
                icon: "error",
                button: "Ok"
            })
        }
        setIsFav(!isFav)
        if (!favoritesState.includes(e.target.value)) {

            dispatch(addFavorite(userId, e.target.value))

            setFavoritesState([...favoritesState, e.target.value])
            return 
        }
        if (favoritesState.includes(e.target.value)) {

            dispatch(removeFavorite(userId, e.target.value))

            setFavoritesState(favoritesState.filter(car => car !== e.target.value))
            return 
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