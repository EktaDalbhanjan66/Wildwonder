import React, { useState, useRef } from 'react';
import { ShoppingCart, ChevronDown, ChevronUp, User, Menu, X, Search } from 'lucide-react';

const Navbar2 = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('variety-packs');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const learnTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleShopEnter = () => {
    if (shopTimeoutRef.current) {
      clearTimeout(shopTimeoutRef.current);
    }
    setIsShopOpen(true);
  };

  const handleShopLeave = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setIsShopOpen(false);
    }, 300);
  };

  const handleLearnEnter = () => {
    if (learnTimeoutRef.current) {
      clearTimeout(learnTimeoutRef.current);
    }
    setIsLearnOpen(true);
  };

  const handleLearnLeave = () => {
    learnTimeoutRef.current = setTimeout(() => {
      setIsLearnOpen(false);
    }, 300);
  };

  const shopItems = {
    'variety-packs': [
      {
        title: 'Shark Tank Bundle',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_Shark_Tank_2_420x.png?v=1724416169',
        bgColor: 'bg-pink-200'
      },
      {
        title: 'Variety Pack',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans_2_420x.png?v=1724415930',
        bgColor: 'bg-orange-200'
      },
      {
        title: 'Botanical Bouquet',
        image: 'https://drinkwildwonder.com/cdn/shop/files/VarietyPack-BotanicalBundle_420x.png?v=1714541381',
        bgColor: 'bg-yellow-200'
      }
    ],
    'flavors': [
      {
        title: 'Raspberry Lychee',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Raspberry_1_420x.png?v=1714540347',
        bgColor: 'bg-yellow-100'
      },
      {
        title: 'Strawberry Passion',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Strawberry_1_420x.png?v=1714540479',
        bgColor: 'bg-orange-100'
      },
      {
        title: 'Pineapple Paradise',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Pineapple_1_green_420x.png?v=1722475205',
        bgColor: 'bg-red-100'
      }
    ],
    'gifts': [
      {
        title: 'Mocktail Variety Pack',
        image: 'https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans_2_420x.png?v=1724415930',
        bgColor: 'bg-purple-100'
      },
      {
        title: 'Botanical Bouquet',
        image: 'https://drinkwildwonder.com/cdn/shop/files/VarietyPack-BotanicalBundle_420x.png?v=1714541381',
        bgColor: 'bg-green-100'
      }
    ]
  };

  const learnItems = [
    {
      title: 'Blog',
      image: 'https://drinkwildwonder.com/cdn/shop/files/Learn_420x.png?v=1662008364',
      bgColor: 'bg-gradient-to-br from-orange-200 to-yellow-200'
    },
    {
      title: 'Our Story',
      image: 'https://drinkwildwonder.com/cdn/shop/files/Our_Story_b3c86dce-ee60-45c4-a537-719faac62f30_420x.png?v=1662008365',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Impact',
      image: 'https://drinkwildwonder.com/cdn/shop/files/Social_Impact_a8107662-5dbd-4e4f-aaac-185687ac7945_420x.png?v=1662008365',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <nav className="bg-[#f2ebdf] py-4 px-6 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div 
              className="flex items-center cursor-pointer"
              onMouseEnter={handleShopEnter}
              onMouseLeave={handleShopLeave}
            >
              <span className="text-blue-900 font-bold text-lg">SHOP</span>
              {isShopOpen ? (
                <ChevronUp className="w-4 h-4 text-blue-900 ml-1" />
              ) : (
                <ChevronDown className="w-4 h-4 text-blue-900 ml-1" />
              )}
            </div>
            <span className="text-blue-900 font-bold text-lg">BUNDLES</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-900">wildwonder®</h1>
          </div>
          
          <div className="flex items-center space-x-8">
            <div 
              className="flex items-center cursor-pointer"
              onMouseEnter={handleLearnEnter}
              onMouseLeave={handleLearnLeave}
            >
              <span className="text-blue-900 font-bold text-lg">LEARN</span>
              {isLearnOpen ? (
                <ChevronUp className="w-4 h-4 text-blue-900 ml-1" />
              ) : (
                <ChevronDown className="w-4 h-4 text-blue-900 ml-1" />
              )}
            </div>
            <span className="text-blue-900 font-bold text-lg">FIND WILDWONDER</span>
            <div className="flex items-center space-x-4">
              <User className="w-6 h-6 text-blue-900" />
              <ShoppingCart className="w-6 h-6 text-blue-900" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="bg-[#f2ebdf] py-4 px-4 shadow-sm md:hidden">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-900"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          
          <h1 className="text-2xl font-bold text-blue-900">wildwonder®</h1>
          
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 text-blue-900" />
            <User className="w-6 h-6 text-blue-900" />
            <ShoppingCart className="w-6 h-6 text-blue-900" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#f2ebdf] z-50 md:hidden overflow-y-auto">
          <div className="p-4">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-blue-900"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mt-12 space-y-6">
              {/* Shop Section */}
              <div>
                <button 
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="w-full flex items-center justify-between py-2 text-blue-900 font-bold"
                >
                  <span>SHOP</span>
                  {isShopOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                {isShopOpen && (
                  <div className="pl-4 space-y-4 mt-2">
                    <button 
                      className={`w-full text-left py-2 ${activeCategory === 'variety-packs' ? 'text-pink-500' : 'text-blue-900'}`}
                      onClick={() => setActiveCategory('variety-packs')}
                    >
                      VARIETY PACKS
                    </button>
                    <button 
                      className={`w-full text-left py-2 ${activeCategory === 'flavors' ? 'text-pink-500' : 'text-blue-900'}`}
                      onClick={() => setActiveCategory('flavors')}
                    >
                      FLAVORS
                    </button>
                    <button 
                      className={`w-full text-left py-2 ${activeCategory === 'gifts' ? 'text-pink-500' : 'text-blue-900'}`}
                      onClick={() => setActiveCategory('gifts')}
                    >
                      GIFTS
                    </button>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {shopItems[activeCategory].map((item, index) => (
                        <div key={index} className="text-center">
                          <div className="rounded-lg overflow-hidden mb-2">
                            <img src={item.image} alt={item.title} className="w-full h-auto" />
                          </div>
                          <p className="text-sm text-blue-900 font-medium">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="w-full text-left py-2 text-blue-900 font-bold">
                BUNDLES
              </button>

              {/* Learn Section */}
              <div>
                <button 
                  onClick={() => setIsLearnOpen(!isLearnOpen)}
                  className="w-full flex items-center justify-between py-2 text-blue-900 font-bold"
                >
                  <span>LEARN</span>
                  {isLearnOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                {isLearnOpen && (
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {learnItems.map((item, index) => (
                      <div key={index} className="text-center">
                        <div className={`rounded-xl overflow-hidden ${item.bgColor}`}>
                          <img src={item.image} alt={item.title} className="w-full h-auto" />
                        </div>
                        <p className="mt-2 text-blue-900 font-bold">{item.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="w-full text-left py-2 text-blue-900 font-bold">
                FIND WILDWONDER
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Dropdowns */}
      {!isMobileMenuOpen && (
        <>
          {/* Shop Dropdown Menu */}
          {isShopOpen && (
            <div 
              className="absolute w-full bg-[#f2ebdf] shadow-lg z-50 hidden md:block"
              onMouseEnter={handleShopEnter}
              onMouseLeave={handleShopLeave}
            >
              <div className="max-w-7xl mx-auto p-8 flex">
                <div className="w-1/4 border-r pr-8">
                  <div 
                    className={`py-2 px-4 cursor-pointer ${activeCategory === 'variety-packs' ? 'text-pink-500' : 'text-blue-900'}`}
                    onMouseEnter={() => setActiveCategory('variety-packs')}
                  >
                    VARIETY PACKS
                  </div>
                  <div 
                    className={`py-2 px-4 cursor-pointer ${activeCategory === 'flavors' ? 'text-pink-500' : 'text-blue-900'}`}
                    onMouseEnter={() => setActiveCategory('flavors')}
                  >
                    FLAVORS
                  </div>
                  <div 
                    className={`py-2 px-4 cursor-pointer ${activeCategory === 'gifts' ? 'text-pink-500' : 'text-blue-900'}`}
                    onMouseEnter={() => setActiveCategory('gifts')}
                  >
                    GIFTS
                  </div>
                  <button className="mt-4 ml-4 px-6 py-2 bg-pink-500 text-white rounded-md">
                    SHOP ALL
                  </button>
                </div>

                <div className="w-3/4 pl-8">
                  <div className="grid grid-cols-3 gap-8">
                    {shopItems[activeCategory].map((item, index) => (
                      <div key={index} className="text-center cursor-pointer">
                        <div className={`p-8 rounded-lg mb-4`}>
                          <img src={item.image} alt={item.title} className="w-full h-auto rounded-2xl" />
                        </div>
                        <h3 className="text-blue-900 font-bold">{item.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Learn Dropdown Menu */}
          {isLearnOpen && (
            <div 
              className="absolute w-full bg-[#f2ebdf] shadow-lg z-50 hidden md:block"
              onMouseEnter={handleLearnEnter}
              onMouseLeave={handleLearnLeave}
            >
              <div className="max-w-7xl mx-auto p-8">
                <div className="grid grid-cols-3 gap-8">
                  {learnItems.map((item, index) => (
                    <div key={index} className="text-center cursor-pointer">
                      <div className={`relative rounded-3xl overflow-hidden aspect-square ${item.bgColor} mb-4 group hover:opacity-90 transition-opacity`}>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      </div>
                      <h3 className="text-blue-900 font-bold text-xl">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar2;