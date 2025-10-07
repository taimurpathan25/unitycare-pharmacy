import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GlobalDetailPage = () => {
  const { category, slug, subslug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch category-wise data
    axios.get(`/api/${category}`)
      .then((res) => {
        // Match slug (medicine name or variant brand)
        const item = res.data.find(
          (med) =>
            med.name?.toLowerCase().replace(/\s+/g, "-") === slug ||
            med.brand?.toLowerCase().replace(/\s+/g, "-") === slug
        );

        // If subslug present, find variant
        if (item && subslug && item.variants) {
          const variant = item.variants.find(
            (v) =>
              v.brand?.toLowerCase().replace(/\s+/g, "-") === subslug
          );
          setData(variant || item);
        } else {
          setData(item);
        }
      })
      .catch((err) => console.error("Error loading detail:", err))
      .finally(() => setLoading(false));
  }, [category, slug, subslug]);

  if (loading) return <p className="p-6 text-center text-gray-500">Loading...</p>;
  if (!data) return <p className="p-6 text-center text-gray-500">No details found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={data.image || "https://via.placeholder.com/250"}
          alt={data.name || data.brand}
          className="w-full md:w-64 h-64 object-cover rounded-xl"
        />
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-3">
            {data.name || data.brand}
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Company:</strong> {data.company || "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Formula:</strong> {data.formula || "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Uses:</strong> {data.uses || "N/A"}
          </p>
          {data.price && (
            <p className="text-green-600 font-semibold text-lg mt-3">
              ₹{data.price}
            </p>
          )}
        </div>
      </div>

      {data.description && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Description:</h3>
          <p className="text-gray-600">{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default GlobalDetailPage;
