import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Constants
const PRODUCTS = [
  {
    id: 1,
    name: 'BANANA QUEEN',
    price: '₹ 3,690.93',
    image: 'https://cdn.shopify.com/s/files/1/0264/8952/0171/files/Banana_1_400x400.png?v=1721349284',
    bgColor: 'bg-[#D4DB9E]'
  },
  {
    id: 2,
    name: 'RASPBERRY LYCHEE',
    price: '₹ 3,866.69',
    image: 'https://drinkwildwonder.com/cdn/shop/files/Raspberry_1_720x.png?v=1714540347',
    bgColor: 'bg-pink-200'
  },
  {
    id: 3,
    name: 'PEACH GINGER',
    price: '₹ 3,690.93',
    image: 'https://drinkwildwonder.com/cdn/shop/files/Peach_1_720x.png?v=1714540243',
    bgColor: 'bg-orange-200'
  },
  {
    id: 4,
    name: 'VARIETY PACK',
    price: '₹ 3,866.69',
    image: 'https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans_2_720x.png?v=1724415930',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 5,
    name: 'MANGO GOLD',
    price: '₹ 3,690.93',
    image: 'https://drinkwildwonder.com/cdn/shop/files/Mango_1_720x.png?v=1714540147',
    bgColor: 'bg-green-200'
  },
  {
    id: 6,
    name: 'Strawberry Passion',
    price: '₹ 3,866.69',
    image: 'https://drinkwildwonder.com/cdn/shop/files/Strawberry_1_720x.png?v=1714540479',
    bgColor: 'bg-blue-100'
  },
  {
    id: 7,
    name: 'Pineapple Paradise',
    price: '₹ 3,690.93',
    image: 'https://drinkwildwonder.com/cdn/shop/files/Pineapple_1_green_720x.png?v=1722475205',
    bgColor: 'bg-purple-200'
  },
  {
    id: 8,
    name: 'Botanical Bouquet',
    price: '₹ 3700',
    image: 'https://drinkwildwonder.com/cdn/shop/files/VarietyPack-BotanicalBundle_720x.png?v=1714541381',
    bgColor: 'bg-red-100'
  }
];

// Components
const Wave = () => (
  <div className="relative w-full overflow-hidden">
    <svg 
      viewBox="0 0 1440 120" 
      className="w-full h-24 fill-[#facbd3]"
      preserveAspectRatio="none"
    >
      <path 
        d="M0,64 C288,89.3 576,97.7 864,89.2 C1152,80.7 1440,55.3 1440,64 L1440,120 L0,120 Z" 
      />
    </svg>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2">
    <div className="rounded-2xl p-4 aspect-square flex items-center justify-center mb-4 transition-all duration-300 hover:scale-105 cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain rounded-2xl"
      />
    </div>
    <div className="text-center">
      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
        {product.name}
      </h3>
      <p className="text-base md:text-lg font-semibold text-pink-700">
        {product.price}
      </p>
      <button className="bg-pink-600 text-white px-6 md:px-10 py-2 rounded-lg mt-4 hover:bg-pink-700 transition-colors text-sm md:text-base">
        add to cart
      </button>
    </div>
  </div>
);

const NavigationButton = ({ direction, onClick, disabled }) => {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const positionClasses = direction === 'prev' 
    ? "left-0 -translate-x-2 md:-translate-x-4" 
    : "right-0 translate-x-2 md:translate-x-4";

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`absolute ${positionClasses} z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50`}
    >
      <Icon className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
    </button>
  );
};

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else if (window.innerWidth < 1280) setSlidesPerView(3);
      else setSlidesPerView(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSlide = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = direction === 'next'
      ? currentIndex + slidesPerView >= PRODUCTS.length ? 0 : currentIndex + slidesPerView
      : currentIndex - slidesPerView < 0 ? Math.max(0, PRODUCTS.length - slidesPerView) : currentIndex - slidesPerView;
    
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="bg-[#f2ebdf]">
      <Wave />
      <div className="w-full bg-[#facbd3]">
        <div className="bg-[#facbd3] p-4 md:p-8">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-blue-900 mb-8 md:mb-12">
            YOU MAY ALSO LIKE
          </h2>
          
          <div className="relative px-4 md:px-8">
            <div className="flex justify-between items-center">
              <NavigationButton 
                direction="prev"
                onClick={() => handleSlide('prev')}
                disabled={isAnimating || currentIndex === 0}
              />
              
              <div className="flex gap-4 md:gap-6 overflow-hidden w-full">
                <div 
                  className="flex transition-transform duration-500 ease-in-out w-full"
                  style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
                >
                  {PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
              
              <NavigationButton 
                direction="next"
                onClick={() => handleSlide('next')}
                disabled={isAnimating || currentIndex + slidesPerView >= PRODUCTS.length}
              />
            </div>
          </div>
        </div>
        <Wave />
      </div>
    </div>
  );
};

export default ProductCarousel;