import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getReviews,
  DeleteAdminReview,
  searchReviewAdmin,
} from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import style from "./Admin.module.css";
import { Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import Page404 from "../Page404/Page404";

export default function AdminReviews() {
  const reviews = useSelector((state) => state.opinion);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.usersDetails);
  const admin = details[0]?.admin;
  const [input, setInput] = useState("");
  const[backButton, setBackButton] = useState(false)
  const navigate = useNavigate ();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  //allReviews.filter((r)=>r.nickmane.includes(reviews.nickname))
  function handleChangeSearch(e) {
    e.preventDefault();
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchReviewAdmin(input));
    setBackButton(true)
  }

  function handleBackClick(e){
    e.preventDefault()
    window.location.reload(true)
    setBackButton(false)
  }


  function handleDelete(reviewId) {
    swal({
      title: "Are you sure?",
      text: "This review will be deleted.",
      icon: "warning",
      buttons: ["Cancel", "Accept"],
    }).then((value) => {
      if (value) {
        dispatch(DeleteAdminReview(reviewId));
        swal({
          title: "Succes",
          text: "This review has been deleted.",
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

  if (admin?.length !== 0 && admin) {
    return (
      <>
        <Navbar />
        <h2 className="underline">ADMIN REVIEWS</h2>
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
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              {backButton? <button onClick={(e)=>handleBackClick(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Back
          </button>:null}
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  onChange={(e) => handleChangeSearch(e)}
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </form>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Review ID
                </th>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {reviews.length ? (
              <tbody>
                {reviews.map((review) => (
                  <tr
                    key={review.reviewId}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {review.name}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <div className="flex items-center">{review.reviewId}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">{review.userId}</div>
                    </td>
                    <td className="px-6 py-4 w-60 truncate">
                      <div className="flex items-center w-60 truncate">
                        {review.review}
                      </div>
                    </td>
                    <td className="px-6 py-4 w-60 ">
                      <div className="flex items-center">{review.rating}</div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        onClick={() => handleDelete(review.userId)}
                        className="grid font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer"
                      >
                        Delete review
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <h1>No hay Reviews</h1>
            )}
          </table>
        </div>
      </>
    );
  } else {
    return <Page404 />;
  }
}
