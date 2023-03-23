import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars, deleteCarAdmin } from "../../Redux/actions";
import { Link, useNavigate} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import style from "./Admin.module.css";
import swal from "sweetalert";
import CarsSearchBar from "./CarsSearchBar";
import Page404 from "../Page404/Page404";

export default function AdminCars() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.usersDetails);
  const admin = details[0]?.admin;
  const navigate = useNavigate ();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  function handleDelete(carId) {
    swal({
      title: "Are you sure?",
      text: "This user will be deleted.",
      icon: "warning",
      buttons: ["Cancel", "Accept"],
    }).then((value) => {
      if (value) {
        dispatch(deleteCarAdmin(carId));
        swal({
          title: "Succes",
          text: "This user has been deleted.",
          icon: "success",
          button: "Ok",
        }).then((info) => {
          if (info) {
            navigate('/admin');
          }
        });
      } else {
        swal({
          title: "This action has been canceled.",
          icon: "error",
          button: "Ok",
        });
      }
    });
  }

  if (admin == true && admin?.length !== 0) {
    return (
      <>
        <Navbar />
        <h2 className="underline">ADMIN CARS</h2>
        <div className={style.cardconteiner}>
          <Link to="/admin" className={style.btn}>
            <span>Back</span>
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="relative content-center items-center justify-between pb-4 bg-white dark:bg-gray-900">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <CarsSearchBar />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Brand
                </th>
                <th scope="col" className="px-6 py-3">
                  Model
                </th>
                <th scope="col" className="px-6 py-3">
                  Place
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  User Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {cars.length ? (
              <tbody>
                {cars.map((car) => (
                  <tr
                    key={car.carId}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-32 p-4">
                      <img src={car.img.secure_url || car.img} alt="Car pic" />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {car.brand}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {car.model}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {car.place}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {car.price}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {car.email}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(car.carId)}                       
                        className="grid font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Delete Car
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <h1>No hay Cars</h1>
            )}
          </table>
        </div>
      </>
    );
  } else {
    return <Page404 />;
  }
}
