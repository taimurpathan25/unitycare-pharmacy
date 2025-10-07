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




import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { slugify } from '../../../utils/slugify'

const MedicineDetails = () => {
  const { category, slug, variantSlug } = useParams()
  const [medicine, setMedicine] = useState(null)
  const [variant, setVariant] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    // ✅ Default category fallback — if none passed
    const validCategory = category || 'medicines'

    axios
      .get(`/api/${validCategory}`)
      .then((res) => {
        const allData = res.data || []
        const foundMedicine = allData.find((m) => slugify(m.name) === slug)

        if (foundMedicine) {
          setMedicine(foundMedicine)

          // ✅ If medicine has variants
          if (foundMedicine.variants && foundMedicine.variants.length > 0) {
            const selectedVariant =
              foundMedicine.variants.find((v) => slugify(v.brand) === variantSlug) ||
              foundMedicine.variants[0] // default to first
            setVariant(selectedVariant)
          } else {
            // ✅ For medicines with no variants
            setVariant({
              brand: foundMedicine.name,
              image: foundMedicine.image,
              uses: foundMedicine.uses || foundMedicine.description,
              price: foundMedicine.price || 'N/A',
            })
          }
        }

        setLoading(false)
      })
      .catch((err) => {
        console.log('Error loading medicine details:', err)
        setLoading(false)
      })
  }, [category, slug, variantSlug])

  if (loading) return <p className='p-6 text-center'>Loading Details...</p>
  if (!variant) return <p className='p-6 text-center text-red-500'>Medicine not found</p>

  return (
    <div className='p-6 max-w-3xl mx-auto'>
      {/* Image Section */}
      {variant.image ? (
        <img
          src={variant.image}
          alt={variant.brand}
          className='w-full h-60 object-cover rounded-lg shadow'
        />
      ) : (
        <div className='w-full h-40 bg-gray-200 flex items-center justify-center rounded-md'>
          <span className='text-gray-500'>{variant.brand} Image Not Found</span>
        </div>
      )}

      {/* Basic Info */}
      <h2 className='text-3xl font-bold mt-4'>{variant.brand}</h2>
      <p className='mt-2 text-gray-700'>
        <strong>Uses:</strong> {variant.uses}
      </p>
      <p className='mt-2 text-green-700 font-semibold text-xl'>
        <strong>Price:</strong> ₹{variant.price}
      </p>

      {/* Description (if available) */}
      {medicine?.description && (
        <p className='mt-4 text-gray-600 leading-relaxed'>{medicine.description}</p>
      )}

      {/* Variant List (if available) */}
      {/* {medicine?.variants?.length > 1 && (
        <div className='mt-6'>
          <h3 className='text-2xl font-semibold mb-3'>Other Variants:</h3>
          <ul className='list-disc ml-6 text-gray-700 grid grid-cols-1 sm:grid-cols-4 gap-2'>
            {medicine.variants.map((v) => (
              <li key={v.id}>
                <img src={v.image} alt="" />
                {v.brand} – ₹{v.price}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  )
}

export default MedicineDetails

