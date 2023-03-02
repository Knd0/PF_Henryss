import React from "react";

export default function Pagination ({carsPerPage, allcars, page}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allcars/carsPerPage); i++) {     
        pageNumbers.push(i)                                               
    }                                                                     

    return(
        <nav>
            <ul>
                {
                    pageNumbers && 
                    pageNumbers.map(number => (
                        <button key={number} onClick={() => page(number)}>{number}</button>
                    ))
                }
            </ul>
        </nav>
    )
}