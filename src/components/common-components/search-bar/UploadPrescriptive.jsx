import { Phone, Search, Upload } from 'lucide-react'
import React, { useState } from "react";

const UploadPrescription = () => {
  const [file, setFile] = useState(null);

  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold text-green-700">Upload Prescription</h2>
      <p className="mt-4 text-gray-600">Upload your doctor’s prescription to order medicines easily.</p>

      <form className="mt-6 flex flex-col items-center space-y-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded"
        />
        {file && <p className="text-sm text-gray-600">Selected: {file.name}</p>}
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg shadow">
          Submit Prescription
        </button>
      </form>
    </section>
  );
};

export default UploadPrescription;
