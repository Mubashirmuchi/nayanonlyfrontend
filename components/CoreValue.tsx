import React from 'react';

const CoreValue = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <p className="uppercase text-sm text-gray-500 tracking-widest mb-4">
            Our Core Values
          </p>

          <h2 className="text-4xl font-semibold mb-6">
            Principles That Guide Every Decision
          </h2>

          <p className="text-gray-600">
            At Nayan we ensure that guide our planning, execution, and
            partnerships throughout every stage of development.
          </p>
        </div>

        {/* RIGHT VALUES */}
  

        <div className="space-y-4">
          {[
            'Innovation',
            'Transparency',
            'Quality',
            'Dedication',
            'Sustainability',
            'Client First',
          ].map((value, i) => (
            <div
              key={i}
              className="relative bg-gray-100 p-5 rounded-md overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#c69c5d]/10 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />

              <div className="flex items-center justify-between relative z-10">
                <span className="text-gray-400 font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col">
 <span className="font-medium">{value}</span>
 <p className='font-light text-gray-500'>Modern real estate solutions shaped by evolving market needs</p>
                </div>
               
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
