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
    gallery: ['/image3.webp', '/image3.webp', '/image3.webp'],
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
    title: { en: 'Nayan 20', ar: 'نايان ٢٠' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-137 m²',
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض' },
    coordinates: { lat: 24.8, lng: 46.7 },
    specifications: { totalUnits: '29 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 6,
    slug: 'nayan-21',
    title: { en: 'Nayan 21', ar: 'نايان ٢١' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-137 m²',
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض' },
    coordinates: { lat: 24.8, lng: 46.7 },
    specifications: { totalUnits: '26 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 7,
    slug: 'nayan-townhouse-22',
    title: { en: 'Nayan Town House 22', ar: 'نايان تاون هاوس ٢٢' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Townhouse',
    area: '350-190 m²',
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض' },
    coordinates: { lat: 24.8, lng: 46.7 },
    specifications: { totalUnits: '9 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 8,
    slug: 'nayan-23',
    title: { en: 'Nayan 23', ar: 'نايان ٢٣' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-200 m²',
    specifications: { totalUnits: '24 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 9,
    slug: 'nayan-24',
    title: { en: 'Nayan 24', ar: 'نايان ٢٤' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-190 m²',
    specifications: { totalUnits: '17 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 10,
    slug: 'nayan-25',
    title: { en: 'Nayan 25', ar: 'نايان ٢٥' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '350-190 m²',
    specifications: { totalUnits: '27 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 11,
    slug: 'nayan-26',
    title: { en: 'Nayan 26', ar: 'نايان ٢٦' },
    status: { en: 'For Rent', ar: 'للإيجار' },
    category: 'Residential',
    area: '94-90 m²',
    specifications: { totalUnits: '27 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 12,
    slug: 'nayan-27',
    title: { en: 'Nayan 27', ar: 'نايان ٢٧' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '450-163 m²',
    specifications: { totalUnits: '9 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 13,
    slug: 'nayan-28',
    title: { en: 'Nayan 28', ar: 'نايان ٢٨' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '619-247 m²',
    specifications: { totalUnits: '15 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 14,
    slug: 'nayan-29',
    title: { en: 'Nayan 29', ar: 'نايان ٢٩' },
    status: { en: 'For Rent', ar: 'للإيجار' },
    category: 'Residential',
    area: '350-137 m²',
    specifications: { totalUnits: '26 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 15,
    slug: 'nayan-30',
    title: { en: 'Nayan 30', ar: 'نايان ٣٠' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '375-191 m²',
    specifications: { totalUnits: '48 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 16,
    slug: 'nayan-31',
    title: { en: 'Nayan 31', ar: 'نايان ٣١' },
    status: { en: 'Completed', ar: 'مكتمل' },
    category: 'Residential',
    area: '375-191 m²',
    specifications: { totalUnits: '60 Units' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 17,
    slug: 'nayan-32',
    title: { en: 'Nayan 32', ar: 'نايان ٣٢' },
    status: { en: 'Under Construction', ar: 'قيد الإنشاء' },
    category: 'Building',
    area: '160-130 m²',
    specifications: { totalUnits: '36 Floors' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 18,
    slug: 'nayan-33-apartments',
    title: { en: 'Nayan 33 Apartments', ar: 'نايان ٣٣ شقق' },
    status: { en: 'Under Construction', ar: 'قيد الإنشاء' },
    category: 'Apartments',
    area: '95-80 m²',
    specifications: { totalUnits: '22 Apartments' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 19,
    slug: 'nayan-33-commercial',
    title: { en: 'Nayan 33 Commercial', ar: 'نايان ٣٣ تجاري' },
    status: { en: 'Under Construction', ar: 'قيد الإنشاء' },
    category: 'Commercial',
    area: '18041.610 m²',
    specifications: { totalUnits: '40 Offices | 45 Showrooms' },
    developer: 'NAYAN Real Estate',
    description: {
      en: 'Modern residential development by NAYAN.',
      ar: 'مشروع سكني حديث من نايان.',
    },
  },

  {
    id: 3,
    slug: 'nayan-32',
    title: { en: 'Nayan 32', ar: 'نايان ٣٢' },
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
    image: '/nayan31.webp',
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
    image: '/nayan31.webp',
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
