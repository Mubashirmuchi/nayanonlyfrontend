import React from 'react'
import Image from 'next/image'
import { IconEyeSearch, IconTargetArrow } from '@tabler/icons-react'
import { Flag } from 'lucide-react'
const LargeBanner = () => {
   const image3= "/image3.jpeg"

  return (
 <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Outer Border Container */}
    <div className="border border-[#d6b98c] p-6">

      {/* Top Image */}
      <div className="relative w-full h-[350px] mb-12">
        <Image
          src={image3}
          alt="Luxury Building"
          fill

className="object-cover object-top"        />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-[#efefef] p-8">
          <div className="w-14 h-14 bg-[#c69c5d] rounded-full flex items-center justify-center mb-6">
            <IconTargetArrow color='white'/>
          </div>

          <h3 className="text-xl font-semibold mb-4">
            Our Goal
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm">
            To build integrated urban communities that enhance quality of life in Riyadh and across Saudi Arabia through high-quality projects supporting Vision 2030.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#efefef] p-8">
          <div className="w-14 h-14 bg-[#c69c5d] rounded-full flex items-center justify-center mb-6">
         <Flag color='white'/>
          </div>

          <h3 className="text-xl font-semibold mb-4">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm">
            To develop integrated real estate projects that fulfill the ambitions of individuals and investors while adding genuine value to cities and communities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#efefef] p-8">
          <div className="w-14 h-14 bg-[#c69c5d] rounded-full flex items-center justify-center mb-6">
<IconEyeSearch color='white'
/>
          </div>

          <h3 className="text-xl font-semibold mb-4">
            Our Vision
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm">
            To be the first choice in real estate development and investment by delivering high-quality residential and commercial communities that excel in efficiency, location, and design.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>
  )
}

export default LargeBanner
