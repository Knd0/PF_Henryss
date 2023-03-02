import React from "react";
import { getCars, getCarByName } from "../../Redux/actions";
import {useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../Search/Search.module.css";





const Search  = ()=>{
    const[input, setInput]=useState("")
    const dispatch = useDispatch()

    console.log(input)
    
    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
      if(!input){
        alert("Please enter a brand")
      }else{
        dispatch(getCarByName(input))
      }
        setInput("")
    }
   
    return(
        <div>
         <div className={styles.flex_search_container}>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input className={styles.input_search} onChange={(e)=>handleChange(e)} type="text" value={input} placeholder="Search brand..."/>
            <button className={styles.button_search} type="submit">Search</button>   
           </form>
           </div>
        </div>
    )
}

export default Search