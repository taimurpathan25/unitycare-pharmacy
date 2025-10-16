// import React, { useEffect , useState} from 'react'
// import { Search, Phone, Upload } from "lucide-react";
// import Banner from '../components/common-components/banner/Banner';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// // import Crousel from '../Components/Carousel/Crousel'

// const Home = () => {
//   const {id} = useParams()
//   const [medicine, setMedicine] = useState([]);

//   useEffect(()=>{
//     // Backend API Call
//     axios.get("/api/medicines")
//     .then((response)=>{
//       setMedicine(response.data);
//     })
//     .catch((error)=>{
//       alert(`Error Fetching for Get the Medicine Data ${error}`)
//     })
//   }, [id])
//   // const [mode,setMode] = useState("corporate"); // default: corporate
//   return (
//     <>

//     {/* <Navbar mode={mode} setMode={setMode} /> */}
//     {/* <div
//         className={`min-h-screen transition-colors duration-500
//           ${mode === "corporate"
//             ? "bg-neutral-950 text-white"
//             : "bg-gradient-to-br from-emerald-50 to-green-100 text-green-900"}`}
//       >
//       </div> */}

// {/* <Banner/> */}

// {/* Hero Section */}
//       <section className="text-center py-20 px-6 bg-gradient-to-r from-green-50 to-green-100">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 drop-shadow-sm">
//           Order Medicines Online
//         </h2>
//         <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
//           Fast, Reliable & Affordable Medicine Delivery — Right at Your Doorstep
//         </p>

//         {/* Search Bar */}
//         <div className="mt-8 flex max-w-2xl mx-auto border-2 border-green-200 rounded-full overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
//           <input
//             type="text"
//             placeholder="🔍 Search medicines, health products..."
//             className="flex-1 px-5 py-3 outline-none text-gray-700"
//           />
//           <button className="bg-green-600 hover:bg-green-700 text-white px-6 flex items-center gap-2 font-medium transition">
//             <Search size={18} /> Search
//           </button>
//         </div>

//         {/* CTA Buttons */}
//         <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
//           <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 shadow-md font-medium transition">
//             <Upload size={20} /> Upload Prescription
//           </button>
//           <a
//             href="tel:+917618270346"
//             className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 shadow-md font-medium transition"
//           >
//             <Phone size={20} /> Call Now
//           </a>
//         </div>
//       </section>

//     <div>
//       {/* Extra Info Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-green-50">
//             <h3 className="text-xl font-bold text-green-700">✔ 100% Genuine Medicines</h3>
//             <p className="text-gray-600 mt-2">Trusted by thousands of customers daily.</p>
//           </div>
//           <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-green-50">
//             <h3 className="text-xl font-bold text-green-700">🚚 Fast Delivery</h3>
//             <p className="text-gray-600 mt-2">Get medicines delivered within hours at your doorstep.</p>
//           </div>
//           <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-green-50">
//             <h3 className="text-xl font-bold text-green-700">💊 Expert Support</h3>
//             <p className="text-gray-600 mt-2">Our pharmacists are always ready to help you.</p>
//           </div>
//         </div>
//       </section>

//       {/* Medicine Showing Information by APIs Data */}
//       <section className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Available Medicines</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {medicine.map((med) =>
//           med.variants.map((variant) => (
//             <Link
//               to={`/medicineList/${med.id}/${variant.id}`}
//               key={variant.id}
//             >
//               <div className="p-4 border rounded-lg shadow hover:shadow-lg bg-white">
//                 <img
//                   src={variant.image}
//                   alt={variant.brand}
//                   className="w-full h-40 object-cover rounded-md"
//                 />
//                 <h3 className="text-lg font-bold mt-2">{variant.brand}</h3>
//                 <p>{variant.uses}</p>
//                 <p className="text-green-700 font-semibold">₹{variant.price}</p>
//               </div>
//             </Link>
//           ))
//         )}
//       </div>
//     </section>

//     </div>

//     </>
//   )
// }

// export default Home;

import React, { useEffect, useState } from "react";
import { Search, Phone, Upload, Dot, ShipIcon, Truck, Store, Headset, ShieldCheck } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../pages/css/Home.css";

const Home = () => {
  const CardSlider = (slidesToShow, speed, designType) => {
    const settings = {
      dots: true,
      infinite: true,
      speed,
      slidesToShow, // Desktop (large screen)
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      arrows: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1536, // very large screens (2K+)
          settings: { slidesToShow: 6 },
        },
        {
          breakpoint: 1280, // large desktops / laptops
          settings: { slidesToShow: 5 },
        },
        {
          breakpoint: 1024, // normal desktops / tablets in landscape
          settings: { slidesToShow: 3 },
        },
        {
          breakpoint: 768, // tablets / small laptops
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 480, // small mobiles
          settings: { slidesToShow: 1 },
        },
      ],
    };

    const cards = [
      {
        id: 1,
        title: "Medicine",
        link: "all-medicines",
        text: "This is card one",
        image:
          "https://png.pngtree.com/png-clipart/20240619/original/pngtree-drug-capsule-pill-from-prescription-in-drugstore-pharmacy-for-treatment-health-png-image_15366552.png",
      },
      {
        id: 2,
        title: "Skin Care",
        link: "all-personal-care",
        text: "This is card two",
        image:
          "https://cdn.thewirecutter.com/wp-content/media/2024/12/ROUNDUP-KOREAN-SKINCARE-2048px-9732-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024",
      },
      {
        id: 3,
        title: "Creams",
        link: "all-creams",
        text: "This is card three",
        image:
          "https://thehomeedit.com/cdn/shop/articles/8f4b00d3251d10e9f60503a4525ddcc9.jpg",
      },
      {
        id: 4,
        title: "Health Care",
        link: "all-health-care",
        text: "This is card four",
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/036/393/623/small_2x/ai-generated-pharmacy-drugstore-retail-healthcare-products-medicine-drugs-vitamins-wellness-free-photo.jpeg",
      },
      {
        id: 5,
        title: "Vitamins and Supplements",
        link: "all-vitamins-and-supplements",
        text: "This is card five",
        image:
          "https://www.sanatogen.co.uk/sites/g/files/vrxlpx40571/files/2021-04/homeheader_bootles_3.png",
      },
      {
        id: 6,
        title: "Diabetes Care",
        link: "all-diabetes-care",
        text: "This is card Six",
        image:
          "https://www.ascensia.com/globalassets/home/ascensia-home-bgm.png",
      },
      {
        id: 7,
        title: "Health Devices",
        link: "all-health-devices",
        text: "This is card Seven",
        image:
          "https://www.massoninternational.com/hs-fs/hubfs/Articles%20de%20blog/The%20European%20Medical%20Device%20Market%20-%20Opportunities%20and%20Challenges/medical-device-market.jpg?width=500&name=medical-device-market.jpg",
      },
    ];
    return (
      <div className="w-[100%] mt-10">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="p-3">
              {designType == 'style1' ? (
<div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Link to={card.link}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-50% h-50 mx-auto"
                  />
                  <h2 className="text-xl font-bold mt-5">{card.title}</h2>
                  <p className="text-gray-600">{card.text}</p>
                </Link>
              </div>
              
              ) : (
                <div className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer">
                  <Link to={card.link}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[200px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                      <h2 className="text-white font-bold text-xl">
                        {card.title}
                      </h2>
                      <p className="text-gray-200 text-sm">{card.text}</p>
                    </div>
                  </Link>
                </div>
              )}
              
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <>
      <div>
        <section className="text-center py-20 px-6 bg-gradient-to-r from-green-50 to-green-100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 drop-shadow-sm">
            Order Medicines Online
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Fast, Reliable & Affordable Medicine Delivery — Right at Your
            Doorstep
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 text-xl font-bold">
            <span className="blinking-text1 flex items-center justify-center">
              <Dot /> See Health
            </span>
            <span className="blinking-text2 flex items-center justify-center">
              <Dot /> Do Trust
            </span>
            <span className="blinking-text3 flex items-center justify-center">
              <Dot /> Book Online Medicines
            </span>
          </div>
          {/* ✅ Search Bar Restored */}
          <div className="mt-5 flex max-w-2xl mx-auto border-2 border-green-200 rounded-full overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
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
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 shadow-md font-medium transition">
              <Upload size={20} /> Upload Prescription
            </button>
            <a
              href="tel:+917618270346"
              className="blink-btn text-white px-8 py-3 rounded-xl flex items-center gap-2 shadow-md font-medium transition"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </section>
      </div>

      {/* <section className="m-10">
          <div className="heading">
            <h2 className="text-left font-bold text-4xl">Featured Products</h2>
          </div>
          <div className="feature-product-image grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div><img src="" alt="Feature image" /></div>
            <div>
            <img src="" alt="Feature image" />
            <img src="" alt="Feature image" />
            </div>
            <div><img src="" alt="Feature image" /></div>
          </div>
        </section> */}
        
        {/* order type services  */}
      <section className="m-6 md:m-10 border-t-4 border-green-700 border-b-4 pt-10">
  <div className="flex justify-between items-center gap-8 overflow-x-auto px-2 scrollbar-hide">
    
    {/* Free Shipping */}
    <div className=" flex items-center gap-3 flex-shrink-0 min-w-[220px] sm:min-w-[250px] pb-10">
      <Truck className="text-green-600 w-6 h-6 sm:w-8 sm:h-8 md:w-15 md:h-15 hover:scale-110 transition-all" />
      <div>
        <h1 className="text-sm sm:text-base md:text-2xl font-semibold">
          Free Shipping
        </h1>
        <span className="text-gray-500 text-xs sm:text-sm">
          If online order over ₹200
        </span>
      </div>
    </div>

    {/* Easy Return */}
    <div className=" flex items-center gap-3 flex-shrink-0 min-w-[220px] sm:min-w-[250px] pb-10">
      <Store className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8 md:w-15 md:h-15 hover:scale-110 transition-all" />
      <div>
        <h1 className="text-sm sm:text-base md:text-2xl font-semibold">
          Easy Return
        </h1>
        <span className="text-gray-500 text-xs sm:text-sm">
          Return within 7 days
        </span>
      </div>
    </div>

    {/* 24/7 Support */}
    <div className=" flex items-center gap-3 flex-shrink-0 min-w-[220px] sm:min-w-[250px] pb-10">
      <Headset className="text-purple-600 w-6 h-6 sm:w-8 sm:h-8 md:w-15 md:h-15 hover:scale-110 transition-all" />
      <div>
        <h1 className="text-sm sm:text-base md:text-2xl font-semibold">
          24/7 Support
        </h1>
        <span className="text-gray-500 text-xs sm:text-sm">
          Any time pharmacist help
        </span>
      </div>
    </div>

    {/* Secure Payment */}
    <div className=" flex items-center gap-3 flex-shrink-0 min-w-[220px] sm:min-w-[250px] pb-10">
      <ShieldCheck className="text-yellow-600 w-6 h-6 sm:w-8 sm:h-8 md:w-15 md:h-15 hover:scale-110 transition-all" />
      <div>
        <h1 className="text-sm sm:text-base md:text-2xl font-semibold">
          Secure Payment
        </h1>
        <span className="text-gray-500 text-xs sm:text-sm">
          100% Fast & Safe Payment
        </span>
      </div>
    </div>

  </div>
</section>


      <section className="m-10">
        <div className="heading">
          <h2 className="text-left font-bold text-4xl">
            Explore More Categories
          </h2>
        </div>
        {CardSlider(4, 800, 'style1')}
      </section>

      {/* <SearchBar/> */}



      {/* How it works section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-green-50">
              <ShipIcon className="mx-auto mb-4 text-green-600 w-12 h-12" />
              <h3 className="text-xl font-bold text-green-700">
                1. Place Your Order
              </h3>
              <p className="text-gray-600 mt-2">
                Browse our extensive catalog and add medicines to your cart.
              </p>
            </div>
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-green-50">
              <Truck className="mx-auto mb-4 text-green-600 w-12 h-12" />
              <h3 className="text-xl font-bold text-green-700">
                2. Fast Delivery
              </h3>
              <p className="text-gray-600 mt-2">
                We process your order quickly and deliver it to your doorstep.
              </p>
            </div>
            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-green-50">
              <Headset className="mx-auto mb-4 text-green-600 w-12 h-12" />
              <h3 className="text-xl font-bold text-green-700">
                3. Expert Support
              </h3>
              <p className="text-gray-600 mt-2">
                Our pharmacists are available to assist you with any queries.
              </p>
            </div>
          </div>
        </div>
      </section>


<section className="m-10">
        <div className="heading">
          <h2 className="text-left font-bold text-4xl">
            Explore More Categories
          </h2>
        </div>
        {CardSlider(2, 1200, 'style2')}
      </section>

      </>
  );
};

export default Home;
