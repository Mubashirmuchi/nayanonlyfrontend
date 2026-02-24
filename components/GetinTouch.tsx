import { IconLocation, IconLocationPin, IconMapPin } from '@tabler/icons-react'
import { LocateIcon, MailIcon, PhoneIcon } from 'lucide-react'
import React from 'react'

const GetinTouch = () => {
  return (
  <section className=" py-20 bg-[#f4f1ec] ">
  <div className="max-w-6xl mx-auto px-6">

    {/* Inner Box */}
   

   <div className="bg-white py-12 md:py-16 px-6 md:px-10 text-center">

  {/* Title */}
  <h2 className="text-2xl md:text-4xl font-semibold mb-10 md:mb-14">
    Get In Touch
  </h2>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">

    {/* Item 1 */}
    <a
      href="mailto:admin@nayan.sa"
      className="group flex flex-col items-center text-center p-6 rounded-xl transition hover:shadow-lg"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gray-400 flex items-center justify-center mb-5 text-gray-600 group-hover:text-black transition">
        <MailIcon size={22} />
      </div>

      <h4 className="font-medium mb-2 text-base md:text-lg">
        We are always happy to help
      </h4>

      <span className="text-sm text-gray-500 break-all">
        admin@nayan.sa
      </span>
    </a>

    {/* Item 2 */}
    <a
      href="tel:+966561291512"
      className="group flex flex-col items-center text-center p-6 rounded-xl transition hover:shadow-lg"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gray-400 flex items-center justify-center mb-5 text-gray-600 group-hover:text-black transition">
        <PhoneIcon size={22} />
      </div>

      <h4 className="font-medium mb-2 text-base md:text-lg">
        Our Hotline Number
      </h4>

      <p className="text-sm text-gray-500">
        +966 56 1291512
      </p>
    </a>

    {/* Item 3 */}
    <a
      href="https://maps.app.goo.gl/nh7h5ykDu9TPRgHH7"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center text-center p-6 rounded-xl transition hover:shadow-lg"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gray-400 flex items-center justify-center mb-5 text-gray-600 group-hover:text-black transition">
        <IconLocationPin size={22} />
      </div>

      <h4 className="font-medium mb-2 text-base md:text-lg">
        Our Address
      </h4>

      <p className="text-sm text-gray-500">
        Office: Muhammed Rashed Abunayyanan Company, Al Malqa, Riyadh 13525, Saudi Arabia
      </p>
    </a>

  </div>
</div>
  </div>
</section>
  )
}

export default GetinTouch
