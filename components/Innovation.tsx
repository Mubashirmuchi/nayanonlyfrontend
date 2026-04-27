import {
  IconBulb,
  IconCirclesRelation,
  IconRecycle,
  IconUserStar,
} from '@tabler/icons-react';

import { BadgeCheck, Handshake } from 'lucide-react';
import { Service } from './Services';
import { useTranslations } from 'next-intl';

export default function CoreValuesSection() {
  const t = useTranslations('homePage.clientsandpartners');
  const values = t.raw('values') as Service[];
  const iconMap = {
    IconBulb,
    IconCirclesRelation,
    BadgeCheck,
    Handshake,
    IconRecycle,
    IconUserStar,
  };

  return (
    <section className="bg-[#f5f5f0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 text-center">
          {values.map((value, index) => {
            const Icon =
              iconMap[value.icon as keyof typeof iconMap] || IconBulb;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-5 text-gray-900">
                  {Icon && <Icon size={42} />}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>

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
