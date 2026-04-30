'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslations } from 'next-intl';

interface Testimonial {
  authorName: string;
  authorRole: string;
  authorDesc: string;
  image: string;
}

function TestimonialCard({
  authorRole,
  authorName,
  authorDesc,
  image,
}: Testimonial) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="md:w-2/5 relative min-h-62.5 md:min-h-full">
          <Image
            src={image}
            alt={'Testimonial image'}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          {/* Quote Icon */}
          <div className="mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="text-gray-300"
            >
              <path
                d="M10 28C10 24.6863 12.6863 22 16 22V18C10.4772 18 6 22.4772 6 28V34C6 37.3137 8.68629 40 12 40H18C21.3137 40 24 37.3137 24 34V28C24 24.6863 21.3137 22 18 22H16C16 19.7909 17.7909 18 20 18V14C15.5817 14 12 17.5817 12 22H10V28ZM32 28C32 24.6863 34.6863 22 38 22V18C32.4772 18 28 22.4772 28 28V34C28 37.3137 30.6863 40 34 40H40C43.3137 40 46 37.3137 46 34V28C46 24.6863 43.3137 22 40 22H38C38 19.7909 39.7909 18 42 18V14C37.5817 14 34 17.5817 34 22H32V28Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            {authorDesc}
          </p>

          {/* Author Info */}
          <div>
            <h4 className="text-gray-900 font-semibold text-lg mb-1">
              {authorName}
            </h4>
            <p className="text-gray-500 text-sm">{authorRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSwiper() {
  const t = useTranslations('homePage.testimonial');
  const data = t.raw('testimonials');

  return (
    <section className={`relative md:py-24 py-16 `}>
      <div className="container mx-auto px-4">
        <div className="container mx-auto py-4 space-y-2 text-center">
          <p className="px-4 p-2 text-sm border w-fit mx-auto border-neutral-300 rounded-full">
            {t('label')}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-center">
            <span className="text-black">{t('title.main1')} </span>
            <span className="text-gray-400">{t('title.highlight1')}</span>
            <br />
            <span className="text-gray-400">{t('title.highlight2')} </span>
            <span className="text-black">{t('title.main2')}</span>
          </h2>
        </div>

        <div className="mt-8 max-w-6xl mx-auto ">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-gray-400',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper pb-12"
          >
            {data.map((testimonial: Testimonial, index: number) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
