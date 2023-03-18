import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCars, cleanState, getpublications, deleteCar } from "../../Redux/actions";
import { Link } from "react-router-dom";
import style from "../MyPublications/MyPublications.module.css";
import Pagination from "../Pagination/Pagination";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

const MyPublications = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state)=>state.allcars)
  const usersDetails = useSelector((state) => state.usersDetails)
  const userId = usersDetails.length > 0 ? usersDetails[0].userId : null
  // const publications = useSelector((state) => state.usersDetails[0].publications)
  const publications = usersDetails.length > 0 ? usersDetails[0].publications : null

  

  const publicados = cars.filter((c) => publications?.includes(c?.carId.toString()));

    
  // console.log("ESTOE ES PUBLICATIONS===================>",publications)
  // console.log("ESTOE ES PUBLICADOS===================>",publicados)
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCountriesPerPage] = useState(3);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  // const currentCars = publications.slice(indexOfFirstCar, indexOfLastCar);
  // const maximo = publications.length / carsPerPage;
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(cleanState());
    dispatch(getCars())
    dispatch(getpublications(userId));;
  }, [dispatch]);

  const handleDelete = (e) => {
  
    const id = e.target.dataset.id
    // console.log("this is carId ramon>>>", id)
    // console.log("this is userId ramon>>>", userId)
    dispatch(deleteCar(id, userId))    
    toast.success('Car has been deleted 🗑️', {
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
        window.location.reload();      
      }, 3000);
  };

  

  return (
    
    <>
    <Navbar />
        <Link to="/carscreate">
          <button className="mt-9 font-semibold leading-none text-white py-3  bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">Create New Post</button>
        </Link>
		<div class="mt-5 max-w-3xl w-full mx-auto z-10 bg-blue">
		<div class="flex flex-col">
      
    {publicados? (
          publicados.map((e) => {
            return (

			<div class="bg-blue-600 border border-white shadow-lg  rounded-3xl p-4 m-4">
				<div class="flex-none sm:flex">
					<div class="flex-none h-32 w-42   ">
            <Link to={`/cars/${e.carId}`}><img class=" max-w-full h-32 object-cover rounded-2xl" src={e.img.secure_url || e?.img} alt="" /></Link>
						
						
					</div>
					<div class="sm:ml-5 justify-evenly relative">
						<div class="flex items-center justify-between sm:mt-2">
							<div class="flex items-center">
								<div class="flex flex-col">
									<div class="w-full flex-none text-lg text-gray-800 font-bold leading-none text-left">{e.brand}{" "}{e.model}</div>
									<div class="flex-auto text-gray-800 my-1">
                    
										<span class="mr-3 ">Year {e.year}</span>
                    <span class="mr-3 border-r border-gray-200  max-h-0"></span>
                    <span class="mr-20">{e.kilometers} Km</span>
                    <Link to={`/carsedit/${e.carId}`}>
                      <button type="button" class="absolute right-0 top-5 flex-none h-10 w-42 bg-black hover:bg-gray-800 px-5 ml-10 py-2 text-lg shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-3xl transition ease-in duration-300">
                        <span class="px-3">Edit</span>
                      </button>
                      </Link>

                  </div>
								</div>
							</div>
						</div>
						  <div class="flex flex-row items-center text-base font-semibold ">
            <span class="mr-3 ">Description</span><span class="mr-3 border-r border-gray-200  max-h-0"></span>
							</div>
							<div class="flex  text-sm text-gray-800">
								<div class="flex-1 items-start">
									
									<p class="">{e.description.slice(0, 90)}...</p>
								</div>
								
								<button type="button" data-id={e.carId} onClick={(event) => handleDelete(event)} class="flex-none h-10 w-42 bg-red-700 hover:bg-red-800 px-5 ml-4 py-2 text-lg shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-3xl transition ease-in duration-300">Delete</button>
							</div>
						</div>
					</div>
				</div>
			
	
              );
            })
          ) : (
            <div className={style.cardModal}>
              <h3>Nothing to show 🤔</h3>
            </div>
          )}
    </div>
		</div>

      <div>
        {/* <Pagination
          pagina={currentPage}
          setPagina={setCurrentPage}
          maximo={maximo}
        /> */}
      </div>


      <ToastContainer />
      <Footer />
    </>
  );
};

export default MyPublications;
