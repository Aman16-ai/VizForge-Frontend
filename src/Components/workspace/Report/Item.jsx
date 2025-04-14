import React from "react";

export default function Item({tab}) {
    const handleTabClick = (path) => {
        // Assuming you have a function to navigate to the path
        // This could be a router function or a custom navigation function
        console.log(`Navigating to ${path}`);
    };
  return (
    <button
      key={tab.name}
      onClick={() => handleTabClick(tab.path)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 transition-transform ${tab.color}`}
    >
      {tab.icon}
      <span>{tab.name}</span>
    </button>
  );
}
