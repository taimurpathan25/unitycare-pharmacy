// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react'
// // import { useParams } from 'react-router-dom'

// // const MedicineDetails = () => {
// //     const {id, variantId} = useParams();
// //     const [variant , setVariant] = useState(null);

// //     useEffect(()=>{
// //         axios.get("/api/medicines")
// //         .then((res)=>{
// //             const medicine = res.data.find((med)=>med.id === parseInt(id));
// //             if(medicine){
// //                 const selectedVariant = medicine.variants.find((v)=>v.id === parseInt(variantId));
// //                 setVariant(selectedVariant);
// //             }
// //         })
// //         .catch((err)=>{
// //             alert(err)
// //         })
// //     }, [id, variantId])

// //     if(!variant) return <p className='p-6 text-center'>Loading Details ....</p>


// //   return (
// //     <>
// //     <div className='p-6 max-w-3xl mx-auto'>
// //         <img src={variant.image} alt={variant.brand} className='w-full h-60 object-cover rounded-lg shadow' />
// //         <h2 className='text-3xl font-bold mt-4'>{variant.brand}</h2>
// //         <p className='mt-2 text-gray-700'><strong>Uses:</strong> {variant.uses}</p>
// //         <p className='mt-2 text-green-700 font-semibold text-xl'><strong>Price:</strong> ₹{variant.price}</p>
// //     </div>
// //     </>
// //   )
// // }

// // export default MedicineDetails




// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { slugify } from '../../../utils/slugify'

// const MedicineDetails = () => {
//   const { category, slug, variantSlug } = useParams()
//   const [variant, setVariant] = useState(null)


//   useEffect(() => {
//     axios.get(`/api/${category}`) // API Calling based on category
//       .then((res) => {
//         const medicine = res.data.find(m => slugify(m.name) === slug)
//         if (medicine) {
//           const selectedVariant = medicine.variants.find(v => slugify(v.brand) === variantSlug)
//           setVariant(selectedVariant)
//         }
//       })
//       .catch(err => console.log(err))
//   }, [category,slug, variantSlug])

//   if (!variant) return <p className='p-6 text-center'>Loading Details ....</p>

//   return (
//     <div className='p-6 max-w-3xl mx-auto'>
//       {
//         variant.image ? (
//           <img src={variant.image} alt={variant.brand} className='w-full h-60 object-cover rounded-lg shadow' />
//         ) : (
//           <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
//                     <span className="text-gray-500">{variant.brand} Image Not Found</span>
//                   </div>
//         )
//       }
      
//       <h2 className='text-3xl font-bold mt-4'>{variant.brand}</h2>
//       <p className='mt-2 text-gray-700'><strong>Uses:</strong> {variant.uses}</p>
//       <p className='mt-2 text-green-700 font-semibold text-xl'><strong>Price:</strong> ₹{variant.price}</p>
//     </div>
//   )
// }

// export default MedicineDetails




// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { slugify } from '../../../utils/slugify'

// const MedicineDetails = () => {
//   const { category, slug, variantSlug } = useParams()
//   const [medicine, setMedicine] = useState(null)
//   const [variant, setVariant] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (!slug) return

//     // ✅ Default category fallback — if none passed
//     const validCategory = category || 'medicines'

//     axios
//       .get(`/api/${validCategory}`)
//       .then((res) => {
//         const allData = res.data || []
//         const foundMedicine = allData.find((m) => slugify(m.name) === slug)

//         if (foundMedicine) {
//           setMedicine(foundMedicine)

//           // ✅ If medicine has variants
//           if (foundMedicine.variants && foundMedicine.variants.length > 0) {
//             const selectedVariant =
//               foundMedicine.variants.find((v) => slugify(v.brand) === variantSlug) ||
//               foundMedicine.variants[0] // default to first
//             setVariant(selectedVariant)
//           } else {
//             // ✅ For medicines with no variants
//             setVariant({
//               brand: foundMedicine.name,
//               image: foundMedicine.image,
//               uses: foundMedicine.uses || foundMedicine.description,
//               price: foundMedicine.price || 'N/A',
//             })
//           }
//         }

//         setLoading(false)
//       })
//       .catch((err) => {
//         console.log('Error loading medicine details:', err)
//         setLoading(false)
//       })
//   }, [category, slug, variantSlug])

//   if (loading) return <p className='p-6 text-center'>Loading Details...</p>
//   if (!variant) return <p className='p-6 text-center text-red-500'>Medicine not found</p>

//   return (
//     <div className='p-6 max-w-3xl mx-auto'>
//       {/* Image Section */}
//       {variant.image ? (
//         <img
//           src={variant.image}
//           alt={variant.brand}
//           className='w-full h-60 object-cover rounded-lg shadow'
//         />
//       ) : (
//         <div className='w-full h-40 bg-gray-200 flex items-center justify-center rounded-md'>
//           <span className='text-gray-500'>{variant.brand} Image Not Found</span>
//         </div>
//       )}

//       {/* Basic Info */}
//       <h2 className='text-3xl font-bold mt-4'>{variant.brand}</h2>
//       <p className='mt-2 text-gray-700'>
//         <strong>Uses:</strong> {variant.uses}
//       </p>
//       <p className='mt-2 text-green-700 font-semibold text-xl'>
//         <strong>Price:</strong> ₹{variant.price}
//       </p>

//       {/* Description (if available) */}
//       {medicine?.description && (
//         <p className='mt-4 text-gray-600 leading-relaxed'>{medicine.description}</p>
//       )}

//       {/* Variant List (if available) */}
//       {/* {medicine?.variants?.length > 1 && (
//         <div className='mt-6'>
//           <h3 className='text-2xl font-semibold mb-3'>Other Variants:</h3>
//           <ul className='list-disc ml-6 text-gray-700 grid grid-cols-1 sm:grid-cols-4 gap-2'>
//             {medicine.variants.map((v) => (
//               <li key={v.id}>
//                 <img src={v.image} alt="" />
//                 {v.brand} – ₹{v.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )} */}
//     </div>
//   )
// }

// export default MedicineDetails




import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { slugify } from "../../../utils/slugify";

const MedicineDetails = () => {
  const { category, slug, variantSlug } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [variant, setVariant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  // Zoom states
  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  useEffect(() => {
    if (!slug) return;
    const validCategory = category || "medicines";

    axios
      .get(`/api/${validCategory}`)
      .then((res) => {
        const allData = res.data || [];
        const foundMedicine = allData.find((m) => slugify(m.name) === slug);
        if (foundMedicine) {
          setMedicine(foundMedicine);

          if (foundMedicine.variants && foundMedicine.variants.length > 0) {
            const selectedVariant =
              foundMedicine.variants.find(
                (v) => slugify(v.brand) === variantSlug
              ) || foundMedicine.variants[0];
            setVariant(selectedVariant);
          } else {
            setVariant({
              brand: foundMedicine.name,
              image: foundMedicine.image,
              uses: foundMedicine.uses || foundMedicine.description,
              price: foundMedicine.price || "N/A",
            });
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [category, slug, variantSlug]);

  if (loading)
    return <p className="p-6 text-center text-gray-500">Loading...</p>;
  if (!variant)
    return <p className="p-6 text-center text-red-500">Medicine not found</p>;

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 bg-white rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="relative flex items-center">
        <div
          className="w-full h-[400px] border rounded-lg bg-gray-50 overflow-hidden cursor-crosshair"
          ref={imgRef}
          onMouseEnter={() => setZoomVisible(true)}
          onMouseLeave={() => setZoomVisible(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={variant.image}
            alt={variant.brand}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Zoom Box */}
        {zoomVisible && (
          <div
            className="absolute top-0 left-full ml-4 w-[600px] h-[400px] border rounded-lg overflow-hidden bg-white shadow-lg z-50"
            style={{
              backgroundImage: `url(${variant.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "200% 200%",
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
            }}
          />
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-gray-900">{variant.brand}</h1>
          <p className="text-gray-600 mb-3">
            Category: <span className="font-medium text-blue-600 capitalize">{category}</span>
          </p>
          <p className="text-green-600 font-bold text-2xl mb-4">
            ₹{variant.price}{" "}
            {variant.mrp && <span className="text-gray-400 text-lg ml-2 line-through">{variant.mrp}</span>}
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">{variant.uses || medicine?.description}</p>

          <div className="flex gap-3 mt-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition">
              Add to Cart
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="flex border-b mb-4">
            {["description", "uses", "ingredients", "reviews"].map((tab) => (
              <button
                key={tab}
                className={`capitalize px-4 py-2 text-sm font-medium transition border-b-2 ${
                  activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-gray-700">
            {activeTab === "description" && <p>{medicine?.description || "No description available."}</p>}
            {activeTab === "uses" && <p>{medicine?.uses || "Usage information not available."}</p>}
            {activeTab === "ingredients" && <p>{medicine?.ingredients || "Ingredients not listed."}</p>}
            {activeTab === "reviews" && <p className="text-gray-500">No reviews yet.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;


