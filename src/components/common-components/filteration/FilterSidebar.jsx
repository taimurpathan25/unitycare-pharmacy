// import React from "react";

// const FilterSidebar = ({ filters, setFilters }) => {
//   // Handle checkbox change
//   const handleCheckbox = (e, type) => {
//     const value = e.target.value;
//     const checked = e.target.checked;

//     setFilters((prev) => {
//       let updated = { ...prev };
//       if (checked) {
//         updated[type] = [...prev[type], value];
//       } else {
//         updated[type] = prev[type].filter((item) => item !== value);
//       }
//       return updated;
//     });
//   };

//   // Handle price change
//   const handlePrice = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <aside className="w-full md:w-64 bg-white border rounded-lg p-4 shadow-md">
//       <h2 className="text-lg font-bold mb-4">Filters</h2>

//       {/* Category */}
//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">Category</h3>
//         {["Tablet", "Capsule", "Syrup"].map((cat) => (
//           <label key={cat} className="block mb-1">
//             <input
//               type="checkbox"
//               value={cat}
//               onChange={(e) => handleCheckbox(e, "categories")}
//               className="mr-2"
//             />
//             {cat}
//           </label>
//         ))}
//       </div>

//       {/* Brand */}
//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">Brand</h3>
//         {["Cipla", "Sun Pharma", "Micro Labs", "Dr. Reddy"].map((brand) => (
//           <label key={brand} className="block mb-1">
//             <input
//               type="checkbox"
//               value={brand}
//               onChange={(e) => handleCheckbox(e, "brands")}
//               className="mr-2"
//             />
//             {brand}
//           </label>
//         ))}
//       </div>

//       {/* Price */}
//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">Price Range</h3>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             placeholder="Min"
//             name="minPrice"
//             onChange={handlePrice}
//             className="w-20 p-1 border rounded"
//           />
//           <input
//             type="number"
//             placeholder="Max"
//             name="maxPrice"
//             onChange={handlePrice}
//             className="w-20 p-1 border rounded"
//           />
//         </div>
//       </div>

//       {/* Rating */}
//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">Rating</h3>
//         {[4, 3, 2].map((rate) => (
//           <label key={rate} className="block mb-1">
//             <input
//               type="checkbox"
//               value={rate}
//               onChange={(e) => handleCheckbox(e, "ratings")}
//               className="mr-2"
//             />
//             {rate}+ Stars
//           </label>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default FilterSidebar;



import React from "react";

const FilterSidebar = () => {
  return (
    <div className=" bg-white shadow-md rounded-lg p-4 space-y-6 h-fit">
      <h2 className="font-bold text-lg border-b pb-2">Filters</h2>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Tablets
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Capsules
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Syrups
          </label>
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-semibold mb-2">Brand</h3>
        <div className="flex flex-col space-y-2 max-h-32 overflow-y-auto pr-2">
          {["Samsung", "Apple", "Xiaomi", "OnePlus", "Cipla", "Sun Pharma"].map(
            (brand) => (
              <label key={brand} className="flex items-center">
                <input type="checkbox" className="mr-2" /> {brand}
              </label>
            )
          )}
        </div>
        <button className="text-blue-500 text-sm mt-1">+ More</button>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <input type="range" min="0" max="70000" className="w-full" />
        <div className="flex justify-between text-sm text-gray-600">
          <span>₹0</span>
          <span>₹70,000</span>
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-2">Customer Rating</h3>
        <div className="flex flex-col space-y-2">
          {[4, 3, 2, 1].map((r) => (
            <label key={r} className="flex items-center">
              <input type="radio" name="rating" className="mr-2" />
              {r}★ & above
            </label>
          ))}
        </div>
      </div>

      {/* Offers */}
      <div>
        <h3 className="font-semibold mb-2">Offers</h3>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Buy 1 Get 1
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Discount Available
          </label>
        </div>
      </div>

      {/* Clear All */}
      <button className="w-full mt-4 bg-gray-100 px-3 py-2 rounded hover:bg-gray-200">
        Clear All
      </button>
    </div>
  );
};

export default FilterSidebar;


