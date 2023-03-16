import React from 'react';
import { useState, useEffect } from 'react';
import styles from "../StarRating/StarRating.module.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { addReview, getCars } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';

function StarRating() {
  const dispatch = useDispatch()
  const [rating, setRating] = useState(0);
  const fechaActual = new Date().toLocaleDateString();
  const [input, setInput] = useState("");
  const usersDetails = useSelector((state) => state.usersDetails)
  const name = usersDetails.length > 0 ? usersDetails[0].nickname : null
  const userId = usersDetails.length > 0 ? usersDetails[0].userId : null
  console.log("ESTO ES NAME===========>",name);
  console.log("ESTO ES RATING===========>",rating);
  const reviews = useSelector((state) => state.opinion)
  const publico = reviews.filter((r)=> userId===r.userId)
  const navigate = useNavigate()
  console.log("ESTO ES PUBLICO===========>",publico);




  const handleStarClick = (value) => {
    setRating(value);
  };
   function handleChange(e){
     e.preventDefault()
     setInput(e.target.value)
   }

   function handleAlert(e){
    e.preventDefault()

    swal({
      title: "you can't repost, update your post!!!",
    });
    navigate("/updateReview")
    
  }

   console.log("ESTO ES Input===========>",input);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ESTO ES Input===========>",input);
    const payload = {
      rating:rating,
      review:input,
      name:name
    };

    console.log("ESTO ES PAYLOAD============>",payload)
     if(!input){
      swal("you need to write something!", {
        buttons: false,
        timer: 3000,
      });
     }else{
      dispatch(addReview(userId,payload))
      swal({
        title: "Thanks for your opinion!!!",
      });
     }
     navigate("/reviews")

  }

  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-150">
    
      <div className={styles.contenedor}>
        <div className={styles.containerItems}>
          <p2 className={styles.Title}>Your review is important</p2>
         
          <p> Rate us <span className={styles.starContainer}>
          {[...Array(5)].map((_, index) => (
      <span
        key={index}
        className={styles.star}
        style={{
          cursor: 'pointer',
          color: index < rating ? 'yellow' : 'grey',
        }}
        onClick={() => handleStarClick(index + 1)}
      >
        &#9733;
      </span>
    ))}
  </span>
</p>
          <form className={styles.containerForm} onSubmit={handleSubmit}>
            <label htmlFor="opinion"></label>
            <textarea className={styles.input_opinion}onChange={(e)=>handleChange(e)} type="text" placeholder="Your opinion..."/>
             {publico.length? <button onClick={(e)=>handleAlert(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Update
            </button>: <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Publish
            </button>}
          </form>
        </div>
      </div>
      
      </div>
      <Footer/>
    </>
  );
}

export default StarRating;