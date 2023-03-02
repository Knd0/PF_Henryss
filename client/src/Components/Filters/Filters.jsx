/* import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars, filterByBrand, filterByYear, orderByAlf, orderByKM, orderByPrice, cleanState } from "../../Redux/actions";
import style from '../Filters/Filters.module.css'

export default function Filters({setCurrentPage}) {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars);
    //const [order, setOrder] = useState("");

    useEffect(() => {
        dispatch(getCars());
        dispatch(cleanState());
    }, [dispatch]);

    function handleFilteredBrand(e) {
        dispatch(filterByBrand(e.target.value));
       // setOrder(`Order ${e.target.value}`)
    }

    function handleFilteredYear(e) {
        dispatch(filterByYear(e.target.value));
      // setOrder(`Order ${e.target.value}`)
    }

    /* function handleSortAlf(e) {
        e.preventDefault();
        dispatch(orderByAlf(e.target.value));
        setOrder(`Order ${e.target.value}`)
      
    } 
 
    function handleSortKM(e) {
        e.preventDefault();
        dispatch(orderByKM(e.target.value));
        //setOrder(`Order ${e.target.value}`)
        setCurrentPage(1);
    }

    function handleSortPrice(e) {
        e.preventDefault();
        dispatch(orderByPrice(e.target.value));
        //setOrder(`Order ${e.target.value}`)
        setCurrentPage(1);
    }

    return (
    <div className={style.filtros}>
        <div>
            {/* Order alphabetically:
            <select className={style.select} onChange={(e) => handleSortAlf(e)}>
                <option value="All">All</option>
                <option value="atoz">A - Z</option>
                <option value="desc">Z - A</option>
            </select> 
        </div> 
        <div>
            Order by price:
            <select className={style.select} onChange={(e) => handleSortPrice(e)}>
                <option value="All">All</option>
                <option value="mayp">Minor to Major</option>
                <option value="menp">Major to Minor</option>
            </select>
        </div>
        <div>
            Order by KM:
            <select className={style.select} onChange={(e) => handleSortKM(e)}>
                <option value="All">All</option>
                <option value="mayp">Minor to Major</option>
                <option value="menp">Major to Minor</option>
            </select>
        </div>
        <div>
            Filter by year:
            <select className={style.select} onChange={e => handleFilteredYear(e)}>
                <option value="All">All</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
        <div>
            Filter by brand:
            <select className={style.select} onChange={e => handleFilteredBrand(e)}>
                <option></option>                      
                {cars.map((car) => (
                    
                <option value={car.id}>{car.brand}</option>
                ))}
            </select>
        </div>
    </div>
    )
} */