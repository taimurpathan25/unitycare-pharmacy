import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import FilterSidebar from '../components/common-components/filteration/FilterSideBar';
const Personalcare = () => {
  const personalCareImages = [
    {
        id: 1,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card one",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e",
      },
    {
        id: 2,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card two",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e", 
      },
    {
        id: 3,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card three",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e", 
      },
    {
        id: 4,  
        title: "personal care",
        link: "all-personal-care",
        text: "This is card four",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e",
      },
    {
        id: 5,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card five",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e", 
      },
    {
        id: 6,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card six",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e", 
      },
    {
        id: 7,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card seven",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e", 
      },
    {
        id: 8,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card eight",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e", 
      },
    {
        id: 9,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card nine",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e4f4c6e", 
      },
    {
        id: 10,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card ten",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e", 
      },
      { id: 11,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card eleven",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e",
      },
      { id: 12,
        title: "personal care",
        link: "all-personal-care",
        text: "This is card twelve",
        image: "https://img.freepik.com/free-photo/assortment-cosmetic-products_23-2149435791.jpg?w=1380&t=st=1696117206~exp=1696117806~hmac=3a3f3e2e5a4f0e2e3c1b8e4f4c6e4f4c6e4f4c6e4f4c6e",
      },

  ]
  return (
    <>
        <div className='container mx-auto p-5 grid grid-cols-1 md:grid-cols-4 gap-5'>  
          <div className='my-5 col-span-1 sticky top-45 h-fit'>  
          <FilterSidebar/> 
          </div>
          <div className='my-5 col-span-1 md:col-span-3'> 
        <div className="heading">
          <h1 className="text-4xl my-5 text-center font-semibold">Available All Personal Care Products</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
          {personalCareImages.map((item) => (
              <Link key={item.id} to={`/all-personal-care/medicineDetail/${slugify(item.title)}`}>
            <div className="p-5 border rounded-lg shadow-md hover:shadow-xl transition">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-3" /> 
              <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
              <p>{item.text}</p>
            </div>
              </Link>
          ))}
        </div>
        </div>
        {/* <Outlet/> */}
        </div>
    </>
  )
}

export default Personalcare