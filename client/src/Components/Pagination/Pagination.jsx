import React from "react";

export default function Pagination({
  carsPerPage,
  allcars,
  page,
  currentPage,
}) {
  const pageNumbers = [];
  const visiblePages = 5;

  for (let i = 0; i < Math.ceil(allcars / carsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  const startIndex = currentPage - 1 - Math.floor((visiblePages - 1) / 2);
  const endIndex = startIndex + visiblePages;

  const visiblePageNumbers =
    startIndex < 0
      ? pageNumbers.slice(0, visiblePages)
      : pageNumbers.slice(startIndex, endIndex);

  return (
    <div className="m-5">
      {currentPage !== 1 && (
        <button
          className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-red-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() =>
            page(currentPage === 1 ? pageNumbers.length : currentPage - 1)
          }
        >
          Prev
        </button>
      )}
      {visiblePageNumbers.map((number) => {
        return (
          <button
            className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-red-500 hover:text-black dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              number === currentPage
                ? "px-3 py-2 text-red-500 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                : null
            }`}
            key={number}
            onClick={() => page(number)}
          >
            {currentPage === number ? <b>{number}</b> : number}
          </button>
        );
      })}
      {currentPage !== pageNumbers.length && (
        <button
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-red-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() =>
            page(currentPage === 0 ? pageNumbers.length : currentPage + 1)
          }
        >
          Next
        </button>
      )}
    </div>
  );
}
