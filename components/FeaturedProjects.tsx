'use client';
import { useTranslations } from 'next-intl';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import PropertyCard from './FeaturedProjectCard';
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
type LocalizedField = {
  en: string;
  ar: string;
};

type Property = {
  id: number;
  slug: string;
  title: LocalizedField;
  location: LocalizedField;
  status: LocalizedField;
  description: LocalizedField;
  image: string;
  area: string;
  category: string;
};

type FeaturedProjectsProps = {
  properties: Property[];
  categories: string[];
};
const FeaturedProjects = ({
  properties,
  categories,
}: FeaturedProjectsProps) => {
  const t = useTranslations('homePage.featuredProjects');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState(categories[0]);

  const filteredProperties =
    activeFilter === categories[0]
      ? properties
      : properties.filter((p) => p.category === activeFilter);

  return (
    <section className={`py-16 md:py-24 bg-[#f1efef]`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block border border-gray-400 rounded-full px-4 py-1 text-sm tracking-wide mb-4">
            {t('label')}
          </div>

          <h2 className="text-3xl md:text-4xl max-w-lg font-semibold mb-4 mx-auto">
            {t('title')}
          </h2>

          <p className="text-gray-600 max-w-lg m-auto">{t('description')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"></div>{' '}
        <section className=" py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Top Bar */}

            <div className="flex w-full items-center justify-between mb-10">
              {/* Desktop Filters */}
              <div className="hidden sm:flex flex-wrap gap-3">
                {categories.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 rounded-full text-sm transition
        ${
          activeFilter === filter
            ? 'bg-[#935b40] text-white'
            : 'bg-[#666766] text-white hover:bg-white/60 hover:text-black'
        }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Mobile Row */}
              <div className="flex w-full sm:hidden items-center justify-between gap-3">
                {/* Select */}
                <Select>
                  <SelectTrigger className="w-68.25">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories.map((filter, index) => (
                        <SelectItem
                          key={index}
                          value={filter}
                          onClick={() => setActiveFilter(filter)}
                        >
                          {filter}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* View All */}
                <Link
                  href="/properties"
                  className="flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                >
                  View All <IconArrowRight size={16} />
                </Link>
              </div>

              {/* Desktop View All */}
              <Link
                href="/properties"
                className="hidden sm:flex items-center gap-2 text-sm font-medium hover:underline"
              >
                View All <IconArrowRight size={16} />
              </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.length === 0 ? (
                <p className="text-center text-gray-500 col-span-full h-32 flex items-center justify-center">
                  No properties found for this category.
                </p>
              ) : (
                filteredProperties.map((property) => (
                  <PropertyCard
                    href={`/properties/${property.slug}`}
                    key={property.id}
                    image={property.image}
                    title={property.title[locale as 'en' | 'ar']}
                    features={property.description[locale as 'en' | 'ar']}
                    location={property.location?.[locale as 'en' | 'ar']}
                    status={property.status[locale as 'en' | 'ar']}
                    area={property.area}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FeaturedProjects;
