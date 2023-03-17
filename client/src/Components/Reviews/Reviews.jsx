import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../Reviews/Reviews.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../../Redux/actions";
import { Link } from "react-router-dom";

function Reviews() {
  const [rating, setRating] = useState(0);
  const reviews = useSelector((state) => state.opinion);
  const fechaActual = new Date();
  const dispatch = useDispatch();
  console.log("ESTO ES REVIEWS===============>", reviews);
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <h1>Reviews</h1>
      <Link to={"/starsReviews"}>
        {" "}
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Rate us!
        </button>
      </Link>
      <div className={styles.contenedor}>
        {reviews?.map((r) => {
          console.log("ESTO ES R============>", r);
          return (
            <div className={styles.containerItems}>
              <p>
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      cursor: "pointer",
                      color: index < r.rating ? "yellow" : "black",
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </p>
              <p className="truncate">{r.review}</p>
              <div className={styles.fechaOpinionContainer}>
                <div>
                  <p>
                    User: <span>{r.name}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Fecha: <span>{r.updatedAt.slice(0, 10)}</span>
                  </p>
                </div>
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
