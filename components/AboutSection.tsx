import { useTranslations } from 'next-intl';
import Image from 'next/image';

import PrimaryButton from './PrimaryButton';

export default function About() {
  const imgUrl =
    'https://res.cloudinary.com/du8hedlvt/image/upload/v1771433276/aboutnayan_msfwqt.png';
  const t = useTranslations('homePage.about');
  return (
    <section className="relative w-full py-12 lg:py-20 bg-[#C08E4633] px-4 md:px-8 lg:px-12">
      <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
        {/* Background image */}
        <Image
          src={imgUrl || ''}
          alt={'about-section'}
          fill
          className="object-cover"
          priority
        />

        {/* Glass card */}
        <div
          className="
            absolute z-10
            left-4 right-4 bottom-6
            lg:left-auto lg:right-10
            lg:top-1/2 lg:-translate-y-1/2
            lg:w-full lg:max-w-xl
          "
        >
          <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 text-white">
            {/* Label */}
            <span className="inline-block text-[10px] lg:text-xs tracking-widest border border-white/40 px-3 py-1 rounded-full mb-3 lg:mb-4">
              {t('label')}
            </span>

            {/* Title */}
            <h2 className="text-2xl lg:text-4xl font-semibold mb-3 lg:mb-4">
              {t('title')}
            </h2>

            {/* Description */}
            <p className="text-white/80 text-sm lg:text-base mb-5 lg:mb-6 leading-relaxed">
              {t('description')}
            </p>

            {/* Button */}
            {/* <IconBuildingSkyscraper/> */}
            {/* <IconBriefcase/> */}
            {/* <IconSettingsPin/> */}
            {/* <IconFileLike/> */}
            <PrimaryButton href="/" text={t('cta')} />
          </div>
        </div>
      </div>
    </section>
  );
}
