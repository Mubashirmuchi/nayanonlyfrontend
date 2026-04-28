import { useTranslations } from 'next-intl';
import Image from 'next/image';

const OurClients = () => {
  const t = useTranslations('homePage.clientsandpartners');

  return (
    <section className="bg-[#f5f5f0] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-block border border-gray-400 rounded-full px-4 py-1 text-xs tracking-wide text-gray-700 mb-6">
            {t('label')}{' '}
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            <span className="text-gray-900">{t('title.title_part1')} </span>
            <span className="text-gray-500">{t('title.title_part2')}</span>
            <br />
            <span className="text-gray-900">{t('title.title_part3')}</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            {t('description')}
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          {/* Top Left Color Block */}
          <div className="bg-[#666766] aspect-square"></div>

          {/* Top Right Image */}
          <div className="aspect-square overflow-hidden relative">
            <Image
              src="/frame.jpeg"
              alt="Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Large Image */}
          <div className="col-span-2 aspect-video overflow-hidden relative">
            <Image src="/frame.jpeg" alt="Building" fill className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
