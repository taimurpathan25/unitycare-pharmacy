import React, { useState, useEffect } from "react";

const AlphaNumericFilter = ({ data = [], onFiltered }) => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numbers = ["#"]; // # = 0–9
  const [filter, setFilter] = useState(null);

  // Apply filter whenever data or filter changes
  useEffect(() => {
    let filtered = data;

    if (filter) {
      if (filter === "#") {
        filtered = data.filter((item) => /^[0-9]/.test(item.name));
      } else {
        filtered = data.filter((item) =>
          item.name.toUpperCase().startsWith(filter)
        );
      }
    }

    onFiltered(filtered); // send back filtered data
  }, [filter, data]);

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {/* Numbers */}
      {numbers.map((num) => (
        <button
          key={num}
          onClick={() => setFilter(num)}
          className={`px-3 py-1 border rounded transition cursor-pointer ${
            filter === num ? "bg-green-600 text-white" : "hover:bg-green-600 hover:text-white"
          }`}
        >
          {num}
        </button>
      ))}

      {/* Alphabets */}
      {alphabets.map((letter) => (
        <button
          key={letter}
          onClick={() => setFilter(letter)}
          className={`px-3 py-1 border rounded transition cursor-pointer ${
            filter === letter ? "bg-green-600 text-white" : "hover:bg-green-600 hover:text-white"
          }`}
        >
          {letter}
        </button>
      ))}

      {/* Clear Filter */}
      {filter && (
        <button
          onClick={() => setFilter(null)}
          className="px-3 py-1 border rounded bg-red-500 text-white hover:bg-red-600 transition cursor-pointer" 
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default AlphaNumericFilter;
