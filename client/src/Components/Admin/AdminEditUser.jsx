import React from 'react';
import { useState, useEffect } from 'react';
import styles from "../StarRating/StarRating.module.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {  updateUser } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

function AdminEditUser() {
  let id = useParams()
  let value = id["id"]; 
  const usersDetails = useSelector((state) => state.usersDetails)
  const userId = usersDetails.length > 0 ? usersDetails[0].userId : null
  const dispatch = useDispatch()
  const users= useSelector((state)=>state.users)
  const navigate = useNavigate()
 /*  const elemento = reviews.filter((r)=>userId===(r.userId.toString()))*/

 const valor =value.toString()

  let user = users?.filter(u => {
      if(u?.userId===valor?.toString()){
        return u
      }
  });
  console.log("ESTO ES USER==========>",user)
 
  const [input,setInput] = useState({
    name:user[0].name,
    nickname:user[0].nickname,
    email:user[0].email
  });

  console.log("ESTO ES Input===========>",input);

 
/*  console.log("ESTO ES ELEMENTO============>", elemento)  */

   function handleChange(e){
     e.preventDefault()
     setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
   }

  const handleSubmit = (event) => {
    event.preventDefault();
    swal({
        title: "Are you sure?",
        text: "This user will be deleted.",
        icon: "warning",
        buttons: ["Cancel", "Accept"],
      }).then((value) => {
        if (value) {
            dispatch(updateUser(userId,input))
          swal({
            title: "Succes",
            text: "This user has been deleted.",
            icon: 'success',
            button: "Ok"
          })
          .then(info=>{
            if(info){
             navigate("/admin/user")
            }
          })
        } else {
          swal({
            title: "This action has been canceled.",
            icon: "error",
            button: "Ok"
          })
        }
      });
   
}

  return (
    <>
      <Navbar/>
    
      <div className={styles.contenedor}>
          <form onSubmit={(e)=>handleSubmit(e)}>

          <div>
       <h5>Name: {user[0].nickname}</h5>
        <label htmlFor="nickmane">EDITAR:</label>
        <input onChange={(e)=>handleChange(e)} value={input.nickname} type="text" name="nickname"/>
       </div>

          <div>
       <h5>Nickname: {user[0].name}</h5>
        <label htmlFor="nickmane">EDITAR:</label>
        <input onChange={(e)=>handleChange(e)} value={input.name} type="text" name="name"/>
       </div>

       <div>
       <h5>Email: {user[0].email}</h5>
        <label htmlFor="nickmane">EDITAR:</label>
        <input onChange={(e)=>handleChange(e)} value={input.email} type="text" name="email"/>
       </div>
       <button type='submit'>Send</button>
          </form>
     
      </div>
      <Footer/>
    </>
  );
}

export default AdminEditUser;