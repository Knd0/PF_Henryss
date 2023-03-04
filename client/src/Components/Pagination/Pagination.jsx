import React from "react";

export default function Pagination({
  carsPerPage,
  allcars,
  page,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allcars / carsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  if (currentPage === pageNumbers.length + 1) {
    page(1);
  }
  return (
    <div className="page">
      <button
        className="prevnext"
        onClick={() =>
          page(currentPage === 1 ? pageNumbers.length : currentPage - 1)
        }
      >
       prev
      </button>

      {pageNumbers &&
        pageNumbers.map((number) => {
          return (
            <button
              className={`numberpage ${
                number === currentPage ? "pagactive" : null
              }`}
              key={number}
              onClick={() => page(number)}
            >
              {currentPage === number ? <b>{number}</b> : number}
            </button>
          );
        })}
      <button
        className="prevnext"
        onClick={() =>
          page(currentPage === 0 ? pageNumbers.length : currentPage + 1)
        }
      >
        NEXT
      </button>
    </div>
  );
}
