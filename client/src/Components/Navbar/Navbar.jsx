import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import img from "../Img/RadiatorSprings.jpg";
import LoginButton from "../Login/Login";
import LogoutButton from "../Login/Logout";
import style from "./Navbar.module.css";
import { createUs, getUsersDetails, cleanState } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.usersDetails);
  const [barsDropDownMenu, setBarsDropDownMenu] = useState(false);
  const admin = details[0]?.admin;

  useEffect(() => {
    if (user) {
      const payload = {
        nickname: user.nickname,
        email: user.email,
        name: user.name,
        picture: user.picture,
      };
      dispatch(createUs(payload));
      dispatch(getUsersDetails(user.email));
    }
    if (!isAuthenticated) {
      dispatch(cleanState());
    }
  }, [dispatch, user, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(cleanState());
    }
  }, [dispatch, isAuthenticated]);

  const handleBarsDropDownMenu = () => {
    barsDropDownMenu ? setBarsDropDownMenu(false) : setBarsDropDownMenu(true);
  };
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white">
        <NavLink to="/">
          <div className="flex items-center flex-shrink-0 text-white">
            <img src={img} alt="logo" className="w-20 mt-3 ml-3" />
            <span className=" text-black ml-2 self-center text-xl font-bold whitespace-nowrap dark:text-white">
              Radiator Springs
            </span>
          </div>
        </NavLink>
        <div className="block sm:hidden">
          <button
            onClick={handleBarsDropDownMenu}
            id="boton"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          id="menu"
          className={
            barsDropDownMenu
              ? "  sm:flex sm:items-center sm:w-auto border-b-black-500"
              : "  sm:flex sm:items-center sm:w-auto max-lg:hidden border-b-black-500"
          }
        >
          <div className="text-sm sm:flex-grow">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline underline mr-4"
                    : "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline no-underline mr-4"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline underline mr-4"
                    : "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline no-underline mr-4"
                }`
              }
            >
              Cars
            </NavLink>
            <NavLink
              to="/myfavorites"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline underline mr-4"
                    : "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline no-underline mr-4"
                }`
              }
            >
              My favorites
            </NavLink>
            <NavLink
              to="/mypublications"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline underline mr-4"
                    : "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline no-underline mr-4"
                }`
              }
            >
              My publications
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline underline mr-4"
                    : "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline no-underline mr-4"
                }`
              }
            >
              Reviews
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline underline mr-4"
                    : "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline no-underline mr-4"
                }`
              }
            >
              About us
            </NavLink>

            {admin ? (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 underline"
                      : "font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 no-underline"
                  }`
                }
              >
                Dashboard Admin
              </NavLink>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={style.log}>
          <div className={style.profile}>
            {isAuthenticated && (
              <div>
                <Link to="/user">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={admin ? details[0].picture : user.picture}
                    alt="Rounded avatar"
                  />
                  <p className="mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4">
                    Profile
                  </p>
                </Link>
              </div>
            )}
            {!isAuthenticated && (
              <div>
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            )}
          </div>
          {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
        </div>
      </nav>
    </>
  );
}
