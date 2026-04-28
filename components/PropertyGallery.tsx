'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';

type Props = {
  images: string[];
  alt: string;
};

export default function PropertyGallery({ images, alt }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);

  const slides = images.map((src) => ({ src }));

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      {/* ── MOBILE layout ── */}
      <div className="md:hidden mb-10">
        {/* Big main image — shows whichever thumb is active */}
        <div
          className="relative w-full h-[280px] rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openAt(activeThumb)}
        >
          <Image
            src={images[activeThumb]}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {activeThumb + 1} / {images.length}
          </div>
          {/* tap hint */}
          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            Tap to expand
          </div>
        </div>

        {/* Horizontal thumbnail strip */}
        <div className="flex gap-2 mt-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveThumb(i)}
              className={`relative flex-shrink-0 w-[72px] h-[72px] rounded-md overflow-hidden border-2 transition-all ${
                activeThumb === i
                  ? 'border-[#C08E46] opacity-100'
                  : 'border-transparent opacity-60'
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
        <div
          className="relative md:col-span-2 h-[450px] cursor-pointer overflow-hidden rounded-lg group"
          onClick={() => openAt(0)}
        >
          <Image
            src={images[0]}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="grid gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="relative h-[215px] cursor-pointer overflow-hidden rounded-lg group"
              onClick={() => openAt(i)}
            >
              <Image
                src={images[i] ?? images[0]}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {i === 2 && images.length > 3 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    +{images.length - 3} photos
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Thumbnails, Zoom, Counter]}
        zoom={{ maxZoomPixelRatio: 3 }}
        thumbnails={{ position: 'bottom', width: 100, height: 65, gap: 8 }}
        counter={{ container: { style: { top: 16, left: 16 } } }}
        styles={{
          container: { backgroundColor: 'rgba(0,0,0,0.95)' },
        }}
      />
    </>
  );
}
