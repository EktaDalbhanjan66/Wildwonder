import React, { useState } from "react";

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const nutrientFacts = [
    { label: "Serving Size", value: "1 can" },
    { label: "Calories", value: "40" },
    { label: "Total Fat", value: "0g" },
    { label: "Sodium", value: "0mg" },
    { label: "Total Carbohydrates", value: "12g" },
    { label: "Dietary Fiber", value: "5g" },
    { label: "Total Sugars", value: "6g" },
    { label: "Protein", value: "0g" },
  ];

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setActiveTab("benefits")}
          className={`py-2 px-4 rounded-t-lg font-bold text-[#2a347b] ${
            activeTab === "benefits" ? "bg-[#ddf1f7]" : "bg-[#ddf1f7]"
          }`}
        >
          BENEFITS
        </button>
        <button
          onClick={() => setActiveTab("ingredients")}
          className={`py-2 px-4 rounded-t-lg font-bold text-[#2a347b] ${
            activeTab === "ingredients" ? "bg-[#d1dc95]" : "bg-[#d1dc95]"
          }`}
        >
          INGREDIENTS
        </button>
        <button
          onClick={() => setActiveTab("nutrition")}
          className={`py-2 px-4 rounded-t-lg font-bold text-[#2a347b] ${
            activeTab === "nutrition" ? "bg-[#fce281]" : "bg-[#fce281]"
          }`}
        >
          NUTRITION FACTS
        </button>
      </div>

      {/* Content Sections */}
      {activeTab === "benefits" && (
        <div className="bg-[#ddf1f7] rounded-xl p-6">
          <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://drinkwildwonder.com/cdn/shop/files/Group_65.png?v=1708449515&width=150"
                alt="USDA Organic"
                className="w-16 h-16 mb-2"
              />
              <span className="text-[#2a347b] text-sm font-semibold">
                CERTIFIED
                <br />
                ORGANIC
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://drinkwildwonder.com/cdn/shop/files/probiotics_40314dfe-7c55-4822-a254-6e4b5f3ee88b.png?v=1708967690&width=150"
                alt="Probiotics"
                className="w-16 h-16 mb-2"
              />
              <span className="text-[#2a347b] text-sm font-semibold">
                1 BILLION
                <br />
                PROBIOTICS
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://drinkwildwonder.com/cdn/shop/files/Fiber.png?v=1708967691&width=150"
                alt="Dietary Fiber"
                className="w-16 h-16 mb-2"
              />
              <span className="text-[#2a347b] text-sm font-semibold">
                5g DIETARY
                <br />
                FIBER
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://drinkwildwonder.com/cdn/shop/files/Sugar_5e41475b-e41d-4002-857b-dcf3fd24a07d.png?v=1708967690&width=150"
                alt="Sugar"
                className="w-16 h-16 mb-2"
              />
              <span className="text-[#2a347b] text-sm font-semibold">
                6g SUGAR
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://drinkwildwonder.com/cdn/shop/files/gmo.png?v=1708967690&width=150"
                alt="GMO Free"
                className="w-16 h-16 mb-2"
              />
              <span className="text-[#2a347b] text-sm font-semibold">
                GMO Free
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://drinkwildwonder.com/cdn/shop/files/vegan_f7f171f8-a325-41c8-9792-4864061ac27c.png?v=1708967690&width=150"
                alt="Vegan"
                className="w-16 h-16 mb-2"
              />
              <span className="text-[#2a347b] text-sm font-semibold">
                Vegan
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "ingredients" && (
        <div className="bg-[#d1dc95] rounded-xl p-6">
          <h3 className="text-[#2a347b] text-xl font-bold">Raspberry Lychee</h3>
          <p className="text-[#2a347b]">
            Fresh Brewed Honeysuckle* (Filtered Water, Honeysuckle Flowers*),
            Raspberry Puree*, Agave Nectar*, Lychee Juice*, Jerusalem
            Artichoke*, Lemon Juice*, Raspberry Flavor*, Chicory Root Inulin,
            Lychee Flavor*, Monk Fruit Extract*, Live Probiotics (Bacillus
            subtilis) (*organic)
          </p>
        </div>
      )}

      {activeTab === "nutrition" && (
        <div className="bg-[#fce281] rounded-xl p-6">
            {
                nutrientFacts.map((fact, index) => (
                  <>
                   <div key={index} className="flex flex-row justify-between">
            <span className="text-[#2a347b] font-bold">{fact.label}</span>
            <span className="text-[#2a347b] font-bold">{fact.value}</span>
          </div>
          <hr className="border-t-2 border-[#2a347b] mt-2" /></>
                ))
            }
         
        </div>
      )}
    </div>
  );
};

export default BenefitsSection;
