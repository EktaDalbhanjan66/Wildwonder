import React, { useEffect, useState } from 'react';
import BenefitsSection from './BenefitsSection';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Hero2 = () => {
  const smallImages = [
    { src: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_1_360x.png?v=1714540347", type: "image" },
    { src: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_3_360x.png?v=1714540350", type: "image" },
    { src: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_4_360x.png?v=1714540350", type: "image" },
  ];
  const flavors = [
    {
      name: 'BANANA GREEN',
      color: 'bg-orange-400',
      image: '//drinkwildwonder.com/cdn/shop/files/bananapost.png?v=1722504758&width=150',
      description: 'Sweet banana blend with crisp green tea notes, creating a refreshing tropical experience.',
      reviews: 65,
      rating: 4,
      price: 3590.93,
      moreImages:[
        { src: "https://drinkwildwonder.com/cdn/shop/files/Banana_1_720x.png?v=1721349284", type: "image" },
        { src: "https://drinkwildwonder.com/cdn/shop/files/Banana_3_720x.png?v=1721349294", type: "image" },
        { src: "https://drinkwildwonder.com/cdn/shop/files/Banana_6_720x.png?v=1721406235", type: "image" },
      ]
    },
    {
      name: 'RASPBERRY LYCHEE',
      color: 'bg-pink-400',
      image: 'https://drinkwildwonder.com/cdn/shop/files/Raspberry_Lychee_Can_a370b567-d14c-46b6-8def-d21770c21a88.png?v=1709410717&width=150',
      description: 'Jammy raspberry puree, juicy lychees, and fresh brewed honeysuckle flowers reminiscent of your favorite gummy treats.',
      reviews: 80,
      rating: 4,
      price: 3690.93,
      moreImages:[
        { src: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_1_360x.png?v=1714540347", type: "image" },
        { src: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_3_360x.png?v=1714540350", type: "image" },
        { src: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_4_360x.png?v=1714540350", type: "image" },
      ]
    }, {
        name: 'STRAWBERRY PASSION',
        color: 'bg-red-400',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Strawberry_Passion_Can.png?v=1708981486&width=150',
        description: 'Ripe strawberries blended with exotic passion fruit for a bold, tropical fusion.',
        reviews: 72,
        rating: 4,
        price: 3590.93,
        moreImages:[
          { src: "https://drinkwildwonder.com/cdn/shop/files/Strawberry_1_360x.png?v=1714540479", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Strawberry_4_360x.png?v=1714540660", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Strawberry_3_360x.png?v=1714540660", type: "image" },
        ]
      },
      {
        name: 'GUAVA ROSE',
        color: 'bg-rose-500',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Guava_Rose_Can_45621980-3771-4314-b45f-d7fedce56568.png?v=1708981389&width=150',
        description: 'Delicate rose petals paired with sweet guava for a floral and fruity experience.',
        reviews: 68,
        rating: 4,
        price: 3490.93,
        moreImages:[
          { src: "https://drinkwildwonder.com/cdn/shop/files/Guava_1_720x.png?v=1714539969", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Guava_4_720x.png?v=1714582652", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Guava_3_720x.png?v=1714539983", type: "image" },
        ]
      },
      {
        name: 'PINEAPPLE PARADISE',
        color: 'bg-yellow-400',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Pineapple_Paradise_Front_071624.png?v=1722474157&width=150',
        description: 'Tropical pineapple blend that transports you to a beachside paradise.',
        reviews: 75,
        rating: 4,
        price: 3590.93,
        moreImages:[
          { src: "https://drinkwildwonder.com/cdn/shop/files/Pineapple_1_green_360x.png?v=1722475205", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Pineapple_3_green_360x.png?v=1722475212", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Pineapple_3_green_360x.png?v=1722475212", type: "image" },
        ]
      },
      {
        name: 'MANGO GOLD',
        color: 'bg-lime-300',
        image: 'https://drinkwildwonder.com/cdn/shop/files/mango_Gold_no_shadow_3__RB.png?v=1677499380&width=150',
        description: 'Rich, golden mangoes creating a sweet and tropical experience.',
        reviews: 70,
        rating: 4,
        price: 3490.93,
        moreImages:[
          { src: "https://drinkwildwonder.com/cdn/shop/files/Mango_1_360x.png?v=1714540147", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Mango_4_360x.png?v=1714540167", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Mango_3_360x.png?v=1714540167", type: "image" },
        ]
      },
      {
        name: 'PEACH GINGER',
        color: 'bg-orange-300',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Peach_Ginger_Can_18d3f461-fe70-458b-9cc5-7612e51689d7.png?v=1708981427&width=150',
        description: 'Sweet peaches with a subtle ginger kick for a perfectly balanced flavor.',
        reviews: 62,
        rating: 4,
        price: 3390.93,
        moreImages:[
          { src: "https://drinkwildwonder.com/cdn/shop/files/Peach_1_720x.png?v=1714540243", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Peach_2_720x.png?v=1714540247", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Peach_3_720x.png?v=1714540247", type: "image" },
        ]
      },
      {
        name: 'Shark Tank Bundle',
        color: 'bg-[#abf4d1]',
        image: 'https://drinkwildwonder.com/cdn/shop/files/SharkTankBundle_new_c8248e2b-c8af-4b7b-85ad-fa667eca2d6d.png?v=1724416171&width=150',
        description: 'Try our Shark-Tank featured flavors that had all the Sharks raving... and landed us a deal! Includes 4 cans of each: Raspberry Lychee, Pineapple Paradise, Strawberry Passion, Mango Gold, Guava Rose and Peach Ginger Discount applied at check out. One promo per order.',
        reviews: 62,
        rating: 4,
        price: 3390.93,
        moreImages:[
          { src: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_Shark_Tank_2_720x.png?v=1724416169", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/products/RosaLiSharkTank_720x.png?v=1724416177", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans___3_720x.png?v=1724415944", type: "image" },
        ]
      },
      {
        name: 'Variety Pack',
        color: 'bg-orange-300',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Variety_6Flavors_33e83619-48e5-4376-bef2-df7bf390a806.png?v=1724415931&width=150',
        description: "Can't decide on just one flavor? Experience all 6 prebiotic + probiotics flavors and all their gut-friendly benefits! Includes 2 cans of each: Raspberry Lychee, Pineapple Paradise, Strawberry Passion, Mango Gold, Guava Rose, and Peach Ginger."
,
        reviews: 62,
        rating: 3,
        price: 3390.93,
        moreImages:[
          { src: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans_2_720x.png?v=1724415930", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans___2_720x.png?v=1724415944", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans___3_720x.png?v=1724415944", type: "image" },
        ]
      },
      {
        name: 'Botanical Bouquet',
        color: 'bg-orange-300',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Botanical.png?v=1718399818&width=150',
        description: 'A delightful dozen featuring our bestselling floral and fruity favorites. Includes 4 cans of each: Raspberry Lychee, Guava Rose, Strawberry Passion.',
        reviews: 62,
        rating: 4,
        price: 3390.93,
        moreImages:[
          { src: "https://drinkwildwonder.com/cdn/shop/files/VarietyPack-BotanicalBundle_360x.png?v=1714541381", type: "image" },
          { src: "https://drinkwildwonder.com/cdn/shop/files/BotanicalBouquet2_720x.png?v=1714543455", type: "image" },
         
        ]
      }
  
  ];

  const [selectedFlavor, setSelectedFlavor] = useState(flavors[1]);
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const allImages = [
    { src: selectedFlavor.image, type: 'image' },
    ...selectedFlavor.moreImages
  ];

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedFlavor]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToImage = (index) => {
    if (isAnimating || index === currentImageIndex) return;
    setIsAnimating(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="w-full min-h-screen bg-[#f2ebdf] px-4 sm:px-6 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Image Section */}
          <div className="bg-[#FDF5E6] p-4 sm:p-6 lg:p-8 rounded-lg">
            <div className="relative">
              <div className={`${selectedFlavor.color} rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 flex items-center justify-center transition-colors duration-300 mb-4 sm:mb-6 relative overflow-hidden`}>
                <img
                  src={allImages[currentImageIndex].src}
                  alt={`${selectedFlavor.name} view ${currentImageIndex + 1}`}
                  className={`h-[300px] sm:h-[500px] lg:h-[800px] w-full object-contain transition-all duration-300 transform ${
                    isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                  }`}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-2 rounded-full shadow-lg transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-blue-900" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-2 rounded-full shadow-lg transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-blue-900" />
                </button>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-200 ${
                      currentImageIndex === index ? 'bg-blue-900 w-3 sm:w-4' : 'bg-blue-900/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 sm:gap-4 justify-center overflow-x-auto py-2 scrollbar-hide">
              {allImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 cursor-pointer transition-all duration-200 ${
                    currentImageIndex === index ? 'ring-2 ring-blue-900' : ''
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    className={`h-14 sm:h-20 w-14 sm:w-20 object-contain rounded-lg border-2 ${
                      currentImageIndex === index ? 'border-blue-900' : 'border-gray-300'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 transition-all duration-300">
              {selectedFlavor.name}
            </h2>
            
            <h3 className="text-base sm:text-lg lg:text-xl text-blue-900">
              12 CANS | PREBIOTIC + PROBIOTIC SPARKLING DRINK
            </h3>
            
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <svg 
                  key={index} 
                  className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${index < selectedFlavor.rating ? 'text-blue-900' : 'text-blue-900/50'} fill-current`} 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="text-sm sm:text-base text-blue-900 ml-2">{selectedFlavor.reviews} REVIEWS</span>
            </div>
            
            <p className="text-base sm:text-lg text-blue-900 transition-all duration-300">
              {selectedFlavor.description}
            </p>
            
            {/* Flavor Selection */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-bold text-blue-900">CHOOSE YOUR FLAVOR</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                {flavors.map((flavor) => (
                  <div
                    key={flavor.name}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`${flavor.color} rounded-lg p-1 sm:p-2 aspect-square cursor-pointer relative group overflow-hidden
                      ${selectedFlavor.name === flavor.name ? 'ring-2 ring-blue-900' : ''}
                    `}
                  >
                    <img 
                      src={flavor.image}
                      alt={flavor.name}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] sm:text-xs py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {flavor.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Purchase Options */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div 
                  className={`flex-1 p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all
                    ${!isSubscription ? 'border-blue-900 bg-[#f2ebdf]' : 'border-gray-300 bg-gray-50'}`}
                  onClick={() => setIsSubscription(false)}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-lg sm:text-xl font-bold text-blue-900">One-time purchase</span>
                      <span className="text-base sm:text-lg text-blue-900 block sm:inline sm:ml-2">12 Pack</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-blue-900">Rs. {selectedFlavor.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div 
                className={`p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all
                  ${isSubscription ? 'border-blue-900 bg-[#f2ebdf]' : 'border-gray-300 bg-gray-50'}`}
                onClick={() => setIsSubscription(true)}
              >
                <div className="flex items-start sm:items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-blue-900 flex items-center justify-center">
                      {isSubscription && <div className="w-2 h-2 rounded-full bg-blue-900" />}
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-blue-900">Subscribe & Save</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 line-through text-xs sm:text-sm">Rs. 3,690.93</span>
                    <span className="text-xl sm:text-2xl font-bold text-blue-900 block">Rs. {selectedFlavor.price.toFixed(2)}</span>
                  </div>
                </div>

                <select className="w-full p-2 border border-gray-300 rounded-lg mb-2 text-sm sm:text-base">
                  <option>Delivery every 4 weeks - 15% off</option>
                  <option>Delivery every 6 weeks - 10% off</option>
                  <option>Delivery every 8 weeks - 5% off</option>
                </select>

                <div className="text-xs sm:text-sm text-blue-900">
                  <div className="flex items-center gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Change or cancel anytime
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Exclusive gifts + discounts
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <input type="checkbox" className="w-3 h-3 sm:w-4 sm:h-4 rounded border-gray-300" />
                  <span className="text-xs sm:text-sm text-blue-900">Is this a gift?</span>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center border-2 border-blue-900 rounded-lg">
                  <button 
                    className="px-3 sm:px-4 py-2 text-blue-900 text-lg sm:text-xl"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    −
                  </button>
                  <span className="px-3 sm:px-4 text-blue-900">{quantity}</span>
                  <button 
                    className="px-3 sm:px-4 py-2 text-blue-900 text-lg sm:text-xl"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-pink-500 text-white py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base">
                  ADD TO CART
                </button>
              </div>
              <p className="text-center text-sm sm:text-base text-blue-900">
                Order 2+ for <span className="bg-yellow-200 px-2">FREE SHIPPING!</span>
              </p>
            </div>

            <BenefitsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;