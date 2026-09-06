
/**
 * Static property catalog for Derakhshan Real Estate.
 * Karaj-focused editorial property catalog.
 * Images: curated Unsplash architecture photography.
 */

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const PROPERTY_TYPES = [
  { value: 'all', label: 'همه انواع' },
  { value: 'apartment', label: 'آپارتمان' },
  { value: 'penthouse', label: 'پنت‌هاوس' },
  { value: 'villa', label: 'ویلا' },
  { value: 'townhouse', label: 'تاون‌هاوس' },
]

export const TRANSACTION_TYPES = [
  { value: 'all', label: 'همه معاملات' },
  { value: 'sale', label: 'فروش' },
  { value: 'rent', label: 'اجاره' },
]

export const LOCATIONS = [
  { value: 'all', label: 'همه محله‌ها' },
  { value: 'مهرشهر', label: 'مهرشهر' },
  { value: 'عظیمیه', label: 'عظیمیه' },
  { value: 'مصباح', label: 'مصباح' },
  { value: 'فردیس', label: 'فردیس' },
  { value: 'دهقان‌ویلا', label: 'دهقان‌ویلا' },
]

export const BEDROOM_OPTIONS = [
  { value: 'all', label: 'تعداد خواب' },
  { value: '2', label: '۲ خواب و بیشتر' },
  { value: '3', label: '۳ خواب و بیشتر' },
  { value: '4', label: '۴ خواب و بیشتر' },
]

export const properties = [
  {
    id: 'mehrshahr-terrace-penthouse',
    slug: 'penthouse-mehrshahr-terrace',
    title: 'پنت‌هاوس تراس‌دار مهرشهر',
    location: 'مهرشهر',
    district: 'کرج',
    price: 98000000000,
    priceLabel: '۹۸ میلیارد تومان',
    transaction: 'sale',
    type: 'penthouse',
    typeLabel: 'پنت‌هاوس',
    area: 320,
    bedrooms: 4,
    bathrooms: 3,
    parking: 3,
    year: 1402,
    featured: true,
    heroOrder: 1,
    images: [
      img('photo-1600596542815-ffad4c1539a9'),
      img('photo-1600607687939-ce8a6c25118c'),
      img('photo-1600566753190-17f0baa2a6c3'),
      img('photo-1600585154340-be6161a56a0c'),
    ],
    description:
      'پنت‌هاوسی شاخص در مهرشهر با تراس وسیع، نور طبیعی فراوان و چشم‌اندازی باز. طراحی داخلی بر پایه متریال طبیعی، خطوط آرام و جزئیات اجرایی دقیق شکل گرفته است.',
    story:
      'این خانه برای کسانی انتخاب شده که کیفیت ساخت، آرامش محله و ارتباط مستقیم با فضای بیرون را به متراژ صرف ترجیح می‌دهند.',
    amenities: [
      'تراس ۳۵ متری',
      'آشپزخانه جزیره‌ای',
      'سیستم هوشمند',
      'انباری اختصاصی',
      'لابی اختصاصی',
      'استخر و سونا',
    ],
    coordinates: { lat: 35.7608, lng: 50.9458 },
  },

  {
    id: 'azimiye-garden-villa',
    slug: 'villa-azimiye-garden',
    title: 'ویلای باغی عظیمیه',
    location: 'عظیمیه',
    district: 'کرج',
    price: 185000000000,
    priceLabel: '۱۸۵ میلیارد تومان',
    transaction: 'sale',
    type: 'villa',
    typeLabel: 'ویلا',
    area: 680,
    bedrooms: 5,
    bathrooms: 5,
    parking: 4,
    year: 1400,
    featured: true,
    heroOrder: 2,
    images: [
      img('photo-1613490493576-7fde63acd811'),
      img('photo-1600047509807-ba8f99d36cd2'),
      img('photo-1600210492486-724fe5c67fb0'),
      img('photo-1600573472592-401b489a3cdc'),
    ],
    description:
      'ویلایی مستقل در عظیمیه با حیاط خصوصی، استخر روباز و معماری معاصر. ترکیب فضای سبز، حجم‌های سنگی و بازشوهای بزرگ، محیطی آرام و خصوصی برای سکونت خانوادگی ایجاد کرده است.',
    story:
      'موقعیت ملک دسترسی مناسبی به محورهای اصلی کرج فراهم می‌کند، در حالی که فضای داخلی حس خلوت و استقلال یک خانه ویلایی را حفظ کرده است.',
    amenities: [
      'حیاط ۵۰۰ متری',
      'استخر روباز',
      'اتاق مهمان مستقل',
      'آشپزخانه دوم',
      'سیستم امنیتی',
      'چیلر مرکزی',
    ],
    coordinates: { lat: 35.8298, lng: 51.0104 },
  },

  {
    id: 'mesbah-south-light',
    slug: 'apartment-mesbah-south-light',
    title: 'آپارتمان نورگیر مصباح',
    location: 'مصباح',
    district: 'کرج',
    price: 52000000000,
    priceLabel: '۵۲ میلیارد تومان',
    transaction: 'sale',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    area: 185,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    year: 1401,
    featured: true,
    heroOrder: 3,
    images: [
      img('photo-1502672260266-1c1ef2d93688'),
      img('photo-1560448204-e02f11c3d0e2'),
      img('photo-1560185127-6ed189bf02f4'),
      img('photo-1484154216822-a623401771c7'),
    ],
    description:
      'آپارتمانی بازسازی‌شده در مصباح با پلان کارآمد، نور طبیعی مناسب و جزئیات اجرایی تمیز. طراحی داخلی ساده و متعادل، فضا را برای زندگی روزمره و استفاده خانوادگی آماده کرده است.',
    story:
      'انتخابی دقیق برای کسانی که کیفیت زندگی شهری، دسترسی مناسب و طراحی داخلی منسجم را به متراژ افراطی ترجیح می‌دهند.',
    amenities: [
      'بالکن جنوبی',
      'کابینت سفارشی',
      'کف پارکت چوبی',
      'انباری',
      'نگهبانی ۲۴ ساعته',
      'آسانسور دوبل',
    ],
    coordinates: { lat: 35.8168, lng: 50.9685 },
  },

  {
    id: 'fardis-horizon-penthouse',
    slug: 'penthouse-fardis-horizon',
    title: 'پنت‌هاوس افق فردیس',
    location: 'فردیس',
    district: 'کرج',
    price: 72000000000,
    priceLabel: '۷۲ میلیارد تومان',
    transaction: 'sale',
    type: 'penthouse',
    typeLabel: 'پنت‌هاوس',
    area: 245,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    year: 1403,
    featured: true,
    heroOrder: 4,
    images: [
      img('photo-1600607687644-c7171b42498b'),
      img('photo-1600566753086-00f18fb6b3ea'),
      img('photo-1600585154526-990dced4db0d'),
      img('photo-1600047509358-9dc435629748'),
    ],
    description:
      'واحدی در آخرین طبقه با سقف بلند، شیشه‌های سرتاسری و چشم‌انداز باز. طراحی داخلی مینیمال، نور طبیعی و خطوط ساده، شخصیت اصلی این خانه را شکل می‌دهند.',
    story:
      'برای کسانی که سکونت آرام در ارتفاع و فاصله‌ای هوشمندانه از شلوغی خیابان را می‌خواهند.',
    amenities: [
      'سقف ۴ متری',
      'روف‌گاردن اختصاصی',
      'شومینه گازی',
      'اتاق کار',
      'جکوزی',
      'پارکینگ مهمان',
    ],
    coordinates: { lat: 35.7238, lng: 50.9752 },
  },

  {
    id: 'dehghan-villa-residence',
    slug: 'apartment-dehghan-villa-residence',
    title: 'رزیدنس آرام دهقان‌ویلا',
    location: 'دهقان‌ویلا',
    district: 'کرج',
    price: 45000000,
    priceLabel: '۴۵ میلیون تومان',
    priceSuffix: 'ماهیانه',
    transaction: 'rent',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    area: 210,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    year: 1399,
    featured: false,
    images: [
      img('photo-1493809842364-78817add7ffb'),
      img('photo-1522708323590-d24dbb6b0267'),
      img('photo-1556912173-46c336c7fd55'),
      img('photo-1554995207-c18c203602cb'),
    ],
    description:
      'واحد اجاره‌ای مبله در مجتمعی آرام در دهقان‌ویلا، با لابی مرتب، پلان کاربردی و دسترسی مناسب به خدمات روزمره. مناسب خانواده‌ها و افرادی که سکونت موقت با استاندارد بالا می‌خواهند.',
    story:
      'اجاره‌ای گزینشی با قرارداد شفاف و پشتیبانی مستقیم مشاور در طول فرآیند.',
    amenities: [
      'مبله کامل',
      'سرویس نظافت',
      'باشگاه مجتمع',
      'انباری',
      'اینترنت فیبر',
      'نگهبانی',
    ],
    coordinates: { lat: 35.7955, lng: 50.9235 },
  },

  {
    id: 'mehrshahr-courtyard-townhouse',
    slug: 'townhouse-mehrshahr-courtyard',
    title: 'تاون‌هاوس حیاط‌دار مهرشهر',
    location: 'مهرشهر',
    district: 'کرج',
    price: 110000000000,
    priceLabel: '۱۱۰ میلیارد تومان',
    transaction: 'sale',
    type: 'townhouse',
    typeLabel: 'تاون‌هاوس',
    area: 410,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    year: 1401,
    featured: true,
    images: [
      img('photo-1600585154363-67eb9e2e2099'),
      img('photo-1605276374104-dee2a0ed3cd6'),
      img('photo-1600121848594-d8644e57abab'),
      img('photo-1600607687920-4e2a09cf159d'),
    ],
    description:
      'تاون‌هاوسی چندطبقه در مهرشهر با حیاط جنوبی، نور یکنواخت و پلان خانواده‌محور. ارتباط میان فضاهای خصوصی و عمومی به شکلی طراحی شده که زندگی روزمره روان و منعطف باقی بماند.',
    story:
      'انتخابی برای کسانی که استقلال یک خانه ویلایی را در مقیاسی شهری و مدیریت‌پذیر می‌خواهند.',
    amenities: [
      'حیاط جنوبی',
      'آشپزخانه دوبل',
      'اتاق لباس',
      'سالن سینما',
      'موتورخانه مستقل',
      'دوربین مداربسته',
    ],
    coordinates: { lat: 35.7594, lng: 50.9532 },
  },

  {
    id: 'azimiye-gallery-apartment',
    slug: 'apartment-azimiye-gallery',
    title: 'آپارتمان گالری‌گونه عظیمیه',
    location: 'عظیمیه',
    district: 'کرج',
    price: 38000000,
    priceLabel: '۳۸ میلیون تومان',
    priceSuffix: 'ماهیانه',
    transaction: 'rent',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    area: 145,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    year: 1402,
    featured: false,
    images: [
      img('photo-1536376072261-38c75010e6c9'),
      img('photo-1618221195710-dd6b41faaea6'),
      img('photo-1616486338812-3dadae4b4ace'),
      img('photo-1615529182904-14819c35db37'),
    ],
    description:
      'واحدی روشن در عظیمیه با دیوارهای خنثی، نور کنترل‌شده و چیدمانی مینیمال. مناسب سکونت شهری یا استفاده به‌عنوان فضای زندگی و کار ترکیبی.',
    story:
      'اجاره‌ای آرام برای کسانی که طراحی ساده، نور مناسب و کیفیت فضای داخلی را در اولویت قرار می‌دهند.',
    amenities: [
      'نورگیر دوطرفه',
      'کمد دیواری',
      'آشپزخانه اپن',
      'بالکن',
      'پارکینگ مسقف',
      'لابی آرام',
    ],
    coordinates: { lat: 35.8342, lng: 51.0121 },
  },

  {
    id: 'fardis-classic-residence',
    slug: 'apartment-fardis-classic-residence',
    title: 'رزیدنس کلاسیک فردیس',
    location: 'فردیس',
    district: 'کرج',
    price: 64000000000,
    priceLabel: '۶۴ میلیارد تومان',
    transaction: 'sale',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    area: 230,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    year: 1398,
    featured: false,
    images: [
      img('photo-1600210491892-03d54c0aaf64'),
      img('photo-1600489000022-c2086d79f9d4'),
      img('photo-1600585154084-4e5fe7c39198'),
      img('photo-1600566753190-17f0baa2a6c3'),
    ],
    description:
      'واحدی با سقف بلند، جزئیات معماری کلاسیک و بازسازی انتخابی که شخصیت فضا را حفظ کرده است. ترکیب متریال گرم و امکانات امروزی، خانه‌ای متعادل برای سکونت خانوادگی ساخته است.',
    story:
      'تعادلی میان شخصیت معماری کلاسیک و استانداردهای زندگی امروز در یکی از بخش‌های آرام فردیس.',
    amenities: [
      'سقف بلند',
      'شومینه',
      'اتاق کار',
      'انباری بزرگ',
      'تراس غربی',
      'نگهبانی',
    ],
    coordinates: { lat: 35.7218, lng: 50.9795 },
  },
]

export function getPropertyBySlug(slug) {
  return properties.find((p) => p.slug === slug)
}

export function getFeaturedProperties(limit = 4) {
  return properties.filter((p) => p.featured).slice(0, limit)
}

export function formatArea(area) {
  return `${area.toLocaleString('fa-IR')} متر`
}

export function formatCount(n) {
  return n.toLocaleString('fa-IR')
}

export function filterProperties(list, filters) {
  return list.filter((p) => {
    if (filters.q) {
      const q = filters.q.trim().toLowerCase()

      const hay = `${p.title} ${p.location} ${p.typeLabel} ${p.description} ${p.story}`.toLowerCase()

      if (!hay.includes(q)) return false
    }

    if (
      filters.location &&
      filters.location !== 'all' &&
      p.location !== filters.location
    ) {
      return false
    }

    if (
      filters.type &&
      filters.type !== 'all' &&
      p.type !== filters.type
    ) {
      return false
    }

    if (
      filters.transaction &&
      filters.transaction !== 'all' &&
      p.transaction !== filters.transaction
    ) {
      return false
    }

    if (filters.bedrooms && filters.bedrooms !== 'all') {
      if (p.bedrooms < Number(filters.bedrooms)) return false
    }

    return true
  })
}
