import React from "react";
import ImageSlider from "./ImageSlider";

const EverydayWonders = () => {
  return (
    <div className="bg-blue-100 ">
      {/* Header Section */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-900">CREATE #EVERYDAYWONDERS</h1>
      </header>

<ImageSlider/>
      {/* Footer Section */}
      <footer className="text-center py-4">
        <button className="bg-pink-600 text-white py-4 px-8 rounded-lg hover:bg-pink-700 transition">
          FOLLOW @drinkwildwonder
        </button>
      </footer>
    </div>
  );
};

export default EverydayWonders;
