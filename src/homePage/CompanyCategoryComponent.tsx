import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const CompanyCategoryComponent= ({companyData, companyIndex}: {
  companyIndex: number;
  companyData: any;
}) => {
  const [selectedCategory, setSelectedCategory] = useState(companyData.potentialValues[0].title);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Company Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{companyData.companyName}</h3>
        <div className="flex gap-4 mt-2 text-sm text-gray-600">
          <span>{companyData.industry}</span>
          <span>•</span>
          <span>{companyData.location}</span>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Category Buttons - Left Side */}
        <div className="w-1/3 space-y-3">
          {companyData.potentialValues.map((value) => (
            <button
              key={value.title}
              onClick={() => setSelectedCategory(value.title)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                selectedCategory === value.title
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-sm'
                  : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
              }`}
            >
              <h4 className="font-medium text-gray-900">{value.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{value.shortDescription}</p>
            </button>
          ))}
        </div>

        {/* Category Details - Right Side */}
        <div className="w-2/3">
          {selectedCategory ? (
            <div className="bg-gray-50 rounded-xl p-6 animate-fadeIn">
              {companyData.potentialValues
                .filter((value) => value.title === selectedCategory)
                .map((value) => (
                  <div key={value.title} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.shortDescription}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Key Points</h4>
                      <ul className="space-y-2">
                        {value.details.pitchDeck.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Email Pitch</h4>
                      <p className="text-gray-700 bg-white rounded-lg p-4 border border-gray-200">
                        {value.details.emailPitch}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a category to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyCategoryComponent;
