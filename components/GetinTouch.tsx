import React from 'react'

const GetinTouch = () => {
  return (
  <section className=" py-20 bg-[#f4f1ec] ">
  <div className="max-w-7xl mx-auto px-6">

    {/* Inner Box */}
    <div className=" bg-white rounded-md py-16 px-10 text-center">

      {/* Title */}
      <h2 className="text-4xl font-semibold mb-14">
        Get In Touch
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-10">

        {/* Item 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center mb-6">
            ✉️
          </div>

          <h4 className="font-medium mb-2">
            We are always happy to help
          </h4>

          <p className="text-sm text-gray-500">
            info@nayan.com
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center mb-6">
            📞
          </div>

          <h4 className="font-medium mb-2">
            Our Hotline Number
          </h4>

          <p className="text-sm text-gray-500">
            +1 123567885554
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center mb-6">
            📍
          </div>

          <h4 className="font-medium mb-2">
            Our Address
          </h4>

          <p className="text-sm text-gray-500">
            Office: Riyadh, Saudi Arabia
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center mb-6">
            🕒
          </div>

          <h4 className="font-medium mb-2">
            Working Hours
          </h4>

          <p className="text-sm text-gray-500">
            Sun – Thu, 9:00am – 6:00pm
          </p>
        </div>

      </div>

    </div>
  </div>
</section>
  )
}

export default GetinTouch
