import React from "react";
import { getCars, getCarByName } from "../../Redux/actions";
import {useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../Search/Search.module.css";





const Search  = ()=>{
    const[input, setInput]=useState("")
    const dispatch = useDispatch()
      
    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
      if(!input){
        alert("Please enter a car")
      }else{
        dispatch(getCarByName(input))
      }
        setInput("")
    }
    function handleClick(e){
       e.preventDefault()
       dispatch(getCars())
    }
   
    return(
        <div>
          
         <div className={styles.flex_search_container}>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input className={styles.input_search} onChange={(e)=>handleChange(e)} type="text" value={input} placeholder="Search car..."/>
            <button className={styles.button_search} type="submit">Search</button>   
           </form>
           </div>
           <button
              onClick={(e)=>handleClick(e)}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              back to cars
            </button>
        </div>
    )
}

export default Search