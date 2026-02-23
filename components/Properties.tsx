import Image from 'next/image'
import React from 'react'

const Properties = () => {
  return (
<section className="relative h-[420px] flex items-center justify-center text-white py-20 pt-32 px-6">
  <Image
    src="/frame.jpeg"
    alt="Developments"
    fill
    className="object-cover object-top"
    priority
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative text-center max-w-3xl px-6">
    <p className="uppercase tracking-widest text-sm mb-4 opacity-80">
      Our Developments
    </p>

    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
      Selected developments defined by quality, location, and long-term value.
    </h1>
  </div>
</section>
  )
}

export default Properties
