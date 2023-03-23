import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../Reviews/Reviews.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../../Redux/actions";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
function Reviews() {
  const [rating, setRating] = useState(0);
  const reviews = useSelector((state) => state.opinion);
  const fechaActual = new Date();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const [reviewsPerPage, setReviewsPerPage] = useState(12)
  const indexOfLastReview = currentPage * reviewsPerPage
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage
  const showReviewsPage = reviews.slice(indexOfFirstReview, indexOfLastReview)
    const maximo = reviews.length / reviewsPerPage;
    const usersDetails = useSelector((state) => state.usersDetails)
    const userId = usersDetails.length > 0 ? usersDetails[0].userId : null
    const publico = reviews.filter((r)=> userId===r.userId)


 
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <h1 className="underline text-4xl font-bold text-gray-800 mb-8">Reviews</h1>
      {publico.length ? <Link to={"/updateReview"}>
        {" "}
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Update Review
        </button>
      </Link>: <Link to={"/starsReviews"}>
        {" "}
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Rate us!
        </button>
      </Link>}
      <div className={styles.contenedor}>
        {showReviewsPage?.map((r) => {
          

          return (
            <div key={r.reviewId} className="mb-5 w-96 h-82 relative flex-col items-start justify-start gap-4 p-4 bg-gray-200 rounded-lg shadow-md ml-8">
              <div className="mt-8 flex flex-row justify-between text-lg text-gray-500">
                  <div>
                        <p>
                          User:{" "}
                          <span className="font-medium text-gray-600">{r.name}</span>
                        </p>
                  </div>
                  <div>
                        <p>
                          Fecha:{" "}
                          <span className="font-medium text-gray-800">
                            {r.updatedAt.slice(0, 10)}
                          </span>
                        </p>
                  </div>
              </div>
              <div className="relative items-center gap-2 text-5xl">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      color: index < r.rating ? "yellow" : "white",
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md w-full">
                <p className="overflow-x-auto w-full h-40 resize-none text-lg">{r.review}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />

    </>
  );
}

export default Reviews;

