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
      navigate("/");
    }
    });
}

  return (
    <>
    <Navbar/>
    <body className="bodyFormClass">
    <form  onSubmit={onSubmit}> 
    <div className="inputsContainer">
      <div>
      <div className="form-group">
      {!errors.brand ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Brand</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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
      
      <div className="form-group">
      {!errors.model ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Model</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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

      <div className="form-group">
      {!errors.year ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Year</label>
          <input type="number" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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

      <div className="form-group">
      {!errors.price ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Price</label>
          <input type="number" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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
      
      <div className="form-group">
      {!errors.place ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Place</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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

      <div className="form-group">
      {!errors.phone ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Phone</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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

      <div className="form-group">
      {!errors.email ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Email</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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
       
      <div className="form-group">
      {!errors.kilometers ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Kilometers</label>
          <input type="number" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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
      <div>
      <div className="form-group">
      {!errors.color ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Color</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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
        
      <div className="form-group">
      {!errors.fuel ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Fuel</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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
      
      <div className="form-group">
      {!errors.img ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Image</label>
          <input type="file" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
          placeholder="image url"
          onChange={onInputChange}
          name="img"
          value={car.img}
          />

        </div>
        ) : (      
        
          <div >
                <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Image</label>
                <input type="file" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" 
                placeholder="image url"
                onChange={onInputChange}
                name="img"
                value={car.img}
                />
                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.img}</span> </p>
          </div>
        )}
      </div>
       
      <div className="form-group">
      {!errors.engine ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Engine</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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
      
      <div className="form-group">
      {!errors.power ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Power</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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
        
      <div className="form-group">
      {!errors.transmission ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Transmission</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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

      <div className="form-group">
      {!errors.drive ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Drive</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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

      <div className="form-group">
      {!errors.capacity ? (
        <div >
          <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Capacity</label>
          <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
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
      {" "}

      </div>
      </div>
      
        <div className="textAreaClass">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Describe here..."
            onChange={onInputChange}
            name="description"
            value={car.description}
            ></textarea>          
        </div>
        {errors.description && <p className="error"> {errors.description}</p>}          
      
        {" "}
             
      <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"> Publish </button>
      
    </form>
      <ToastContainer />
    </body>
    <Footer/>
    </>
  );
}