import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { postCar } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./CarsCreate.css"
import validateForm from "../Helpers/validateForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CarsCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); //para volver a home
 
  const [errors,setErrors] = useState({}); //estado local para errores

  const [car, setCar] = useState({ //estado local para crear el car
    brand: "",
    model: "",
    year: "",
    price: "",
    place: "",
    phone: "",
    email: "",
    kilometers: 0,
    color: "",
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


function onSubmit(e) {
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
  dispatch(postCar(car)); //hago el post, despacho la action
  setCar({ //reseteo el estado
    brand: "",
    model: "",
    year: "",
    price: "",
    place: "",
    phone: "",
    email: "",
    kilometers: 0,
    color: "",
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
    onClose: () => {
      navigate("/cars");
    }
    });
}

  return (
    <>
    <Navbar/>

<div class="w-full">
    <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center">My Publication</p>
            <form  onSubmit={onSubmit}> 
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                          {!errors.brand ? (
                          <div >
                            <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Brand</label>
                            <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                            placeholder="Mustang"
                            onChange={onInputChange}
                            name="brand"
                            value={car.brand}
                            />

                          </div>
                          ) : (      
                          
                            <div >
                                  <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Brand</label>
                                  <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                                  placeholder="Ford"
                                  onChange={onInputChange}
                                  name="brand"
                                  value={car.brand}
                                  />
                                  <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.brand}</span> </p>
                            </div>
                          )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                        {!errors.model ? (
                          <div >
                            <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Model</label>
                            <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                            placeholder="Ford"
                            onChange={onInputChange}
                            name="model"
                            value={car.model}
                            />

                          </div>
                          ) : (      
                          
                            <div >
                                  <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Model</label>
                                  <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                                  placeholder="Mustang"
                                  onChange={onInputChange}
                                  name="model"
                                  value={car.model}
                                  />
                                  <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.model}</span> </p>
                            </div>
                          )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.year ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Year</label>
                        <input type="number" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="2023"
                        onChange={onInputChange}
                        name="year"
                        value={car.year}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Year</label>
                              <input type="number" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="2023"
                              onChange={onInputChange}
                              name="year"
                              value={car.year}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.year}</span> </p>
                        </div>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.price ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Price</label>
                        <input type="number" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="$"
                        onChange={onInputChange}
                        name="price"
                        value={car.price}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Price</label>
                              <input type="number" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="$"
                              onChange={onInputChange}
                              name="price"
                              value={car.price}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.price}</span> </p>
                        </div>
                      )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.place ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Place</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="Buenos Aires"
                        onChange={onInputChange}
                        name="place"
                        value={car.place}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Place</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="Buenos Aires"
                              onChange={onInputChange}
                              name="place"
                              value={car.place}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.place}</span> </p>
                        </div>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.phone ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Phone</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="+5492261459851"
                        onChange={onInputChange}
                        name="phone"
                        value={car.phone}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Phone</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="+5492261459851"
                              onChange={onInputChange}
                              name="phone"
                              value={car.phone}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.phone}</span> </p>
                        </div>
                      )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.email ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Email</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="mimail@gmail.com"
                        onChange={onInputChange}
                        name="email"
                        value={car.email}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Email</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="mimail@gmail.com"
                              onChange={onInputChange}
                              name="email"
                              value={car.email}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.email}</span> </p>
                        </div>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.kilometers ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Kilometers</label>
                        <input type="number" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="0"
                        onChange={onInputChange}
                        name="kilometers"
                        value={car.kilometers}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Kilometers</label>
                              <input type="number" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="0"
                              onChange={onInputChange}
                              name="kilometers"
                              value={car.kilometers}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.kilometers}</span> </p>
                        </div>
                      )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.color ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Color</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="Red"
                        onChange={onInputChange}
                        name="color"
                        value={car.color}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Color</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="Red"
                              onChange={onInputChange}
                              name="color"
                              value={car.color}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.color}</span> </p>
                        </div>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.fuel ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Fuel</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="Gas"
                        onChange={onInputChange}
                        name="fuel"
                        value={car.fuel}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Fuel</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="Gas"
                              onChange={onInputChange}
                              name="fuel"
                              value={car.fuel}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.fuel}</span> </p>
                        </div>
                      )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.img ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Image</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="image url"
                        onChange={onInputChange}
                        name="img"
                        value={car.img}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Image</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="Image url"
                              onChange={onInputChange}
                              name="img"
                              value={car.img}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.img}</span> </p>
                        </div>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.engine ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Engine</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="6.2L V8"
                        onChange={onInputChange}
                        name="engine"
                        value={car.engine}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Engine</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="6.2L V8"
                              onChange={onInputChange}
                              name="engine"
                              value={car.engine}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.engine}</span> </p>
                        </div>
                      )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.power ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Power</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="490 hp"
                        onChange={onInputChange}
                        name="power"
                        value={car.power}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Power</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="490 hp"
                              onChange={onInputChange}
                              name="power"
                              value={car.power}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.power}</span> </p>
                        </div>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.transmission ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Transmission</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="Automatic"
                        onChange={onInputChange}
                        name="transmission"
                        value={car.transmission}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Transmission</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="Automatic"
                              onChange={onInputChange}
                              name="transmission"
                              value={car.transmission}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.transmission}</span> </p>
                        </div>
                      )}
                    </div>
                </div>

                <div class="md:flex items-center ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        
                    {!errors.drive ? (
                      <div >
                        <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Drive</label>
                        <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                        placeholder="Front-wheel"
                        onChange={onInputChange}
                        name="drive"
                        value={car.drive}
                        />

                      </div>
                      ) : (      
                      
                        <div >
                              <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Drive</label>
                              <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                              placeholder="Front-wheel"
                              onChange={onInputChange}
                              name="drive"
                              value={car.drive}
                              />
                              <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.drive}</span> </p>
                        </div>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        
                    {!errors.capacity ? (
                    <div >
                      <label for="username-success" class="block mb-2 text-sm font-medium text-black-700 dark:text-blue-500">Capacity</label>
                      <input type="text" id="username-success" class="bg-blue-50 border border-blue-500 text-black-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400" 
                      placeholder="4 passengers"
                      onChange={onInputChange}
                      name="capacity"
                      value={car.capacity}
                      />

                    </div>
                    ) : (      
                    
                      <div >
                            <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Capacity</label>
                            <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                            placeholder="4 passengers"
                            onChange={onInputChange}
                            name="capacity"
                            value={car.capacity}
                            />
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.capacity}</span> </p>
                      </div>
                    )}
                    </div>
                </div>          

                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none">Description</label>
                        <textarea type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none placeholder-blue-700 focus:border-blue-700 mt-4 bg-gray-100 border rounded border-blue-400"
                        placeholder="My description..."
                        onChange={onInputChange}
                        name="description"
                        value={car.description}
                        ></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button type="submit" class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Publish
                    </button>
                </div>
            </form>
            
        </div>
    </div>
</div>
    <ToastContainer />
    <Footer/>
    </>
  );
}