import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Cars/Cars.module.css";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {
  getCars,
  cleanState,
  orderByAlf,
  filterByBrand,
  filterByYear,
  orderByKM,
  orderByPrice,
} from "../../Redux/actions";
import Search from "../Search/Search";
import swal from "sweetalert";
import Loading from "../Loading/Loading";

export default function Cars() {
  const dispatch = useDispatch();
  const allcars = useSelector((state) => state.cars);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(8);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = allcars.slice(indexOfFirstCar, indexOfLastCar);
  const [order, setOrder] = useState("");
  const cars = useSelector((state) => state.allcars);
  const loading = useSelector((state) => state.loading);

  const page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(cleanState());
    dispatch(getCars());
  }, [dispatch]);

  function handleSortAlf(e) {
    e.preventDefault();
    dispatch(orderByAlf(e.target.value));
    setOrder(`Order ${e.target.value}`);
    setCurrentPage(1);
  }
  function handleFilteredBrand(e) {
    dispatch(filterByBrand(e.target.value));
    setOrder(`Order ${e.target.value}`);
    setCurrentPage(1);
  }

  function handleFilteredYear(e) {
    dispatch(filterByYear(e.target.value));
    setOrder(`Order ${e.target.value}`);
    setCurrentPage(1);
  }

    function handleSortAlf(e) {
        e.preventDefault();
        dispatch(orderByAlf(e.target.value));
        setOrder(`Order ${e.target.value}`)
        setCurrentPage(1);
      
    } 
 
    function handleSortKM(e) {
        e.preventDefault();
        dispatch(orderByKM(e.target.value));
        setOrder(`Order ${e.target.value}`)
        setCurrentPage(1);
    }

  function handleSortPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setOrder(`Order ${e.target.value}`);
    setCurrentPage(1);
  }
  function handleClick(e) {
    dispatch(getCars());
    console.log("fghjk");
  }
  function handleAlert() {
    dispatch(getCars());
    swal("Oops", "Car not found!", "error");
  }

  return (
    <>
      <Navbar />

      <div className={style.filtros}>
        <div>
          Order alphabetically:
          <select className={style.select} onChange={(e) => handleSortAlf(e)}>
            <option value="All">All</option>
            <option value="atoz">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        <div>
          Order by price:
          <select className={style.select} onChange={(e) => handleSortPrice(e)}>
            <option value="All">All</option>
            <option value="mayp">Minor to Major</option>
            <option value="menp">Major to Minor</option>
          </select>
        </div>
        <div>
            Order by KM:
            <select className={style.select} onChange={(e) => handleSortKM(e)}>
                <option value="All">All</option>
                <option value="maykm">Minor to Major</option>
                <option value="menkm">Major to Minor</option>
            </select>
        </div>
        <div>
            Filter by year:
            <select className={style.select} onChange={e => handleFilteredYear(e)}>
                <option value="All">All</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
            </select>
        </div>
        <div>
          Filter by brand:
          <select
            className={style.select}
            onChange={(e) => handleFilteredBrand(e)}
          >
            <option value="All">All</option>
            <option value="Audi">Audi</option>
            <option value="Honda">Honda</option>
            <option value="DFSK">DFSK</option>
            <option value="Subaru">Subaru</option>
            <option value="BMW">BMW</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Nissan">Nissan</option>
            <option value="Kia">Kia</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Porsche">Porsche</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Toyota">Toyota</option>
            <option value="Mazda">Mazda</option>
            <option value="Ford">Ford</option>
            <option value="Jeep">Jeep</option>
            <option value="Tesla">Tesla</option>
          </select>
        </div>
      </div>
      <div>
        <Search page={page}/>
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : currentCars.length ? (
          <div className={style.cardconteiner}>
            {currentCars.map((e) => {
              return (
                <div>
                  <Link to={`${e.id}`}>
                    <Card
                        carId={e.carId}
                        brand={e.brand}
                        img={e.img}
                        model={e.model}
                        year={e.year}
                        kilometers={e.kilometers}
                        price={e.price}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={style.cardModal}>{handleAlert()}</div>
        )}
      </div>
      <Pagination
      currentPage={currentPage}
        carsPerPage={carsPerPage}
        allcars={allcars.length}
        page={page}
      />
      <Footer />
    </>
  );
}
