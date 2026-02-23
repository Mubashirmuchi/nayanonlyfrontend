import React from 'react'
import filters from '@/lib/filter-Pills-Section'

const FilterSection = () => {
  return (
 <div className="bg-[#f4f1ec] py-10">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-wrap gap-3">
      {filters.map((filter, i) => (
        <button
          key={i}
          className="px-5 py-2 rounded-full text-sm border border-gray-300 bg-white hover:bg-[#c69c5d] hover:text-white transition"
        >
          {filter}
        </button>
      ))}
    </div>

  </div>
</div>
  )
}

export default FilterSection
