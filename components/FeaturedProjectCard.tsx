import { IconMapPin } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

interface PropertyCardProps {
  title: string;
  area: string;
  features: string;
  location?: string;
  image?: string;
  status?: string;
  href?: string;
}

export default function PropertyCard({
  title,
  area,
  features,
  location,
  image,
  status,
  href = '#',
}: PropertyCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden bg-black">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
            fill
            src={image || '/nayan31.webp'}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

        {/* Status Badge */}
        {status && (
          <span className="absolute top-5 right-5 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-medium text-gray-800">
            {status}
          </span>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Bottom Content */}
      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 text-white">
        {/* Title + Area */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg sm:text-xl font-semibold leading-snug">
            {title}
          </h3>

          <span className="text-sm sm:text-base opacity-90 whitespace-nowrap">
            {area}
          </span>
        </div>

        {/* Features */}
        <div className="text-sm opacity-85 mb-2 leading-relaxed">
          {features}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-xs sm:text-sm opacity-80">
          <IconMapPin size={14} />
          {location}
        </div>
      </div>
    </Link>
  );
}
