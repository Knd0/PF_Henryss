import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { postCar } from "../../Redux/actions";
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
import { FormComponent07 } from "./FormComponent07";
import Payment from "../Payment/Payment";
import axios from "axios";

export default function CarsCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); //para volver a home
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [showThirdComponent, setShowThirdComponent] = useState(false);
  const [showFourthComponent, setShowFourthComponent] = useState(false);
  const [showFifthComponent, setShowFifthComponent] = useState(false);
  const [showSixComponent, setShowSixComponent] = useState(false);
  const [showSevenComponent, setShowSevenComponent] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const usersDetails = useSelector((state) => state.usersDetails)
  const userId = usersDetails[0].userId


function addDots(number) {
  
  let numStr = String(number);
  let numLen = numStr.length;

 if (numLen < 4) {
    return numStr;
  }

  let firstDotPos = numLen % 3 || 3;

  let result = numStr.slice(0, firstDotPos);

 for (let i = firstDotPos; i < numLen; i += 3) {
    result += "." + numStr.slice(i, i + 3);
  }

  return result;
}


  
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
    setShowCheckoutButton(false)
    setShowFifthComponent(true);    
   }

   const handleBackComponent07 = () => {
    setShowSevenComponent(false);
    setShowNextButton(true);
    setShowSixComponent(true);    
   }
  
  const handleConfirmFirstClick = () => {
    if (errors.brand || errors.model || errors.year || errors.color || errors.kilometers ) { //chequeo si hay errores
      toast.error('Please correct errors 🚦', {
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
      toast.error('Please correct errors 🚦', {
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
      toast.error('Please correct errors 🚦', {
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
      toast.error('Please correct errors 🚦', {
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

  const handleUpload = (e) => {
    e.preventDefault();
    uploadImage() 
  }

  const handleConfirmFifthClick = () => {
    if (errors.email || errors.phone) { //chequeo si hay errores
      toast.error('Please correct errors 🚦', {
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
    if (showNextButton === false) {
    setShowCheckoutButton(true)};  
    setShowSixComponent(true);
  };

  const handleConfirmSixClick = () => {
    if (errors.description) { //chequeo si hay errores
      toast.error('Please correct errors 🚦', {
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
    setCarDos({
      brand: car.brand,
      model: car.model,
      year: car.year,
      color: car.color,
      price: addDots(car.price),
      place: car.place,
      phone: car.phone,
      email: car.email,
      kilometers: addDots(car.kilometers),    
      fuel: car.fuel,
      img: car.img,
      engine: car.engine,
      power: car.power,
      transmission: car.transmission,
      drive: car.drive,
      capacity: car.capacity,
      description: car.description,
      
    })
    setShowSixComponent(false);    
    setShowSevenComponent(true);
  };

  const [errors,setErrors] = useState({}); //estado local para errores

  const [car, setCar] = useState({ //estado local para crear el car
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

  const [carDos, setCarDos] = useState({ //estado local para crear el car
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


const onSubmit = async (e) => {
  e.preventDefault();  
  if (Object.keys(errors).length > 0) { //chequeo si hay errores
    toast.error('Please correct errors 🚦', {
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

  setIsSubmitting(true);
  
  try {
  dispatch(postCar(userId, carDos)); 
  setCar({ 
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

  setCarDos({ 
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

  toast.success('Car published! 🚗', {
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
    })
    setTimeout(function() {
      navigate("/mypublications");      
    }, 3000);
  } catch (error) {
    console.log(error);
  } finally {
    setIsSubmitting(false);
  }
};

const [imageSelected, setImageSelected] = useState("")

  const uploadImage = async () => {
    toast('Uploading Image', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "preset_prueba")
    try {
    await axios.post("https://api.cloudinary.com/v1_1/dffjcfxvk/image/upload", formData
    ).then((response) => {
      const imageUrl = response.data.url;
      setCar({
        ...car,
        img: imageUrl,
      });
    });
  } catch (error) {
    console.log(error.response); // handle error here
  }
}



const [showCheckoutForm, setShowCheckoutForm] = useState(false);
const [showCheckoutButton, setShowCheckoutButton] = useState(false);


function handleCheckoutClick() {
  setCarDos({
    brand: car.brand,
    model: car.model,
    year: car.year,
    color: car.color,
    price: addDots(car.price),
    place: car.place,
    phone: car.phone,
    email: car.email,
    kilometers: addDots(car.kilometers),    
    fuel: car.fuel,
    img: car.img,
    engine: car.engine,
    power: car.power,
    transmission: car.transmission,
    drive: car.drive,
    capacity: car.capacity,
    description: car.description,
    
  })
  setShowCheckoutButton(false);
  setShowSixComponent(false);
  setShowCheckoutForm(true);
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
              handleBackComponent04 ={handleBackComponent04}
              imageSelected={imageSelected}
              setImageSelected={setImageSelected}
              handleUpload={handleUpload}
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
              handleConfirmSixClick= {handleConfirmSixClick} 
              showNextButton={showNextButton} 
              
            />
            )}

          {showSevenComponent && (
            <FormComponent07
              isSubmitting={isSubmitting}
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}   
              handleBackComponent07 = {handleBackComponent07}
              handleConfirmSixClick= {handleConfirmSixClick}  
              
            />
            )}
                
            </form>

            {showCheckoutButton && (
            <button type="button" onClick={handleCheckoutClick} className="mt-9 font-semibold leading-none text-white py-4 px-6 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">Proceed to Checkout</button>
            )}
            {showCheckoutForm && (
              <Payment
              setShowCheckoutForm={setShowCheckoutForm}              
              setShowSevenComponent={setShowSevenComponent}
              />
            )}


        </div>
    </div>
</div>
    <ToastContainer />
    <Footer/>
    </>    
  );
}