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
  const cars = useSelector((state)=>state.cars)
  const usersDetails = useSelector((state) => state.usersDetails)
  const userId = usersDetails.length > 0 ? usersDetails[0].userId : null
  // const publications = useSelector((state) => state.usersDetails[0].publications)
  const publications = usersDetails.length > 0 ? usersDetails[0].publications : null

  const publicados = cars.filter((c) => publications?.includes(c?.carId.toString()));

    
  console.log("ESTOE ES PUBLICATIONS===================>",publications)
  console.log("ESTOE ES PUBLICADOS===================>",publicados)
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCountriesPerPage] = useState(3);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  // const currentCars = publications.slice(indexOfFirstCar, indexOfLastCar);
  // const maximo = publications.length / carsPerPage;
  const navigate = useNavigate();


  useEffect(() => {
    // dispatch(cleanState());
    dispatch(getpublications(userId));;
  }, [dispatch]);

  const handleDelete = (e) => {
    // if (errors.description) { //chequeo si hay errores
    //   toast.error('Please correct errors 🚦', {
    //     position: "top-center",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //     });;
    //   return;
    // }
    const id = e.target.dataset.id
    console.log("this is carId ramon>>>", id)
    console.log("this is userId ramon>>>", userId)
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
        navigate("/cars");      
      }, 3000);
  };

  return (
    
    <>
    <Navbar />
        <Link to="/carscreate">
          <button className="mt-9 font-semibold leading-none text-white py-3  bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">Create New Post</button>
        </Link>
		<div className="mt-5 max-w-3xl w-full mx-auto z-10 bg-blue">
		<div className="flex flex-col">
      
    {publicados? (
          publicados.map((e) => {
            return (

			<div className="bg-blue-600 border border-white shadow-lg  rounded-3xl p-4 m-4">
				<div className="flex-none sm:flex">
					<div className="flex-none h-32 w-42   ">
            <Link to={`/carsedit/${e.carId}`}><img className=" max-w-full h-32 object-cover rounded-2xl" src={e.img.secure_url || e?.img} alt="" /></Link>
						
						
					</div>
					<div className="flex-auto sm:ml-5 justify-evenly">
						<div className="flex items-center justify-between sm:mt-2">
							<div className="flex items-center">
								<div className="flex flex-col">
									<div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">{e.brand}{" "}{e.model}</div>
									<div className="flex-auto text-gray-800 my-1">
										<span className="mr-3 ">Year {e.year}</span><span className="mr-3 border-r border-gray-200  max-h-0"></span><span>{e.kilometers} Km</span>
									</div>
								</div>
							</div>
						</div>
						  <div className="flex flex-row items-center text-base font-semibold ">
            <span className="mr-3 ">Description</span><span className="mr-3 border-r border-gray-200  max-h-0"></span>
							</div>
							<div className="flex  text-sm text-gray-800">
								<div className="flex-1 items-start">
									
									<p className="">{e.description.slice(0, 90)}...</p>
								</div>
								
								<button type="button" data-id={e.carId} onClick={(event) => handleDelete(event)} className="flex-none h-10 w-42 bg-red-700 hover:bg-red-800 px-5 ml-4 py-2 text-lg shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-3xl transition ease-in duration-300">Delete</button>
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
