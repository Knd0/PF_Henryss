import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../Img/Home.png";

export default function Navbar() {
  const [barsDropDownMenu, setBarsDropDownMenu] = useState(false)
  const handleBarsDropDownMenu = () => {
    barsDropDownMenu ? setBarsDropDownMenu(false) : setBarsDropDownMenu(true)
  }
  const [actualPage, setActualPage] = useState({})
  const handleActualPage = (e) => {
    console.log(actualPage)
    setActualPage({
      [e.target.name]:e.target.name
    })
  }
  return (
    <>

      {/* ------------------------------FUNCIONANDO---------------------------- */}

      {/* <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src={img} alt="logo" className={style.img} />
        </div>
        <div class="block lg:hidden">
          <button onClick={handleBarsDropDownMenu} id='boton' class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div id='menu' class={barsDropDownMenu ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto" : "w-full block flex-grow lg:flex lg:items-center lg:w-auto max-lg:hidden"}>
          <div class="text-sm lg:flex-grow">
            <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </Link>
            <Link to="/cars" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About Us
            </Link>
            <Link to="/aboutus" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              My Favorites
            </Link>
            <Link to="/carscreate" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Create your own Publish
            </Link>
          </div>
        </div>
      </nav> */}

      {/* ------------------------------FUNCIONANDO---------------------------- */}

      <nav class="flex items-center justify-between flex-wrap bg-white">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src={img} alt="logo" class="w-20 mt-3 ml-3" />
        </div>
        <div class="block sm:hidden">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <button onClick={handleBarsDropDownMenu} id='boton' class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div id='menu' class={barsDropDownMenu ? "w-full block flex-grow sm:flex sm:items-center sm:w-auto" : "w-full block flex-grow sm:flex sm:items-center sm:w-auto max-lg:hidden"}>
          <div class="text-sm sm:flex-grow">
            {actualPage.home? <Link to="/" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4 underline" name="home" onClick={handleActualPage}>
              Home
            </Link>:<Link to="/" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4" name="home" onClick={handleActualPage}>
              Home
            </Link>}
           
            {actualPage.cars?<Link to="/cars" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4 underline" name="cars" onClick={handleActualPage}>
              Cars
            </Link>:<Link to="/cars" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4" name="cars" onClick={handleActualPage}>
              Cars
            </Link>}

            {actualPage.aboutUs?<Link to="/aboutus" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4 underline" name="aboutUs" onClick={handleActualPage}>
            About Us
            </Link>:<Link to="/aboutus" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4" name="aboutUs" onClick={handleActualPage}>
            About Us
            </Link>}

            {actualPage.myFavorites?<Link to="/myfavorites" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4 underline" name="myFavorites" onClick={handleActualPage}>
              My Favorites
            </Link>:<Link to="/myfavorites" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4" name="myFavorites" onClick={handleActualPage}>
              My Favorites
            </Link>}

            {actualPage.createPost?<Link to="/carscreate" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4 underline" name="createPost" onClick={handleActualPage}>
              Create Post
            </Link>:<Link to="/carscreate" class="font-bold block mt-4 sm:inline-block sm:mt-0 text-gray-700 hover:underline mr-4" name="createPost" onClick={handleActualPage}>
              Create Post
            </Link>}
          </div>
        </div>

        <button
          type="button"
          class="max-sm:hidden my-auto self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </nav>



    </>
  );
}
