import { notFound } from 'next/navigation';
import { properties1 } from '@/data/properties';
import Link from 'next/link';
import Image from 'next/image';
import { PageWrapper } from '@/components/PageWrapper';
import PropertyGallery from '@/components/PropertyGallery';
import ContactForm from '@/components/ContactFormInDetail';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, locale } = await params;
  const property = properties1.find((item) => item.slug === slug);
  if (!property) return {};

  const l = locale as 'en' | 'ar';
  const title = property.title[l];
  const description = property.description[l];
  const image = property.image || (property.gallery?.[0] ?? '/nayan20.jpg');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export async function generateStaticParams() {
  const locales = ['en', 'ar'];
  return properties1.flatMap((property) =>
    locales.map((locale) => ({ locale, slug: property.slug }))
  );
}

type Params = {
  params: {
    slug: string;
    locale: string;
  };
};

export default async function PropertyDetail({ params }: Params) {
  const { slug, locale } = await params;
  const currentLocale = locale as 'en' | 'ar';
  const property = properties1.find((item) => item.slug === slug);
  if (!property) notFound();
  const isArabic = currentLocale === 'ar';

  // Build your image array — replace with real images from property data
  const images = property.gallery || [
    '/nayan20.jpg',
    '/image3.webp',
    '/image3.webp',
  ];

  return (
    <PageWrapper>
      <main dir={isArabic ? 'rtl' : 'ltr'}>
        <section className="bg-[#f4f1ec] py-20 pt-32 px-6">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/${locale}`}
              className="text-sm text-gray-500 mb-8 inline-block hover:underline"
            >
              {isArabic ? 'العودة' : '← Back'}
            </Link>

            {/* ===== GALLERY — client component ===== */}
            <PropertyGallery
              images={images}
              alt={property.title[currentLocale]}
            />

            {/* ================= TITLE SECTION ================= */}
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                  {property.title[currentLocale]}
                </h1>

                <p className="text-gray-500 mb-4">
                  {property.location?.[currentLocale]}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {property.description[currentLocale]}
                </p>
              </div>

              {/* Overview */}
              <div>
                <h3 className="font-semibold text-lg mb-6">
                  {isArabic ? 'نظرة عامة' : 'Property Overview'}
                </h3>

                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• {isArabic ? 'موقع استراتيجي' : 'Prime location'}</li>
                  <li>
                    •{' '}
                    {isArabic ? 'جودة بناء عالية' : 'High-quality construction'}
                  </li>
                  <li>
                    • {isArabic ? 'فرصة استثمارية' : 'Investment opportunity'}
                  </li>
                  <li>• {isArabic ? 'تصميم عصري' : 'Modern design'}</li>
                </ul>
              </div>
            </div>

            {/* ================= SPECIFICATIONS ================= */}
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <h3 className="font-semibold text-lg mb-6">
                  {isArabic ? 'المواصفات' : 'Specifications'}
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span>{isArabic ? 'نوع العقار' : 'Property Type'}</span>
                    <span>{property.category}</span>
                  </div>

                  <div className="flex justify-between border-b pb-2">
                    <span>{isArabic ? 'الحالة' : 'Status'}</span>
                    <span>{property.status[currentLocale]}</span>
                  </div>

                  <div className="flex justify-between border-b pb-2">
                    <span>{isArabic ? 'المساحة' : 'Built-up Area'}</span>
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="font-semibold text-lg mb-6">
                  {isArabic ? 'المرافق' : 'Amenities & Facilities'}
                </h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  {(isArabic
                    ? ['أمن', 'مواقف سيارات', 'مصعد', 'صالة رياضية']
                    : ['Security', 'Parking', 'Elevator', 'CCTV']
                  ).map((item) => (
                    <div
                      key={item}
                      className="border p-4 rounded-md text-center bg-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= MAP ================= */}
            <div className="mb-20">
              <h3 className="font-semibold text-lg mb-6">
                {isArabic ? 'الموقع' : 'Location'}
              </h3>

              <div className="h-[350px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* ================= CONTACT ================= */}
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  {isArabic
                    ? 'ابدأ رحلتك معنا'
                    : 'Begin your journey with NAYAN'}
                </h2>
                <ContactForm
                  isArabic={isArabic}
                  propertyTitle={property.title[currentLocale]}
                />
              </div>

              {/* Contact section image — hide on mobile */}
              <div className="relative h-[400px] hidden md:block">
                <Image
                  src={property.image || '/nayan31.webp'}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
