import React from "react";

export default function Card({ img, brand, model, year, price }) {
  return (
    <div>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg mx-5 my-2 shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="p-15 rounded-t-lg" src={img} alt="" />
        <h5 class="text-xl font-semibold tracking-tight text-white-900 dark:text-white">
          {" "}
          Brand: {brand}
        </h5>
        <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {" "}
          Model: {model}
        </h3>
        <p class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {" "}
          Year: {year}
        </p>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to favorites
          </a>
        </div>
      </div>
    </div>
  );
}
