import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AlphaNumericFilter from '../components/common-components/alpha-numeric-filter/AlphaNumericFilter';
import { slugify } from '../utils/slugify';
import FilterSidebar from '../components/common-components/filteration/FilterSideBar';
import usePagination from '../Hooks/usePagination';
import Pagination from '../components/common-components/pagination/pagination';


const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [filterData, setFilterData] = useState([]);  // filterState

  useEffect(()=>{
    // Backend API Call
    axios.get("/api/medicines")
    .then((response)=>{
      setMedicines(response.data || []); // safe fallback
      setFilterData(response.data || []); // default all data
    })
    .catch((error)=>{
      alert(`Error Fetching for Get the Medicine Data ${error}`)
    })
  }, [])


  const {currentPage, setCurrentPage, currentMedicines, totalPages} = usePagination(filterData, 12);
  
  return (
    
         <>
     <div className='container mx-auto p-5'>
      <h1 className='text-4xl my-5 text-center font-semibold'>Available All Medicines</h1>

      <AlphaNumericFilter data={medicines} onFiltered={setFilterData}/>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
       <aside className="md:col-span-1 p-4 border rounded-lg shadow bg-white h-fit top-20 mb-5">
      <FilterSidebar/>
    </aside>
    
      {
        currentMedicines.length > 0 ? 
        (
          <div className="md:col-span-3">
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
          {currentMedicines.map((medicine)=>(
             // Make each medicine clickable
            <Link 
              key={medicine.id} 
              to={`/all-medicines/medicineDetail/${slugify(medicine.name)}`}
            >
              <div className='p-5 rounded-lg shadow-md hover:shadow-xl transition h-full'>
                <img src={medicine.image} alt={medicine.name} className='w-50 h-50 mx-auto'/>
                <h2 className='text-2xl font-bold mb-3 mt-9'>{medicine.name}</h2>
                <p>{medicine.description}</p>
              </div>
            </Link>
          ))}
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
        ) : (
          <p className="text-center text-gray-500">No medicines found</p>
        )
      }

      
      </div>
      </div>
      {/* <Outlet/> */}
     </>
  )
}

export default Medicine