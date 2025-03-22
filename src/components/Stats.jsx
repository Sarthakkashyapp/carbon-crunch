import React from 'react';

const Stats = () => {
  return (
    <section className="py-8 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="text-4xl font-bold mb-2">98%</div>
          <p className="text-sm">Accuracy in carbon footprint calculations compared to industry standards</p>
        </div>
        
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <div className="text-4xl text-black font-bold mb-2">3X</div>
          <p className="text-sm">Faster reporting and analysis compared to manual calculations</p>
        </div>
        
        <div className="bg-white border border-green-300 p-4 rounded-lg">
          <div className="text-4xl font-bold text-green-600 mb-2">37%</div>
          <p className="text-sm text-gray-600">Of the Global Carbon Companies use our platform for their reports in the last 5 years</p>
        </div>
        
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="text-4xl font-bold mb-2">18%</div>
          <p className="text-sm">Of companies are Carbon neutral certified with our reporting technology</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;