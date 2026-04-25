export const properties1 = [
  {
    id: 1,
    slug: 'almalqa-center',
    title: { en: 'Almalqa Center', ar: 'مركز الملقا' },
    status: { en: 'For Rent', ar: 'للإيجار' },
    category: 'Offices',
    area: '18041.610 m²',
    location: {
      en: 'Riyadh, Saudi Arabia',
      ar: 'الرياض، المملكة العربية السعودية',
    },
    coordinates: { lat: 24.774265, lng: 46.738586 },
    gallery: ['/image3.jpeg', '/image3.jpeg', '/image3.jpeg'],
    description: {
      en: 'Modern commercial center offering premium office and showroom spaces in a strategic location.',
      ar: 'مركز تجاري حديث يوفر مساحات مكتبية ومعارض بمواصفات عالية في موقع استراتيجي.',
    },
    overview: {
      en: [
        'Prime location',
        'High-quality construction',
        'Flexible layouts',
        'Investment-ready',
      ],
      ar: [
        'موقع استراتيجي',
        'جودة بناء عالية',
        'تصاميم مرنة',
        'فرصة استثمارية',
      ],
    },
    specifications: {
      propertyType: { en: 'Commercial Center', ar: 'مركز تجاري' },
      totalUnits: '40 Offices | 45 Showrooms',
      parkingSpaces: 120,
      completionYear: 2023,
    },
    amenities: {
      en: ['Security', 'Parking', 'Elevator', 'CCTV'],
      ar: ['أمن', 'مواقف سيارات', 'مصاعد', 'كاميرات مراقبة'],
    },
    investmentInfo: {
      en: 'Strategically located for high rental yield.',
      ar: 'موقع استراتيجي يحقق عوائد إيجارية مرتفعة.',
    },
    developer: 'NAYAN Real Estate',
    image: '/malqa-center.JPG',
  },

  // {
  //   id: 2,
  //   slug: 'riyadh-garden-residences',
  //   title: { en: 'Riyadh Garden Residences', ar: 'حدائق الرياض السكنية' },
  //   status: { en: 'Completed', ar: 'مكتمل' },
  //   category: 'Apartments',
  //   area: '9500 m²',
  //   location: { en: 'Al Narjis, Riyadh', ar: 'حي النرجس، الرياض' },
  //   coordinates: { lat: 24.8, lng: 46.7 },
  //   gallery: ['/image3.jpeg', '/image3.jpeg'],
  //   description: {
  //     en: 'Luxury apartments designed for modern urban living.',
  //     ar: 'شقق فاخرة مصممة للحياة الحضرية العصرية.',
  //   },
  //   overview: {
  //     en: ['Modern design', 'Family-friendly', 'Premium finishes'],
  //     ar: ['تصميم عصري', 'مناسب للعائلات', 'تشطيبات فاخرة'],
  //   },
  //   specifications: {
  //     propertyType: { en: 'Residential Apartments', ar: 'شقق سكنية' },
  //     totalUnits: '120 Units',
  //     parkingSpaces: 200,
  //     completionYear: 2022,
  //   },
  //   amenities: {
  //     en: ['Gym', 'Pool', 'Security', 'Parking'],
  //     ar: ['نادي رياضي', 'مسبح', 'أمن', 'مواقف سيارات'],
  //   },
  //   investmentInfo: {
  //     en: 'High demand residential area.',
  //     ar: 'منطقة سكنية ذات طلب مرتفع.',
  //   },
  //   developer: 'NAYAN Real Estate',
  //   image: '/image3.jpeg',
  // },

  // {
  //   id: 3,
  //   slug: "nayan-31",
  //   title: { en: "Nayan 31", ar: "نايان ٣١" },
  //   status: { en: "For Sale", ar: "للبيع" },
  //   category: "Villa",
  //   area: "1200 m²",
  //   location: { en: "Al Malqa, Riyadh", ar: "حي الملقا، الرياض" },
  //   coordinates: { lat: 24.820000, lng: 46.680000 },
  //   gallery: ["https://res.cloudinary.com/du8hedlvt/image/upload/v1772115442/WhatsApp_Image_2026-02-26_at_15.13.05_aaw4iq.jpg"],
  //   description: {
  //     en: "Contemporary duplex homes with spacious layouts.",
  //     ar: "منازل دوبلكس عصرية بتصاميم واسعة.",
  //   },
  //   overview: {
  //     en: ["Spacious", "Modern architecture"],
  //     ar: ["مساحات واسعة", "تصميم معماري عصري"],
  //   },
  //   specifications: {
  //     propertyType: { en: "Duplex Villa", ar: "فيلا دوبلكس" },
  //     totalUnits: "20 Units",
  //     parkingSpaces: 40,
  //     completionYear: 2024,
  //   },
  //   amenities: {
  //     en: ["Private Garden", "Parking", "Security"],
  //     ar: ["حديقة خاصة", "مواقف", "أمن"],
  //   },
  //   investmentInfo: {
  //     en: "Perfect for families.",
  //     ar: "مثالي للعائلات.",
  //   },
  //   developer: "NAYAN Real Estate",
  //   image: "https://res.cloudinary.com/du8hedlvt/image/upload/v1772115442/WhatsApp_Image_2026-02-26_at_15.13.05_aaw4iq.jpg",
  // },

  // {
  //   id: 4,
  //   slug: 'jeddah-seaside-resort',
  //   title: { en: 'Jeddah Seaside Resort', ar: 'منتجع جدة الساحلي' },
  //   status: { en: 'Under Construction', ar: 'قيد الإنشاء' },
  //   category: 'Resort',
  //   area: '15000 m²',
  //   location: { en: 'Jeddah Waterfront', ar: 'واجهة جدة البحرية' },
  //   coordinates: { lat: 21.543333, lng: 39.172779 },
  //   gallery: ['/image3.jpeg'],
  //   description: {
  //     en: 'Luxury seaside resort with world-class facilities.',
  //     ar: 'منتجع ساحلي فاخر بمرافق عالمية.',
  //   },
  //   overview: {
  //     en: ['Seaside view', 'Premium facilities'],
  //     ar: ['إطلالة بحرية', 'مرافق فاخرة'],
  //   },
  //   specifications: {
  //     propertyType: { en: 'Resort Development', ar: 'منتجع سياحي' },
  //     totalUnits: '60 Villas',
  //     parkingSpaces: 150,
  //     completionYear: 2026,
  //   },
  //   amenities: {
  //     en: ['Beach Access', 'Pool', 'Spa'],
  //     ar: ['وصول مباشر للشاطئ', 'مسبح', 'سبا'],
  //   },
  //   investmentInfo: {
  //     en: 'Tourism investment opportunity.',
  //     ar: 'فرصة استثمارية سياحية.',
  //   },
  //   developer: 'NAYAN Real Estate',
  //   image: '/image3.jpeg',
  // },

  {
    id: 3,
    slug: 'nayan-32',
    title: { en: 'Nayan 32', ar: 'نايان ٣٢' },
    status: { en: 'For Sale', ar: 'للبيع' },
    category: 'Flat',
    area: '1200 m²',
    location: { en: 'Al Araid, Riyadh', ar: 'النرجس' },
    coordinates: { lat: 24.82, lng: 46.68 },
    gallery: ['/nayan31.jpeg', '/nayan32n.png'],
    description: {
      en: 'Contemporary duplex flats with spacious layouts.',
      ar: 'منازل دوبلكس عصرية بتصاميم واسعة.',
    },
    overview: {
      en: ['Spacious', 'Modern architecture'],
      ar: ['مساحات واسعة', 'تصميم معماري عصري'],
    },
    specifications: {
      //
      propertyType: { en: 'Flat', ar: 'فيلا دوبلكس' },
      totalUnits: '20 Units',
      parkingSpaces: 40,
      completionYear: 2024,
    },
    amenities: {
      en: ['Private Garden', 'Parking', 'Security'],
      ar: ['حديقة خاصة', 'مواقف', 'أمن'],
    },
    investmentInfo: {
      en: 'Perfect for families.',
      ar: 'مثالي للعائلات.',
    },
    developer: 'NAYAN Real Estate',
    image: '/nayan31.jpeg',
  },
  {
    id: 4,
    slug: 'nayan-32',
    title: { en: 'Nayan 32', ar: 'نايان ٣٢' },
    status: { en: 'For Sale', ar: 'للبيع' },
    category: 'Flat',
    area: '1200 m²',
    location: { en: 'Al Araid, Riyadh', ar: 'النرجس' },
    coordinates: { lat: 24.82, lng: 46.68 },
    gallery: ['/nayan31.jpeg', '/nayan32n.png'],
    description: {
      en: 'Contemporary duplex flats with spacious layouts.',
      ar: 'منازل دوبلكس عصرية بتصاميم واسعة.',
    },
    overview: {
      en: ['Spacious', 'Modern architecture'],
      ar: ['مساحات واسعة', 'تصميم معماري عصري'],
    },
    specifications: {
      //
      propertyType: { en: 'Flat', ar: 'فيلا دوبلكس' },
      totalUnits: '20 Units',
      parkingSpaces: 40,
      completionYear: 2024,
    },
    amenities: {
      en: ['Private Garden', 'Parking', 'Security'],
      ar: ['حديقة خاصة', 'مواقف', 'أمن'],
    },
    investmentInfo: {
      en: 'Perfect for families.',
      ar: 'مثالي للعائلات.',
    },
    developer: 'NAYAN Real Estate',
    image: '/nayan31.jpeg',
  },
];

export const categories = [
  'All',
  'Apartments',
  'Villas',
  'Duplex',
  'Offices',
  'Land',
];
