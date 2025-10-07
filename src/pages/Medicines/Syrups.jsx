import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slugify';
import Pagination from "../../components/common-components/pagination/pagination";
import usePagination from "../../Hooks/usePagination";
import FilterSidebar from "../../components/common-components/filteration/FilterSideBar";
import GlobalSearch from "../../components/common-components/search-bar/GlobalSearch";
import AlphaNumericFilter from "../../components/common-components/alpha-numeric-filter/AlphaNumericFilter";

const Syrups = () => {
 const [medicine, setMedicine] = useState([]);
  const [filterData, setFilterData] = useState([]);  // filterState 

  // Fetch medicines
  useEffect(() => {
    axios
      .get("/api/syrups")
      .then((response) => {
        setMedicine(response.data || []); // safe fallback
        setFilterData(response.data || []); // default all data 
      })
      .catch((error) => {
        console.error("Error fetching medicine data:", error);
        alert(`Error fetching medicine data: ${error.message}`);
      });
  }, []);

  // ✅ Use custom pagination hook and pagination on filtered data 
  const {currentPage, setCurrentPage, currentMedicines, totalPages} = usePagination(filterData, 12);

  return (
    <>
      {/* <SearchBar/> */}
    <section className="p-6">
      <h2 className="text-2xl text-center font-bold mb-6">
        Available Medicines
      </h2>

{/* ✅ Search Bar Restored */}
        {/* <div className="mt-8 mb-8 flex max-w-2xl mx-auto border-2 border-green-200 rounded-full overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
          <input
            type="text"
            placeholder="🔍 Search medicines, health products..."
            className="flex-1 px-5 py-3 outline-none text-gray-700"
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 flex items-center gap-2 font-medium transition">
            <Search size={18} /> Search
          </button>
        </div> */}
        {/* <GlobalSearch/> */}

    <AlphaNumericFilter data={medicine} onFiltered={(filtered)=>{setFilterData(filtered);setCurrentPage(1)}} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* ---------------- Filter Sidebar ---------------- */}
    <aside className="md:col-span-1 p-4 border rounded-lg shadow bg-white h-fit">
      <FilterSidebar/>
    </aside>
    

      {/* Medicine grid */}
      <div className="md:col-span-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentMedicines.length > 0 ? (
          currentMedicines.map((med) => (
            <Link to={`/syrups/medicineList/${slugify(med.name)}`} key={med.id}>
              <div className="p-4 border rounded-lg shadow hover:shadow-md shadow-emerald-300">
                {med.image ? (
                  <img
                    src={med.image}
                    alt={med.name}
                    className="w-full h-40 object-cover rounded-md hover:scale-105 transform-gpu transition duration-700 ease-in-out"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <h3 className="text-lg font-bold mt-4 text-center">
                  {med.name}
                </h3>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No medicines available.
          </p>
        )}
      </div>
      
      {/* Pagination controls */}
      {
        totalPages > 1 && (
          <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          />
        ) 
      }
      </div>

      </div>

      {/* {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded cursor-pointer ${
                currentPage === i + 1
                  ? "bg-gradient-to-b from-green-900/90 to-teal-800/80 text-white"
                  : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      )} */}
    </section>
    </>
  );
};

export default Syrups