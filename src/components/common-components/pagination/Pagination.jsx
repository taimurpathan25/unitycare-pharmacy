import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Prev Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 border rounded cursor-pointer ${
            currentPage === i + 1
              ? "bg-gradient-to-b from-green-900/90 to-teal-800/80 text-white"
              : ""
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
