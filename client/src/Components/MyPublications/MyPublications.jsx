import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCars, cleanState, getpublications } from "../../Redux/actions";
import { Link } from "react-router-dom";
import style from "../MyPublications/MyPublications.module.css";
import Pagination from "../Pagination/Pagination";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import imgBorrar from "../Img/borrar.png";
import imgMenu from "../Img/menu.png";

const MyPublications = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state)=>state.cars)
  const usersDetails = useSelector((state) => state.usersDetails)
  const userId = usersDetails[0].userId
  const publications = useSelector((state) => state.usersDetails[0].publications)
  const publicados = cars.filter((c)=>{
    if(c.carId.toString()===publications.toString()){
      return c
    }
  })
  console.log("ESTOE ES PUBLICATIONS===================>",publications)
  console.log("ESTOE ES PUBLICADOS===================>",publicados)
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCountriesPerPage] = useState(3);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  // const currentCars = publications.slice(indexOfFirstCar, indexOfLastCar);
  // const maximo = publications.length / carsPerPage;

  useEffect(() => {
    dispatch(cleanState());
    dispatch(getpublications(userId));
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar />
        <Link to="/carscreate">
          <button>Create New Post</button>
        </Link>
        {publicados? (
          publicados.map((e) => {
            return (
              <div key={e.carId} className={style.container}>
                <div className={style.flexContainerPublications}>
                 <Link to={`/carsedit/${e.carId}`}><img width={200} height={200} src={e.img.secure_url} alt="" /></Link>

                  <div className={style.itemsDescriptionContainerPublications}>
                    <div className={style.itemsContainerPublications}>
                      <h5 className={style.titulo}>
                        Marca:{" "}
                        <span className={style.subtitulo}>{e.brand}</span>
                      </h5>
                      <h5 className={style.titulo}>
                        Modelo:{" "}
                        <span className={style.subtitulo}>{e.model}</span>
                      </h5>
                      <h5 className={style.titulo}>
                        Año: <span className={style.subtitulo}>{e.year}</span>
                      </h5>
                      <h5 className={style.titulo}>
                        Km: <span className={style.subtitulo}>{e.kilometers}</span>
                      </h5>
                    </div>
                    <div className={style.descriptionContainer}>
                      <h5 className={style.titulo}>descrition</h5>
                      <div className={style.decriptiontext}>
                        {" "}
                        <p className={style.subtitulo}>
                          {e.description.slice(0, 100)}...
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* div de itemsDescriptionContainerPublications */}
                  <div>
                    <div className={style.deleteEditarContainer}>
                      <button className={style.btn}>
                        <svg
                          viewBox="0 0 15 17.5"
                          height="25"
                          width="22"
                          xmlns="http://www.w3.org/2000/svg"
                          className={style.icon}
                        >
                          <path
                            transform="translate(-2.5 -1.25)"
                            d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                            id="Fill"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>{" "}
                {/* div de flexContainerPublication  */}
              </div>
            );
          })
        ) : (
          <div className={style.cardModal}>
            <h3>Nothing to show 🤔</h3>
          </div>
        )}
      </div>
      <div></div>
      <div>
        {/* <Pagination
          pagina={currentPage}
          setPagina={setCurrentPage}
          maximo={maximo}
        /> */}
      </div>
      <Footer />
    </>
  );
};

export default MyPublications;
