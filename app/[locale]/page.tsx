import About from '@/components/AboutSection';
import ConnectUs from '@/components/ConnectUs';
import FeaturedProjects from '@/components/FeaturedProjects';
import Hero from '@/components/Hero';
import CoreValuesSection from '@/components/Innovation';
import OurClients from '@/components/OurClients';
import { PageWrapper } from '@/components/PageWrapper';
import ServicesBlock from '@/components/Services';
import TestimonialsSwiper from '@/components/Testimonials';
import RealEstateSection from '@/components/TrustedSecton';
import WhyChooseUS from '@/components/WhyChooseUs';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { properties1, categories } from '@/data/properties';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const isArabic = locale === 'ar';

  const title = isArabic
    ? 'نايان | عقارات فاخرة في المملكة العربية السعودية'
    : 'Nayan | Luxury Real Estate in Saudi Arabia';

  const description = isArabic
    ? 'اكتشف مشاريع عقارية راقية مصممة للحياة العصرية. استثمر مع نايان في أفضل العقارات في المملكة العربية السعودية.'
    : 'Discover timeless developments crafted for refined modern living. Explore Nayan’s premium real estate projects and investment opportunities in Saudi Arabia.';

  const url = `https://nayan.sa/${locale}`;
  const ogImage = '/aboutnayan_msfwqt.webp';

  return {
    title,
    description,
    keywords: isArabic
      ? [
          'نايان',
          'عقارات السعودية',
          'عقارات فاخرة',
          'عقارات الرياض',
          'الاستثمار العقاري',
        ]
      : [
          'Nayan',
          'real estate Saudi Arabia',
          'luxury properties',
          'Riyadh real estate',
          'investment properties',
        ],

    alternates: {
      canonical: url,
      languages: {
        en: 'https://nayan.sa/en',
        ar: 'https://nayan.sa/ar',
      },
    },

    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Nayan Real Estate',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,
    },

    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <ServicesBlock />
      <FeaturedProjects categories={categories} properties={properties1} />
      <OurClients />
      <CoreValuesSection />
      <RealEstateSection />
      <WhyChooseUS />
      <TestimonialsSwiper />
      <ConnectUs />
    </PageWrapper>
  );
}
