// src/Home.js
import React from 'react';
import heroImage from '../assets/hero.png'; // Ensure you have an image at this path
import logo1 from '../assets/react.svg';
import logo2 from '../assets/react.svg';
import logo3 from '../assets/react.svg';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

// FeatureCard Component
const FeatureCard = ({ title, description, icon }) => (
  <div className="w-80 p-6 bg-gray-700 rounded-lg shadow-lg flex flex-col items-center text-center">
    <img src={icon} alt={title} className="w-16 mb-4"/>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

// TestimonialCard Component
const TestimonialCard = ({ text, author, position }) => (
  <div className="w-80 p-6 bg-gray-600 rounded-lg shadow-lg flex flex-col items-center text-center">
    <p className="italic mb-4">"{text}"</p>
    <p className="font-semibold">{author}</p>
    <p className="text-gray-400">{position}</p>
  </div>
);

export default Home;
