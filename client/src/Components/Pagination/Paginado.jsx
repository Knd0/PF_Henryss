import React from "react";

export default function Paginado ({carsPerPage, allCars, paginado}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allCars/carsPerPage); i++) {     
        pageNumbers.push(i)                                               
    }                                                                     

    return(
        <nav>
            <ul>
                {
                    pageNumbers && 
                    pageNumbers.map(number => (
                        <button key={number} onClick={() => paginado(number)}>{number}</button>
                    ))
                }
            </ul>
        </nav>
    )
}