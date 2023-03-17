import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from './MainInfoComponent.module.css'

export function MainInfoComponent(props) {
    const {
        carDetail,
        handleFavorite,
        isFav
    } = props;
    return (
        <>
            <div className="border rounded border-blue-600 ml-10 bg-gray-300">
                <h4 className="text-3xl font-extrabold text-center">
                    {carDetail[0]?.brand}
                    {" "}
                    {carDetail[0]?.model}

                </h4>
                <div>
                    <h4 className="text-5xl  text-center mt-5">${carDetail[0]?.price} </h4>

                </div>
                <div className="relative">
                    <h4 className="text-2xl font-bold text-left pl-10 mt-5 h-14 relative">Add to Favorites: </h4>
                    <div className="absolute top-9 ml-28">
                        <label className={style.MainInfoComponent_container}>
                            <input onChange={handleFavorite} checked={isFav} type="checkbox" value={carDetail[0]?.carId} />
                            <div className={style.MainInfoComponent_checkmark}>
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
                </div>
                <h4 className="text-2xl font-bold text-left pl-10 mt-5">Selling in {carDetail[0]?.place} </h4>

            </div>





        </>
    )
}