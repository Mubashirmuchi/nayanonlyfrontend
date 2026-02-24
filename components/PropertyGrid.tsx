'use client';
import clsx from 'clsx';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { properties } from '@/data/properties';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';

type FilterType = {
  title: string;
  value: string
}


export default function PropertiesPage() {

  const t = useTranslations('propertyPage');

  const filters = t.raw('filters') as FilterType[];
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? properties
      : properties.filter((item) => item.category.toLowerCase() === active);


  return (
    <section className="bg-[#f4f1ec] pb-20">
      <div className="bg-[#f4f1ec] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter, i) => (
              <Button
                onClick={() => setActive(filter.value)}
                key={i}
                className={clsx(
                  'px-5 py-2 rounded-full text-sm border duration-300 bg-white hover:bg-[#c69c5d] hover:text-white transition',
                  active === filter.value
                    ? 'bg-[#c69c5d] text-white border-[#c69c5d]'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-[#c69c5d] hover:text-white'
                )}
              >
                {filter.title}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {filtered.map((item, i) => (
          <Link key={item.id}
           href={`/properties/${item.slug}`}
           >
            <div
              key={i}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-70">
                <Image
                  src="/frame.jpeg"
                  alt="Property"
                  fill
                  className="object-cover"
                />

                {/* Status Badge */}
                <span className="absolute top-4 right-4 bg-white/90 text-xs px-3 py-1 rounded-full">
                  Completed
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">AlmaIqa Center</h3>
                  <span className="text-sm text-gray-500">18041.610 m²</span>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  40 Offices | 45 Showroom | 123 Street, Riyadh, Saudi
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  A modern commercial centre with well-designed office and
                  retail spaces in a strategic location.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
