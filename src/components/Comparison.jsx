import React from 'react';

const ProductComparison = () => {
  const comparisonData = [
    { metric: 'Live Probiotics', wildwonder: '1 billion CFUs', soda: 'X', kombucha: 'X' },
    { metric: 'Fiber', wildwonder: '5g (20% DV)', soda: 'X', kombucha: 'X' },
    { metric: 'Sugar', wildwonder: '6g', soda: '40g', kombucha: '16g' },
    { metric: 'Calories', wildwonder: '35', soda: '160', kombucha: '60' },
    { metric: 'Delicious & Refreshing', wildwonder: 'Yes', soda: 'Sometimes', kombucha: 'No' },
    { metric: 'Organic', wildwonder: 'Yes', soda: 'No', kombucha: 'Sometimes' },
  ];

  return (
    <div className="bg-[#f2ebdf]">
      <div className="max-w-3xl mx-auto p-6 bg-[#f2ebdf]">
        <h1 className="text-center text-2xl font-bold text-navy-900 mb-8">US VS THEM</h1>
        
        <div className="grid grid-cols-4 gap-0 border-2 border-gray-700 rounded-lg overflow-hidden">
          {/* Header Row */}
          <div className="col-span-1 bg-gray-200 p-2 border-r-2 border-gray-700"></div>
          <div className="flex flex-col items-center bg-[#c4ebf3] p-4 border-r-2 border-gray-700">
            <img src="https://drinkwildwonder.com/cdn/shop/files/Botanical.png?height=105&v=1718399818&width=105" alt="" className="mb-2" />
            <div className="text-center text-sm font-medium text-white">wildwonder™</div>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-4 border-r-2 border-gray-700">
          <img src="//drinkwildwonder.com/cdn/shop/files/Vector.png?height=95&v=1708634212" alt="" />
            <div className="text-center text-sm font-medium">Soda</div>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-4">
          
            <img src="//drinkwildwonder.com/cdn/shop/files/kombucha_1.png?height=95&v=1709304013" alt="" />
            <div className="text-center text-sm font-medium">Kombucha</div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((row, index) => (
            <React.Fragment key={index}>
              <div className="font-medium text-navy-900 p-2 bg-gray-200 border-t-2 border-r-2 border-gray-700">{row.metric}</div>
              <div className="text-center p-2 bg-[#c4ebf3] text-white border-t-2 border-r-2 border-gray-700">{row.wildwonder}</div>
              <div className="text-center p-2 bg-gray-200 border-t-2 border-r-2 border-gray-700">{row.soda}</div>
              <div className="text-center p-2 bg-gray-200 border-t-2 border-gray-700">{row.kombucha}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;