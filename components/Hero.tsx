import Link from 'next/link';
import Image from 'next/image';
import BackgroundVideo from '@/components/HeroVideo';
import PrimaryButton from './PrimaryButton';

// interface Button {
//   id: string;
//   url: string;
//   text: string;
//   type: string;
//   newTab: boolean;
// }

// interface Picture {
//   url: string;
//   name: string;
//   alternativeText: string;
//   width: number;
//   height: number;
// }

// interface HeroProps {
//   data: {
//     id: string;
//     title: string;
//     description: string;
//     picture: Picture;
//     video: Picture;
//     buttons: Button;
//   };
// }

// { data }: HeroProps

export default function Hero() {
  const videoUrl = "https://res.cloudinary.com/du8hedlvt/video/upload/v1769080532/0914_dlisnj.mov"
  const imgUrl = "https://res.cloudinary.com/du8hedlvt/image/upload/v1771413108/hero_i2p0mh.png"

  return (
    <section
      // className="relative w-full min-h-screen flex items-center justify-center" id="home"
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
        className="absolute z-10 
                left-1/2 -translate-x-1/2 bottom-8 
                lg:left-10 lg:translate-x-0 lg:bottom-16 w-full px-4"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-sm text-white text-center lg:text-left">
          <p className="text-lg font-medium mb-4">{""}</p>

       <PrimaryButton />
        </div>
      </div>
    </section>
  );
}
