import Image from 'next/image'

const AboutUs = () => {
    const image1 = "/heroimage.png"
    const image2="/heroimage.png"
 const image3= "/heroimage.png"
    return (
  <section className=" py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
        About Nayan
      </p>

      <h2 className="text-4xl font-semibold leading-tight mb-6">
        Shaping Modern Urban Environments
      </h2>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Nayan was established as a distinguished brand in the real estate sector...
        committed to meeting the needs of individuals and investors with full transparency and professionalism.
      </p>

      {/* Stats */}
      <div className="flex gap-12 mt-8">
        <div>
          <h3 className="text-3xl font-semibold">25k+</h3>
          <p className="text-sm text-gray-500">Trusted Customers</p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold">5k+</h3>
          <p className="text-sm text-gray-500">Successful Projects</p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold">20+</h3>
          <p className="text-sm text-gray-500">Years of Experience</p>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGES GRID */}
    {/* <div className="grid grid-cols-2 gap-4">
      <Image width={100} height={100} alt='' src={image1} className="rounded-lg object-cover h-48 w-full" />
      <Image width={100} height={100}  alt='' src={image2}  className="rounded-lg object-cover h-48 w-full col-span-2" />
      <Image width={100} height={100}  alt='' src={image3}  className="rounded-lg object-cover h-48 w-full col-span-2" />
    </div> */}
<div className="grid grid-cols-2 gap-4">

  {/* Image 1 */}
  <div className="relative h-48">
    <Image
      src={image1}
      alt="Interior 1"
      fill
      className="object-cover rounded-lg"
    />
  </div>

  {/* Image 2 */}
  <div className="relative h-48">
    <Image
      src={image2}
      alt="Interior 2"
      fill
      className="object-cover rounded-lg"
    />
  </div>

  {/* Image 3 Full Width */}
  <div className="relative h-60 col-span-2">
    <Image
      src={image3}
      alt="Interior 3"
      fill
      className="object-cover rounded-lg"
    />
  </div>

</div>
  </div>
</section>
  )
}

export default AboutUs
