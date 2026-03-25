import { useTranslations } from 'next-intl';
import {
  IconBuildingSkyscraper,
  IconBriefcase,
  IconSettingsPin,
  IconFileLike,
} from '@tabler/icons-react';

export interface Service {
  id: string;
  count: string;
  title: string;
  description: string;
  icon: string;
}

export default function ServiceBlock() {
  const t = useTranslations('homePage.service');
  const services = t.raw('services') as Service[];
  const iconMap = {
    IconBuildingSkyscraper,
    IconBriefcase,
    IconSettingsPin,
    IconFileLike,
  };

  return (
    <section
      id="services"
      className={`bg-[#f1efef] py-16 md:py-24 flex flex-col gap-10  md:gap-18 `}
    >
      {/* Header */}
      <div className="container mx-auto px-4 text-center max-w-2xl ">
        <div className="inline-block border border-gray-400 rounded-full px-4 py-1 text-sm tracking-wide mb-4">
          {t('label')}
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {t('title')}
        </h2>

        <p className="text-gray-600 max-w-lg mx-auto">{t('description')}</p>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#935b40] flex items-center justify-center mb-4">
                {Icon && <Icon size={28} color="white" />}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm max-w-xs">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
