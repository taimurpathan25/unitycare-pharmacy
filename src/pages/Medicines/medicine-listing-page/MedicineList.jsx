import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { slugify } from "../../../utils/slugify";
import FilterSidebar from "../../../components/common-components/filteration/FilterSideBar";

const MedicineList = () => {
  const { category,slug } = useParams(); // Only medicine slug
  const [medicine, setMedicine] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    axios.get(`/api/${category}`) // API Calling based on category
      .then((res) => {
        const allMedicines = res.data;
        const med = allMedicines.find((m) => slugify(m.name) === slug);
        setMedicine(med);

        // if (med) {
        //   const relatedMeds = allMedicines.filter(
        //     (m) => m.name === med.name && m.id !== med.id
        //   );
        //   setRelated(relatedMeds);
        // }
      })
      .catch(err => console.log(err));
  }, [category,slug]);

  if (!medicine) return <p>Loading...</p>;

  return (
    <>
    {/* <SearchBar/> */}
    <section className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <aside className="md:col-span-1 p-4 border rounded-lg shadow bg-white h-fit">
      <FilterSidebar/>
    </aside>


      {/* Variants */}
      <div className="md:col-span-3">
      <h2 className="text-2xl font-bold mb-6">{medicine.name} - All Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {medicine.variants.map((variant) => (
          <Link
            to={`/${category}/medicineDetail/${slugify(medicine.name)}/${slugify(variant.brand)}`}
            key={`${medicine.id}-${variant.id}`}
            className=" py-4 border rounded-lg shadow hover:shadow-lg bg-white transition"
          >
            {
              variant.image ? (
                <img src={variant.image} alt={variant.brand} className="w-full h-50 object-cover rounded-md mb-2" />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
                    <span className="text-gray-500">{variant.brand} Image Not Found</span>
                  </div>
              )
            }
            <h3 className="px-4 text-lg font-bold">{variant.brand}</h3>
            <p className="px-4">Uses: {variant.uses}</p>
            <p className="px-4 text-green-700 font-semibold">₹{variant.price}</p>
          </Link>
        ))}
      </div>
      </div>

      {/* Related Medicines */}
      {/* {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Medicines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((med) =>
              med.variants.map((variant) => (
                <Link
                  to={`/medicineDetail/${slugify(med.name)}/${slugify(variant.brand)}`}
                  key={`${med.id}-${variant.id}`}
                >
                  <div className="p-4 border rounded-lg shadow hover:shadow-lg bg-white">
                    <img src={variant.image} alt={variant.brand} className="w-full h-40 object-cover rounded-md mb-2" />
                    <h3 className="text-lg font-bold">{variant.brand}</h3>
                    <p>Uses: {variant.uses}</p>
                    <p className="text-green-700 font-semibold">₹{variant.price}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      )} */}
    </div>
    </section>
    </>
  );
};

export default MedicineList;
