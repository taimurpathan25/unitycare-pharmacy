import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const usePagination = (items = [], itemsPerPage = 4) => {
    const location = useLocation();
    const navigate = useNavigate();

    // get page from url 
    const query = new URLSearchParams(location.search);
    const initialPage = parseInt(query.get("page"), 10) || 1;

    const [currentPage, setCurrentPage] = useState(initialPage)

    //update url when changes the page 
    useEffect(()=>{
        navigate(`?page=${currentPage}`, {replace:true})
    },[currentPage, navigate])

    // Slice items for current page
    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMedicines = items.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(items.length / itemsPerPage)

  return {currentPage, setCurrentPage, currentMedicines, totalPages}
}

export default usePagination