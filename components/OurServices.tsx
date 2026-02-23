import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <section className="relative w-full  flex items-center justify-center min-h-3/6 py-24">

  {/* Background Image */}
  <Image
    src="/frame.jpeg"
    alt="Our Services"
    fill
    className="object-cover"
    priority
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl w-full px-6 text-center text-white">

    {/* Heading */}
    <p className="uppercase tracking-widest text-sm mb-4 opacity-80">
      What We Do
    </p>

    <h2 className="text-5xl font-semibold mb-6">
      Our Services
    </h2>

    <p className="max-w-2xl mx-auto text-lg opacity-90 mb-16">
      Our services span the full real estate lifecycle, from development and execution
      to management and investment consulting.
    </p>

    {/* Service Cards */}
    <div className="grid md:grid-cols-4 gap-6">

      {[
        "Development & Implementation",
        "Design & Build custom projects",
        "Property Management & after-sales",
        "Real estate investment consulting"
      ].map((service, i) => (
        <div
          key={i}
          className="backdrop-blur-md bg-white/20 p-8 text-left rounded-md border border-white/30 hover:bg-white/30 transition duration-500"
        >
          <p className="text-lg mb-4 opacity-80">
            {i + 1}.
          </p>

          <h3 className="text-xl font-medium leading-snug">
            {service}
          </h3>
        </div>
      ))}

    </div>

  </div>
</section>
  )
}

export default OurServices
