import {
  IconBulb,
  IconCirclesRelation,
  IconRecycle,
  IconUserStar,
} from "@tabler/icons-react";

import {
    BadgeCheck,Handshake
} from 'lucide-react'


const values = [
  {
    icon: IconBulb,
    title: "Innovation",
    description:
      "Modern real estate solutions shaped by evolving market needs",
  },
  {
    icon: IconCirclesRelation,
    title: "Transparency",
    description:
      "Clear, credible, and honest engagement at every stage",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    description:
      "High standards across design, construction, and execution",
  },
  {
    icon: Handshake,
    title: "Dedication",
    description:
      "Every project handled with care, commitment, and responsibility",
  },
  {
    icon: IconRecycle,
    title: "Sustainability",
    description:
      "Responsible development that supports long-term urban growth",
  },
  {
    icon: IconUserStar,
    title: "Client First",
    description:
      "Customer satisfaction placed at the center of every decision",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-[#f5f5f0] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 text-center">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div key={index} className="flex flex-col items-center">

                {/* Icon */}
                <div className="mb-5 text-gray-900">
                  <Icon size={42}  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}