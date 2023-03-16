import React from "react";
import { getCars, getCarByName, getCarByBrand, getCarByEmail } from "../../Redux/actions";
import {useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import styles from "../Search/Search.module.css";
import swal from 'sweetalert';





const CarsSearchBar  = ()=>{
    const[btonBackCar, setBtonBackCar]=useState(false)
    const[input, setInput]=useState("")
    const dispatch = useDispatch()
  
    const allCars = useSelector((state) => state.allcars) 
    const allBrands = allCars.map(car => car.brand)
    const allModels = allCars.map(car => car.model)
    const allEmails = allCars.map(car => car.email)
    
    function handleChange(e){
        setInput(e.target.value)
    }
   

    function handleSubmit(e) {
      e.preventDefault();
    
      if (!input) {
        swal("Please enter a car");
      } else {
        const lowercaseInput = input.toLowerCase();
        const matchingBrands = allBrands.filter((brand) => brand.toLowerCase().includes(lowercaseInput));
        const matchingModels = allModels.filter((model) => model.toLowerCase().includes(lowercaseInput));
        const matchingEmails = allEmails.filter((email) => email.toLowerCase().includes(lowercaseInput));
    
        if (matchingBrands.length > 0) {
          setBtonBackCar(true);
          dispatch(getCarByBrand(input));
        } if (matchingModels.length > 0) {
          setBtonBackCar(true);
          dispatch(getCarByName(input));
        }
        else if (matchingEmails.length > 0){
          setBtonBackCar(true);
          dispatch(getCarByEmail(input));
        }
      }
    
      setInput("");
    }



    function handleClick(e){
       e.preventDefault()
       setBtonBackCar(false)
       dispatch(getCars())
    }
  
   
    return(
        <div>
          
         <div className={styles.flex_search_container}>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input className={styles.input_search} onChange={(e)=>handleChange(e)} type="text" value={input} placeholder="Search Brand, Model or Email"/>
            <button onClick={() => handleSubmit()} className={styles.button_search} type="submit">Search</button>   
           </form>
           </div>
           {btonBackCar?  <button
              onClick={(e)=>handleClick(e)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reload cars
            </button>:null}
        </div>
    )
}

export default CarsSearchBar