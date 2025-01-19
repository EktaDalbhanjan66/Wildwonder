import React from 'react';

const ingredientData = [
  {
    title: "LIVE PROBIOTICS",
    description: "Bacillus subtilis is a resilient strain of good bacteria, clinically proven to withstand the harsh environment of the stomach to reach your gut.",
    image: "https://drinkwildwonder.com/cdn/shop/files/Rectangle_155.png?crop=center&height=300&v=1708534788&width=300",
    bgColor: "bg-yellow-400"
  },
  {
    title: "PREBIOTIC FIBER",
    description: "Our proprietary blend of fiber-rich jerusalem artichoke and chicory root inulin is like a superfood for your good gut bacteria.",
    image: "https://drinkwildwonder.com/cdn/shop/files/d4f5c339c56dcee117a0d2e59adf6a6d.jpg?crop=center&height=300&v=1708534853&width=300",
    bgColor: "bg-pink-200"
  },
  {
    title: "RASPBERRY",
    description: "Ripe California raspberries are rich in vitamins C and K and may support heart health.",
    image: "https://drinkwildwonder.com/cdn/shop/files/Rectangle_174_61422c4b-0c9c-4e17-9b2b-bde095183b95.png?crop=center&height=300&v=1708636431&width=300",
    bgColor: "bg-yellow-400"
  },
  {
    title: "LYCHEE",
    description: "Tropical lychees sourced from Madagascar have a sweet and slightly floral profile and are packed with antioxidants.",
    image: "https://drinkwildwonder.com/cdn/shop/files/922cb1750c394b0993a604419aef199f.jpg?crop=center&height=300&v=1708636484&width=300",
    bgColor: "bg-pink-500"
  },
  {
    title: "HONEYSUCKLE",
    description: "Honeysuckle flowers are known for their sweet nectar, plus anti-inflammatory and antimicrobial properties.",
    image: "https://drinkwildwonder.com/cdn/shop/files/cf27851125e39f8a167a84ce4dc697db.jpg?crop=center&height=300&v=1708636520&width=300",
    bgColor: "bg-pink-200"
  }
];

const ProductBreakdown = () => {
  return (
    <div className="bg-[#c4ebf3] p-8 max-w-full mx-auto">
      <h1 className="text-4xl font-bold text-indigo-900 text-center mb-12">
        A PEEK INSIDE RASPBERRY LYCHEE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {ingredientData.map((ingredient, index) => (
          <div key={index} className="flex flex-col">
            <div className={`rounded-lg overflow-hidden mb-4 aspect-square ${ingredient.bgColor}`}>
              <img
                src={ingredient.image}
                alt={ingredient.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-indigo-900 font-bold text-lg mb-2">
              {ingredient.title}
            </h2>
            <p className="text-indigo-900 text-sm">
              {ingredient.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-indigo-900 text-center text-xs mt-8">
        These statements have not been evaluated by the Food and Drug Administration. 
        This product is not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  );
};

export default ProductBreakdown;