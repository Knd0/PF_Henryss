import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCars, cleanState } from "../../Redux/actions";
import { Link } from "react-router-dom";
import style from "../MyPublications/MyPublications.module.css";
import Pagination from "../Pagination/Pagination";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import imgBorrar from "../Img/borrar.png";
import imgMenu from "../Img/menu.png";

const MyPublications = () => {
  const dispatch = useDispatch();
  const allcars = useSelector((state) => state.cars);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCountriesPerPage] = useState(3);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = allcars.slice(indexOfFirstCar, indexOfLastCar);
  const maximo = allcars.length / carsPerPage;

  useEffect(() => {
    dispatch(cleanState());
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar />
        <Link to='/carscreate'>
                <button>Create New Post</button>
                </Link>
        {currentCars.length ? (
          currentCars.map((e) => {
            return (
              <div className={style.container}>
                <div className={style.flexContainerPublications}>
                  <img width={200} height={200} src={e.img} alt="" />

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
                        Km: <span className={style.subtitulo}>{e.km}</span>
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
                      <img width={20} height={20} src={imgBorrar} alt="" />
                      <img width={20} height={20} src={imgMenu} alt="" />
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
        <Pagination
          pagina={currentPage}
          setPagina={setCurrentPage}
          maximo={maximo}
        />
      </div>
      <Footer />
    </>
  );
};

export default MyPublications;
