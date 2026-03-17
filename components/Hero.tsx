import Image from 'next/image';
import BackgroundVideo from '@/components/HeroVideo';
import PrimaryButton from './PrimaryButton';
import { useTranslations } from 'next-intl';

export default function Hero({}) {
  const t = useTranslations('homePage.hero');
  const videoUrl = '/videos/0914.mp4';
  const imgUrl =
    'https://res.cloudinary.com/du8hedlvt/image/upload/v1771777554/heroimage_gctqtr.png';

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden"
      id="home"
    >
      {/* Image for mobile */}
      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          src={imgUrl || ''}
          alt={imgUrl}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Video for desktop */}
      <div className="hidden lg:block">
        <BackgroundVideo src={videoUrl || ''} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div
        className="
    absolute z-10
    bottom-6
    left-4
    right-4
    md:bottom-10
    lg:left-10
    lg:right-auto
    lg:bottom-16
    rtl:lg:left-auto
    rtl:lg:right-10
  "
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 max-w-sm text-white text-center lg:text-left rtl:lg:text-right">
          <p className="text-base md:text-lg font-medium mb-4">{t('title')}</p>

          <PrimaryButton href="/" text={t('cta')} />
        </div>
      </div>
    </section>
  );
}
