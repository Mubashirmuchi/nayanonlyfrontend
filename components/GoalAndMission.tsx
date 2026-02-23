import React from 'react'

const GoalAndMission = () => {
  return (
<section className=" pb-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

    {[
      {
        title: "Our Goal",
        desc: "To build integrated urban communities that enhance quality of life..."
      },
      {
        title: "Our Mission",
        desc: "To develop integrated real estate projects..."
      },
      {
        title: "Our Vision",
        desc: "To be the first choice in real estate development..."
      }
    ].map((item, i) => (
      <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}

  </div>
</section>
  )
}

export default GoalAndMission
