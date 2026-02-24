import Image from 'next/image'

const OurClients = () => {
  return (
    <section className="bg-[#f5f5f0] py-20">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      {/* Badge */}
      <div className="inline-block border border-gray-400 rounded-full px-4 py-1 text-xs tracking-wide text-gray-700 mb-6">
        OUR CLIENTS AND PARTNERS
      </div>

      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
        <span className="text-gray-900">
          Serving a Diverse{" "}
        </span>
        <span className="text-gray-500">
          Community of
        </span>
        <br />
        <span className="text-gray-900">
          Investors and Partners
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
        We work with individual investors, corporations, and government
        entities, building relationships based on trust and transparency.
        Our diverse clientele includes executives, entrepreneurs,
        professionals, and international residents across the region.
      </p>
    </div>

    {/* RIGHT IMAGES */}
    <div className="grid grid-cols-2 gap-6">

      {/* Top Left Color Block */}
      <div className="bg-[#C08E46] aspect-square"></div>

      {/* Top Right Image */}
      <div className="aspect-square overflow-hidden">
        <Image
         width={500}
         height={500}
          src="/frame.jpeg"
          alt="Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Large Image */}
      <div className="col-span-2  aspect-video overflow-hidden">
        <Image
          width={500}
         height={500}
          src="/frame.png"
          alt="Building"
          className="w-full h-full object-cover"
        />
      </div>

    </div>

  </div>
</section>
  )
}

export default OurClients
