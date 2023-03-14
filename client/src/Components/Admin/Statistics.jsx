import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import style from "./Admin.module.css";
import { Link } from "react-router-dom";

export default function Statistics() {
  const cars = useSelector((state) => state.allcars.length);
  const users = useSelector((state) => state.users.length);
  const earnings = cars * 50;
  return (
    <>
      <Navbar />
      <div className={style.cardconteiner}>
        <h2 className="underline">ADMIN STATISTICS</h2>
        <Link to="/admin" className={style.btn}>
          <span>Back</span>
        </Link>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              ${earnings}
            </h6>
            <p className="mb-2 font-bold text-md">earnings</p>
            <p className="text-gray-700">
              Total earnings calculated with number of posts.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              {users}
            </h6>
            <p className="mb-2 font-bold text-md">Users</p>
            <p className="text-gray-700">
              Number of registered users on the page.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              91
            </h6>
            <p className="mb-2 font-bold text-md">Reviews</p>
            <p className="text-gray-700">
              Number of reviews received by users.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              {cars}
            </h6>
            <p className="mb-2 font-bold text-md">Car Posts</p>
            <p className="text-gray-700">
              Number of cars published on the page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
