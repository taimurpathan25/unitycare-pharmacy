import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AlphaNumericFilter from '../components/common-components/alpha-numeric-filter/AlphaNumericFilter';
import { slugify } from '../utils/slugify';


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
  
  return (
    
         <>
     <div className='containe mx-auto p-5'>
      <h1 className='text-4xl my-5 text-center font-semibold'>Available All Medicines</h1>

      <AlphaNumericFilter data={medicines} onFiltered={setFilterData}/>
      {
        filterData.length > 0 ? 
        (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {filterData.map((medicine)=>(
             // Make each medicine clickable
            <Link 
              key={medicine.id} 
              to={`/all-medicines/medicineDetail/${slugify(medicine.name)}`}
            >
              <div className='p-5 border rounded-lg shadow-md hover:shadow-xl transition'>
                <img src={medicine.image} alt={medicine.name} />
                <h2 className='text-2xl font-bold mb-3'>{medicine.name}</h2>
                <p>{medicine.description}</p>
              </div>
            </Link>
          ))}
        </div>
        ) : (
          <p className="text-center text-gray-500">No medicines found</p>
        )
      }
      {/* <Outlet/> */}
     </div>
     </>
  )
}

export default Medicine