import Image from "next/image";

const RealEstateSection = () => {
    const projects = [
        {
            id: 1,
            title: 'Nayan 30',
            label: 'MOST LOVED ONE',
            date: 'Nov 17, 2026',
            location: 'Saudi',
            image: '/heroimage.webp',
            size: 'large', // First one is large
        },
        {
            id: 2,
            title: 'Qatar Villa Flora Building',
            label: 'MOST LOVED ONE',
            date: 'Nov 17, 2026',
            location: 'Qatar',
            image: '/image3.webp',
            size: 'small', // Second one is small
        },
        {
            id: 3,
            title: 'Nayan 30',
            label: 'MOST LOVED ONE',
            date: 'Nov 17, 2026',
            location: 'Saudi',
            image: '/frame.webp',
            size: 'large', // Third one is large
        },
        {
            id: 4,
            title: 'Qatar Villa Flora Building',
            label: 'MOST LOVED ONE',
            date: 'Nov 17, 2026',
            location: 'Qatar',
            image: '/frame.webp',
            size: 'small', // Fourth one is small
        },
    ];

    return (
      <section className="bg-[#f5f5f0] py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-8">

      {/* Title */}
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          <span className="text-gray-900">
            A Trusted Name in{" "}
          </span>
          <span className="text-gray-500">
            Real Estate Development
          </span>
        </h2>
      </div>

      {/* Stats */}
      <div className="flex gap-8 lg:gap-12 flex-wrap">
        {[
          { value: "25k+", label: "Trusted Customers" },
          { value: "5k+", label: "Successful Projects" },
          { value: "20+", label: "Years of Experience" },
        ].map((item, index) => (
          <div key={index} className="min-w-[90px]">
            <div className="text-2xl sm:text-3xl font-semibold text-gray-900">
              {item.value}
            </div>
            <div className="text-xs text-gray-600 mt-1 uppercase tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project, index) => {
        const isLarge = index % 2 === 0;

        return (
          <div
            key={project.id}
            className={`group cursor-pointer ${
              isLarge ? "sm:row-span-2" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`relative overflow-hidden mb-4 bg-gray-200 ${
                isLarge ? "aspect-[4/5]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={500}
                height={500}
              />
            </div>

            {/* Info */}
            <div>
              <div className="text-[11px] font-medium text-gray-500 tracking-wider mb-1 uppercase">
                {project.label}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-snug">
                {project.title}
              </h3>
              <div className="text-xs text-gray-500">
                {project.date} · {project.location}
              </div>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</section>
    );
};

export default RealEstateSection;
