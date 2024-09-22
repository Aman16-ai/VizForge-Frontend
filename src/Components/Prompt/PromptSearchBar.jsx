import React, { useState } from 'react';

const PromptSearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    console.log('Search value:', inputValue);
    alert(`You searched for: ${inputValue}`);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[70%] h-[70px]">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Ask from your data..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-[70px] py-3 px-5 pl-12 text-lg bg-white border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
        />

        {/* Icon Inside Input */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16l4-4m0 0l4-4m-4 4h12M4 8v12a2 2 0 002 2h12M16 8H4"
            />
          </svg>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default PromptSearchBar;
