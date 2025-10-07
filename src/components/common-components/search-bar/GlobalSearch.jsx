import { Search } from 'lucide-react'
import React from 'react'

const GlobalSearch = () => {
  return (
    <>
    {/* ✅ Search Bar Restored */}
        <div className="mt-8 my-8 flex max-w-2xl mx-auto border-2 border-green-200 rounded-full overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
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
        </>
  )
}

export default GlobalSearch