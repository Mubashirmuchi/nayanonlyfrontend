export function OrganizationJsonLd({ locale }: { locale: string }) {
  const isArabic = locale === 'ar';

  const data = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nayan',
    url: `https://nayan.sa/${locale}`,
    logo: 'https://res.cloudinary.com/du8hedlvt/image/upload/v1771433276/aboutnayan_msfwqt.png',
    description: isArabic
      ? 'شركة نايان للتطوير العقاري في المملكة العربية السعودية.'
      : 'Nayan is a premium real estate development company in Saudi Arabia.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al Malqa',
      addressLocality: 'Riyadh',
      postalCode: '13525',
      addressCountry: 'SA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966561291512',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['English', 'Arabic'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
