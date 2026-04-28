'use client';
import clsx from 'clsx';

import { useState } from 'react';

import { Button } from './ui/button';
import { useLocale, useTranslations } from 'next-intl';
import PropertyPageCard from './PropertyPageCard';
import { type Property } from '@/data/properties';

type FilterType = {
  title: string;
  value: string;
};

type FeaturedProjectsProps = {
  properties: Property[];
};
export default function PropertiesPage({ properties }: FeaturedProjectsProps) {
  const t = useTranslations('propertyPage');

  const locale = useLocale();
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
                    ? ' bg-[#935b40] text-white border-[#c69c5d]'
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
        {filtered.map((property) => (
          <PropertyPageCard
            key={property.id}
            property={property}
            locale={locale as 'en' | 'ar'}
          />
        ))}
      </div>
    </section>
  );
}
