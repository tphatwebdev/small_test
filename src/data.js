export const categories = [
  'Dresses',
  'Shirts',
  'Jeans',
  'Swimwear',
  'Sleepwear',
  'Sportswear',
  'Jumpsuits',
  'Blazers',
  'Jackets',
  'Shoes',
];

export const heroSlides = [
  {
    kicker: '10% OFF YOUR FIRST ORDER',
    title: 'Reasonable Price',
    actionText: 'Shop Now',
    image: 'photo-1524504388940-b1c1722653e1',
    alt: 'Two women in an elegant fashion campaign',
  },
];

export const promoBanners = [
  {
    eyebrow: '20% OFF ALL ORDER',
    title: 'Spring Collection',
    action: 'Shop Now',
    image: 'photo-1483985988355-763728e1935b',
    alt: 'Woman posing in stylish Spring Collection outfit',
  },
  {
    eyebrow: '20% OFF ALL ORDER',
    title: 'Winter Collection',
    action: 'Shop Now',
    image: 'photo-1513151233558-d860c5398176',
    alt: 'Holiday winter shopping bags and cheerful gifts',
  },
];

export const popularProducts = [
  {
    id: 1,
    name: 'AGE LOC LUMISPA',
    subtitle: 'TREATMENT CLEANSER',
    category: 'TREATMENT',
    price: 28,
    oldPrice: 35,
    tag: 'SALE',
    badgeText: 'BEST SELLER',
    badgeColor: '#198754',
    rating: 5,
    reviews: 124,
    image: 'photo-1584308666744-24d5c474f2ae',
  },
  {
    id: 2,
    name: '180° FACE WASH',
    subtitle: 'CELLULAR RENEWAL',
    category: 'SKINCARE',
    price: 32,
    oldPrice: 40,
    tag: 'SALE',
    badgeText: 'BEST SELLER',
    badgeColor: '#eab308',
    rating: 5,
    reviews: 98,
    image: 'photo-1571781926291-c477ebfd024b',
  },
  {
    id: 3,
    name: 'AP 24 WHITENING TOOTHPASTE',
    subtitle: 'FLUORIDE FORMULA',
    category: 'ORAL CARE',
    price: 14,
    oldPrice: 18,
    tag: 'NEW',
    badgeText: 'BEST SELLER',
    badgeColor: '#0ea5e9',
    rating: 5,
    reviews: 215,
    image: 'photo-1556228720-195a672e8a03',
  },
  {
    id: 4,
    name: 'EPOCH BAOBAB BODY BUTTER',
    subtitle: 'NOURISHING BUTTER',
    category: 'BODY CARE',
    price: 24,
    oldPrice: 30,
    tag: 'NEW',
    badgeText: 'BEST SELLER',
    badgeColor: '#10b981',
    rating: 5,
    reviews: 87,
    image: 'photo-1608248543803-ba4f8c70ae0b',
  },
];

export const awardItems = [
  {
    id: 1,
    award: 'ageLOC®',
    product: 'LumiSpa® iO',
    category: '2023 Best Cleaning Device Award Winner',
    year: 'NewBeauty Awards',
    color: '#e11d48',
  },
  {
    id: 2,
    award: 'Epoch BaoBab Body Butter',
    product: 'Body Butter',
    category: 'Silver Winner 2023',
    year: 'Beauty Bible Awards',
    color: '#d946ef',
  },
  {
    id: 3,
    award: 'Nu Skin Enterprises',
    product: '2022 Best USA Beauty Brand',
    category: 'Global Makeup Awards',
    year: '',
    color: '#f59e0b',
  },
  {
    id: 4,
    award: 'Epoch® Yin & Yang Mask',
    product: '2022 Most Sustainable Packaging: Silver Winner',
    category: 'Global Green Beauty Awards',
    year: '',
    color: '#10b981',
  },
  {
    id: 5,
    award: 'ageLOC® Facial Spa',
    product: '2021 Readers’ Choice Beauty Award Winner',
    category: 'InStyle',
    year: '',
    color: '#18181b',
  },
  {
    id: 6,
    award: 'Nutricentials® Eye Love Bright Eyes',
    product: '2022 Pure Beauty Award Finalist',
    category: 'Pure Beauty Global Awards',
    year: '',
    color: '#3b82f6',
  },
];

export const wayStats = [
  { value: '50+', label: 'Markets Globally' },
  { value: '1M+', label: 'Community Members' },
  { value: '$1.2M+', label: 'Contributed to Force For Good' },
];

export const newsArticles = [
  {
    id: 1,
    title: 'Ten Beauty Products You Should Start Using This Autumn',
    image: 'photo-1515377905703-c4788e51af15',
    alt: 'Woman in pink silky robe preparing morning beauty ritual',
  },
  {
    id: 2,
    title: '10 Nu Skin Beauty Products You Should Start Using This Autumn',
    image: 'photo-1608248543803-ba4f8c70ae0b',
    alt: 'Close up hand holding skincare treatment capsule',
  },
  {
    id: 3,
    title: '10 Nu Skin Beauty Products You Should Start Using This Autumn',
    image: 'photo-1544005313-94ddf0286df2',
    alt: 'Woman smiling holding beauty skincare device',
  },
  {
    id: 4,
    title: 'Discover How Smart Skin Cleansing Changes Everything',
    image: 'photo-1524504388940-b1c1722653e1',
    alt: 'Modern lifestyle skincare portrait',
  },
];

export const imageUrl = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
