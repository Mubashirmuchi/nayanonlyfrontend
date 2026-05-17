type LocalizedField = { en: string; ar: string };

export type Property = {
  id: number;
  slug: string;
  title: LocalizedField;
  status: LocalizedField;
  description: LocalizedField;
  category: string;
  area: string;
  location?: LocalizedField;
  coordinates?: { lat: number; lng: number };
  gallery?: string[];
  overview?: { en: string[]; ar: string[] };
  specifications?: Record<string, unknown>;
  amenities?: { en: string[]; ar: string[] };
  investmentInfo?: LocalizedField;
  developer?: string;
  image?: string;
};

export const properties1: Property[] = [
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
    gallery: [
      '/DJI_20250917172433_0056_D.JPG',
      '/DJI_20250917173941_0065_D.JPG',
      '/DJI_20250917172433_0056_D.JPG',
    ],
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
    image: '/malqa-center.webp',
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
  //   gallery: ['/image3.webp', '/image3.webp'],
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
  //   image: '/image3.webp',
  // },

  // {
  //   id: 3,
  //   slug: "nayan-31",
  //   title: { en: "Nayan 31", ar: "نيــــان ٣١" },
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
  //   gallery: ['/image3.webp'],
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
  //   image: '/image3.webp',
  // },

  {
    id: 5,
    slug: 'nayan-20',
    title: { en: 'Nayan 20', ar: 'نيــــان 20' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-137 m²',
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض' },
    coordinates: { lat: 24.8, lng: 46.7 },
    specifications: { totalUnits: '29 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    gallery: ['/nayan20.jpg', '/image3.webp', '/image3.webp'],
    image: '/nayan20.jpg',
  },

  {
    id: 6,
    slug: 'nayan-21',
    title: { en: 'Nayan 21', ar: 'نيــــان 21' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-137 m²',
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض' },
    coordinates: { lat: 24.8, lng: 46.7 },
    specifications: { totalUnits: '26 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    gallery: ['/nayan21.jpg', '/nayaan21.jpeg', '/nayan21.jpg'],
    image: '/nayan21.jpg',
  },

  {
    id: 7,
    slug: 'nayan-townhouse-22',
    title: { en: 'Nayan Town House 22', ar: 'نيــــان تاون هاوس 22' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Townhouse',
    area: '350-190 m²',
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض' },
    coordinates: { lat: 24.8, lng: 46.7 },
    specifications: { totalUnits: '9 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan22.jpg',
    gallery: ['/nayan22.jpg', '/nayan22.jpg', '/contactpage_n284nq.webp'],
  },

  {
    id: 8,
    slug: 'nayan-23',
    title: { en: 'Nayan 23', ar: 'نيــــان 23' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-200 m²',
    specifications: { totalUnits: '24 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan23.jpg',
    gallery: ['/aboutnayan_msfwqt.webp', '/testimonial2.jpg', '/nayan23.jpg'],
  },

  {
    id: 9,
    slug: 'nayan-24',
    title: { en: 'Nayan 24', ar: 'نيــــان 24' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-190 m²',
    specifications: { totalUnits: '17 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan24.jpg',
  },

  {
    id: 10,
    slug: 'nayan-25',
    title: { en: 'Nayan 25', ar: 'نيــــان 25' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-190 m²',
    specifications: { totalUnits: '27 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan25.jpg',
    gallery: ['/nayan25.jpg', '/nayan25.jpg', '/nayan25.jpg'],
  },

  {
    id: 11,
    slug: 'nayan-26',
    title: { en: 'Nayan 26', ar: 'نيــــان 26' },
    status: { en: 'For Rent', ar: 'للإيجار' },
    category: 'Residential',
    area: '94-90 m²',
    specifications: { totalUnits: '27 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan26.jpg',
  },

  {
    id: 12,
    slug: 'nayan-27',
    title: { en: 'Nayan 27', ar: 'نيــــان 27' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '450-163 m²',
    specifications: { totalUnits: '9 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan27.jpg',
    gallery: ['/aboutnayan_msfwqt.webp', '/testimonial2.jpg', '/nayan23.jpg'],
  },

  {
    id: 13,
    slug: 'nayan-28',
    title: { en: 'Nayan 28', ar: 'نيــــان 28' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '619-247 m²',
    specifications: { totalUnits: '15 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan28.jpg',
    gallery: ['/nayan22.jpg', '/nayan22.jpg', '/contactpage_n284nq.webp'],
  },

  {
    id: 14,
    slug: 'nayan-29',
    title: { en: 'Nayan 29', ar: 'نيــــان 29' },
    status: { en: 'For Rent', ar: 'للإيجار' },
    category: 'Residential',
    area: '350-137 m²',
    specifications: { totalUnits: '26 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan29.JPG',
  },

  {
    id: 15,
    slug: 'nayan-30',
    title: { en: 'Nayan 30', ar: 'نيــــان 30' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '375-191 m²',
    specifications: { totalUnits: '48 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan30.jpg',
    gallery: ['/nayan30.jpg', '/nayan30.jpg', '/nayan30.jpg'],
  },

  {
    id: 16,
    slug: 'nayan-31',
    title: { en: 'Nayan 31', ar: 'نيــــان 31' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '375-191 m²',
    specifications: { totalUnits: '60 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan31.png',
    gallery: ['/nayan31.jpeg', '/nayan32n.webp'],
  },

  {
    id: 17,
    slug: 'nayan-32',
    title: { en: 'Nayan 32', ar: 'نيــــان 32' },
    status: { en: 'Under Construction', ar: 'قيد الإنشاء' },
    category: 'Building',
    area: '160-130 m²',
    specifications: { totalUnits: '36 Floors' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
    image: '/nayan32.png',
    gallery: ['/nayan32.png', '/nayan32n.webp'],
  },

  {
    id: 18,
    slug: 'nayan-33-apartments',
    title: { en: 'Nayan 33 Apartments', ar: ' نيــــان  شقق 33' },
    status: { en: 'Under Construction', ar: 'قيد الإنشاء' },
    category: 'Apartments',
    area: '95-80 m²',
    specifications: { totalUnits: '22 Apartments' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
  },

  {
    id: 19,
    slug: 'nayan-33-commercial',
    title: { en: 'Nayan 33 Commercial', ar: ' نيــــان  تجاري 33' },
    status: { en: 'Under Construction', ar: 'قيد الإنشاء' },
    category: 'Commercial',
    area: '18041.610 m²',
    specifications: { totalUnits: '40 Offices | 45 Showrooms' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نيــــان.',
    },
  },


  {
    id: 4,
    slug: 'nayan-32',
    title: { en: 'Nayan 32', ar: 'نيــــان 32' },
    status: { en: 'For Sale', ar: 'للبيع' },
    category: 'Flat',
    area: '1200 m²',
    location: { en: 'Al Araid, Riyadh', ar: 'النرجس' },
    coordinates: { lat: 24.82, lng: 46.68 },
    gallery: ['/nayan31.jpeg', '/nayan32n.webp'],
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
    image: '/nayan32.png',
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
