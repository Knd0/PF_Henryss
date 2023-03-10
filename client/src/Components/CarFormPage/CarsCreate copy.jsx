import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { postCar, addToPublications } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./CarsCreate.css"
import validateForm from "../Helpers/validateForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormComponent01 } from "./FormComponent01";
import { FormComponent02 } from "./FormComponent02";
import { FormComponent03 } from "./FormComponent03";
import { FormComponent04 } from "./FormComponent04";
import { FormComponent05 } from "./FormComponent05";
import { FormComponent06 } from "./FormComponent06";

export default function CarsCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); //para volver a home
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [showThirdComponent, setShowThirdComponent] = useState(false);
  const [showFourthComponent, setShowFourthComponent] = useState(false);
  const [showFifthComponent, setShowFifthComponent] = useState(false);
  const [showSixComponent, setShowSixComponent] = useState(false);
  const usersDetails = useSelector((state) => state.usersDetails)
  const userId = usersDetails[0].userId
  
  const handleBackComponent02 = () => {
    setShowSecondComponent(false);
    setShowFirstComponent(true);    
   }

  const handleBackComponent03 = () => {
    setShowThirdComponent(false);
    setShowSecondComponent(true);    
   }

  const handleBackComponent04 = () => {
    setShowFourthComponent(false);
    setShowThirdComponent(true);    
   }

  const handleBackComponent05 = () => {
    setShowFifthComponent(false);
    setShowFourthComponent(true);    
   }

  const handleBackComponent06 = () => {
    setShowSixComponent(false);
    setShowFifthComponent(true);    
   }
  
  const handleConfirmFirstClick = () => {
    if (errors.brand || errors.model || errors.year || errors.color || errors.kilometers ) { //chequeo si hay errores
      toast.error('Please correct errors ????', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowFirstComponent(false);
    setShowSecondComponent(true);
  };

  const handleConfirmSecondClick = () => {
    if (errors.fuel || errors.engine || errors.power || errors.transmission || errors.drive || errors.capacity) { //chequeo si hay errores
      toast.error('Please correct errors ????', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowSecondComponent(false);
    setShowThirdComponent(true);
  };
 
  const handleConfirmThirdClick = () => {
    if (errors.price || errors.place) { //chequeo si hay errores
      toast.error('Please correct errors ????', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowThirdComponent(false);
    setShowFourthComponent(true);
  };

  const handleConfirmFourthClick = () => {
    if (errors.img) { //chequeo si hay errores
      toast.error('Please correct errors ????', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowFourthComponent(false);
    setShowFifthComponent(true);
  };

  const handleConfirmFifthClick = () => {
    if (errors.email || errors.phone) { //chequeo si hay errores
      toast.error('Please correct errors ????', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowFifthComponent(false);
    setShowSixComponent(true);
  };

  const [errors,setErrors] = useState({}); //estado local para errores

  const [car, setCar] = useState({ //estado local para crear el car
    carId:"",
    brand: "",
    model: "",
    year: "",
    color: "",
    price: "",
    place: "",
    phone: "",
    email: "",
    kilometers: "",    
    fuel: "",
    img: "",
    engine: "",
    power: "",
    transmission: "",
    drive: "",
    capacity: "",
    description: "",
  });


  useEffect(() => { //valido el form
    setErrors(validateForm(car));
  }, [car]);




function onInputChange(e) { //cambio el estado segun el input
  e.preventDefault();
  setCar({
    ...car,
    [e.target.name]: e.target.value,
  });
}
const bla = car.carId
console.log("ESTO ES CAR=============>",car)


function onSubmit(e) {
  e.preventDefault();  
  if (Object.keys(errors).length > 0) { //chequeo si hay errores
    toast.error('Please correct errors ????', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });;
    return;
  }
  dispatch(postCar(userId, car)); //hago el post, despacho la action
  dispatch(addToPublications(userId,bla))
  setCar({ //reseteo el estado
    brand: "",
    model: "",
    year: "",
    color: "",
    price: "",
    place: "",
    phone: "",
    email: "",
    kilometers: "",    
    fuel: "",
    img: "",
    engine: "",
    power: "",
    transmission: "",
    drive: "",
    capacity: "",
    description: "",
  });
  toast.success('Car published! ????', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",   
    // onClose: () => {
    //   navigate("/cars");
    // }
    });
}
console.log(car)
console.log(userId)


  return (
    
    <>
    <Navbar/>
    
<div className="w-full">
    <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
          
            <form  onSubmit={onSubmit}> 

          {showFirstComponent && (  
            <FormComponent01
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmFirstClick={handleConfirmFirstClick}
            />
          )}
            
          {showSecondComponent && (
            <FormComponent02
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmSecondClick={handleConfirmSecondClick}
              handleBackComponent02 = {handleBackComponent02}                
            />
            )}

          {showThirdComponent && (
            <FormComponent03
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmThirdClick={handleConfirmThirdClick}
              handleBackComponent03 = {handleBackComponent03}    
            />
            )}

          {showFourthComponent && (
            <FormComponent04
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmFourthClick={handleConfirmFourthClick}
              handleBackComponent04 = {handleBackComponent04} 
            />
            )}
          
          {showFifthComponent && (
            <FormComponent05
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}       
              handleConfirmFifthClick={handleConfirmFifthClick}
              handleBackComponent05 = {handleBackComponent05}        
            />
            )}

          {showSixComponent && (
            <FormComponent06
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}   
              handleBackComponent06 = {handleBackComponent06}            
            />
            )}
                
            </form>
            
        </div>
    </div>
</div>
    <ToastContainer />
    <Footer/>
    </>    
  );
}