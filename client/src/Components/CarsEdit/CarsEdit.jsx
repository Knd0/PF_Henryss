import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import validateForm from "../Helpers/validateForm"
import { updateCar } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./CarsEdit.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EditComponent01 } from "./EditComponent01";
import { EditComponent02 } from "./EditComponent02";
import { EditComponent03 } from "./EditComponent03";
import { EditComponent04 } from "./EditComponent04";
import { EditComponent05 } from "./EditComponent05";
import { EditComponent06 } from "./EditComponent06";

export default function CarsEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); //para volver a home
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [showThirdComponent, setShowThirdComponent] = useState(false);
  const [showFourthComponent, setShowFourthComponent] = useState(false);
  const [showFifthComponent, setShowFifthComponent] = useState(false);
  const [showSixComponent, setShowSixComponent] = useState(false);
  let id = useParams()
  let value = id["id"]; // Sintaxis de corchetes
  const cars= useSelector((state)=>state.cars)
  const publications= useSelector((state)=>state.usersDetails[0].publications)
 
const valor =value.toString()===publications.toString()? value.toString():null
console.log("ESTO ES VALOR=============>",valor)

  let bla = cars.filter(c => {
      if(c.carId.toString()===valor.toString()){
        return c
      }
  });
  //console.log("ESTO ES BLA============>",bla)
  const usersDetails = useSelector((state)=>state.usersDetails)
  const userId = usersDetails[0].userId
  console.log("ESTO ES USERID============>",userId)



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
    id:bla[0].carId,
    brand: bla[0].brand,
    model:bla[0].model,
    year:  bla[0].year,
    color:  bla[0].color,
    price:  bla[0].price,
    place:  bla[0].place,
    phone:  bla[0].phone,
    email:  bla[0].email,
    kilometers:bla[0].kilometers,    
    fuel:  bla[0].fuel,
    img: bla[0].img,
    engine:  bla[0].engine,
    power:  bla[0].power,
    transmission: bla[0].transmission,
    drive:  bla[0].drive,
    capacity: bla[0].capacity,
    description:  bla[0].description,
  })


  useEffect(() => { //valido el form
    setErrors(validateForm(car));
  }, [car]);




function onInputChange(e) { //cambio el estado segun el input
  e.preventDefault();
  setCar({
    ...car,
    [e.target.name]: e.target.value,
  });

};
console.log("car:", car);
const carId = car.id
console.log("ESTO ES CARID============>",carId)



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
  console.log("userId: ", userId);
console.log("carId: ", carId);
console.log("car: ", car);
dispatch(updateCar(parseInt(car.id), car,parseInt( usersDetails[0].userId))) //hago el post, despacho la action
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
    onClose: () => {
      navigate("/cars");
    }
    });
}


  return (
    
    <>
    <Navbar/>
    
<div className="w-full">
    <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
          
            <form  onSubmit={onSubmit}> 

          {showFirstComponent && (  
            <EditComponent01
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmFirstClick={handleConfirmFirstClick}
              bla={bla}
            />
          )}
            
          {showSecondComponent && (
            <EditComponent02
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmSecondClick={handleConfirmSecondClick}
              handleBackComponent02 = {handleBackComponent02} 
              bla={bla}            
            />
            )}

          {showThirdComponent && (
            <EditComponent03
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmThirdClick={handleConfirmThirdClick}
              handleBackComponent03 = {handleBackComponent03} 
              bla={bla}   
            />
            )}

          {showFourthComponent && (
            <EditComponent04
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmFourthClick={handleConfirmFourthClick}
              handleBackComponent04 = {handleBackComponent04} 
              bla={bla}
            />
            )}
          
          {showFifthComponent && (
            <EditComponent05
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}       
              handleConfirmFifthClick={handleConfirmFifthClick}
              handleBackComponent05 = {handleBackComponent05}     
              bla={bla}   
            />
            )}

          {showSixComponent && (
            <EditComponent06
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}   
              handleBackComponent06 = {handleBackComponent06}
              bla={bla}        
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
