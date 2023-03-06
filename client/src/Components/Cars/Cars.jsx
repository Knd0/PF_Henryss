import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux"
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { getCars, cleanState, orderByAlf,filterByBrand,filterByYear,orderByKM,orderByPrice} from "../../Redux/actions";
import Search from "../Search/Search";
import swal from 'sweetalert';
import style from "../Cars/Cars.module.css"
import {useNavigate} from 'react-router-dom';


export default function Cars() {
    const dispatch = useDispatch()
    const allcars = useSelector ((state) => state.cars)
    const [currentPage, setCurrentPage] = useState(1)
    const [carsPerPage, setCountriesPerPage] = useState(8)
    const indexOfLastCar = currentPage * carsPerPage
    const indexOfFirstCar = indexOfLastCar - carsPerPage 
    const currentCars = allcars.slice(indexOfFirstCar,indexOfLastCar) 
    const [order, setOrder] = useState("");
    const cars = useSelector((state) => state.allcars);
    const loading = useSelector((state) => state.loading);
    const [input, setInput] = useState("");
    const maximo = allcars.length/carsPerPage
   
    
  

    const page = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(cleanState());
        dispatch(getCars())
    }, [dispatch]);


    function handleSortAlf(e) {
        e.preventDefault();
        dispatch(orderByAlf(e.target.value));
        setOrder(`Order ${e.target.value}`)
        setCurrentPage(1);
      
    }
    function handleFilteredBrand(e) {
        dispatch(filterByBrand(e.target.value));
        setOrder(`Order ${e.target.value}`)
        setCurrentPage(1);
    }

    function handleFilteredYear(e) {
        e.preventDefault()
        dispatch(filterByYear(input));
      setOrder(`Order ${e.target.value}`)
      setCurrentPage(1);
    }

    function handleSortAlf(e) {
        e.preventDefault();
        dispatch(orderByAlf(e.target.value));
        setOrder(`Order ${e.target.value}`)
      
    } 
 
    function handleSortKM(e) {
        e.preventDefault();
        dispatch(orderByKM(e.target.value));
        setOrder(`Order ${e.target.value}`)
        setCurrentPage(1);
    }

    function handleSortPrice(e) {
        e.preventDefault();
        dispatch(orderByPrice(e.target.value));
        setOrder(`Order ${e.target.value}`)
        setCurrentPage(1);
    }
    function handleChange(e){
      e.preventDefault()
     setInput(e.target.value)
    }
    
    function handleAlert(){
      
         swal ( "Oops" ,  "Car not found!" ,"error")
         dispatch(getCars())
    }
   

    return (
        <>
        <Navbar />
     
        <div className={style.filtros}>
        <div>
             Order alphabetically:
            <select className={style.select} onChange={(e) => handleSortAlf(e)}>
                <option selected disabled>--select--</option> 
                <option className={style.allSelect} value="All">All</option> 
                <option value="atoz">A - Z</option>
                <option value="desc">Z - A</option>
            </select> 
        </div> 
        <div>
            Order by price:
            <select className={style.select} onChange={(e) => handleSortPrice(e)}>
                <option selected disabled>--select--</option>  
                <option className={style.allSelect} value="All">All</option> 
                <option value="mayp">Minor to Major</option>
                <option value="menp">Major to Minor</option>
            </select>
        </div>
        <div>
            Order by KM:
            <select className={style.select} onChange={(e) => handleSortKM(e)}>
                <option selected disabled>--select--</option> 
                <option className={style.allSelect} value="All">All</option>
                <option value="mayp">Minor to Major</option>
                <option value="menp">Major to Minor</option>
            </select>
        </div>
        <div >
        <div>  <label  className={style.labelYear} htmlFor="inputyear"> Year:</label></div>
            <form className={style.yearContainerFlex} onSubmit={e => handleFilteredYear(e)} >
            <input placeholder="yyyy" id="inputyear"  className={style.inputYear} onChange={e => handleChange(e)} type="text" />
            <button className={style.btnYear} type="submit">✔</button>
            </form>
          
        </div>
        <div>
            Filter by brand:
            <select className={style.select} onChange={e => handleFilteredBrand(e)}>
                 <option selected disabled>--select--</option> 
                <option className={style.allSelect} value="All">All</option>
                <option value="Audi">Audi</option>
                <option value="Honda">Honda</option>
                <option value="DFSK">DFSK</option>
                <option value="Subaru">Subaru</option>
                <option value="BMW">BMW</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Nissan">Nissan</option>
                <option value="Kia">Kia</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Porsche">Porsche</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Toyota">Toyota</option>
                <option value="Mazda">Mazda</option>
                <option value="Ford">Ford</option>
                <option value="Jeep">Jeep</option>
                <option value="Tesla">Tesla</option>                         
            </select>
        </div>
    </div>
      <div>
      <Search/>
      </div>
<div><Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={maximo}/></div> 
        <div className={style.cardconteiner}> 
            {currentCars.length ? (
            currentCars.map((e) => {
                return (
                <div>
                   
                    <Card
                        id={e.id}
                        brand={e.brand}
                        img={e.img}
                        model={e.model}
                        year={e.year}
                        price={e.price}
                    />
                   
                </div>
                );
            })
            ) : 
            <div className={style.cardModal}>
             {handleAlert()}   
             
              
        </div>
            }
        </div>
       
        <Footer />
        </>
    );
}
