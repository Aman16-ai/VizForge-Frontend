import React, { useState, useEffect, useRef } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

export const ThreeDotsMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target) && 
          !buttonRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleItemClick = (action) => (e) => {
    e.stopPropagation();
    action();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleMenuClick}
        className="p-1 hover:bg-gray-100 rounded-full"
      >
        <BsThreeDotsVertical />
      </button>
      
      {isOpen && (
        <div 
          ref={menuRef}
          className="absolute right-0 top-8 bg-white shadow-lg rounded-lg w-40 z-50"
        >
          <ul className="py-1">
            {items.map(({ label, onClick }, index) => (
              <li 
                key={index}
                onClick={handleItemClick(onClick)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};