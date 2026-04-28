import Image from 'next/image';
import Link from 'next/link';

type LocalizedField = {
  en: string;
  ar: string;
};

type Property = {
  id: number;
  slug: string;
  title: LocalizedField;
  description: LocalizedField;
  location: LocalizedField;
  status: LocalizedField;
  area: string;
  image: string;
};

type Props = {
  property: Property;
  locale: 'en' | 'ar';
};

const PropertyPageCard = ({ property, locale }: Props) => {
  return (
    <Link href={`/properties/${property.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={property.image || '/nayan31.webp'}
            alt={property.title[locale]}
            fill
            className="object-cover  transition-transform duration-500 hover:scale-105"
          />

          {/* Status Badge */}
          <span className="absolute top-4 right-4 bg-white/90 text-xs px-3 py-1 rounded-full font-medium">
            {property.status[locale]}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 h-[146px]">
          {/* Title + Area */}
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-semibold leading-snug">
              {property.title[locale]}
            </h3>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {property.area}
            </span>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-500 mb-1">
            {property.location?.[locale]}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {property.description[locale]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyPageCard;
