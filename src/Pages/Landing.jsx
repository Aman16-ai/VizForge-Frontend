import React from 'react'
import hero from '../assets/hero.png'

import featureImg1 from '../assets/dprocess.png'; // Feature image 1
import featureImg2 from '../assets/mlmodel.png'; // Feature image 2
import testimonialImg from '../assets/hero.png'; // Testimonial image
export default function Landing() {
  return (
    <div>
      <div className='w-full bg-white  flex border-2'>
      <div className='w-[60%] flex flex-col items-end'>
         <div className=' mt-20 mr-11'>
            <h2 className='text-7xl font-semibold'>Your data. Your AI.</h2>
            <h2 className='text-7xl font-semibold'>Your future.</h2>
            <h3 className='text-3xl mt-10 '>Own them all on the new data intelligence platform</h3>
         </div>
      </div>
      <div className='w-[40%] mb-20'>
          <img className='w-[350px] mt-20 ml-5' src={hero} alt="" />
      </div>
    </div>

    <div className="w-full bg-white py-20">
        <h2 className="text-5xl font-bold text-center">Features</h2>
        <div className="flex justify-around mt-10">
          <div className="w-[30%] text-center">
            <img src={featureImg1} alt="Feature 1" className="w-full h-64 object-contain mb-4" />
            <h3 className="text-2xl font-semibold">Automated Data Processing</h3>
            <p className="mt-4 text-lg">
              Streamline your data with our cutting-edge automated data processing tools, designed to handle large datasets with ease.
            </p>
          </div>
          <div className="w-[30%] text-center">
            <img src={featureImg2} alt="Feature 2" className="w-full h-64 object-contain mb-4" />
            <h3 className="text-2xl font-semibold">AI Model Building</h3>
            <p className="mt-4 text-lg">
              Build and deploy sophisticated AI models without writing a single line of code.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-gray-100 py-20">
        <h2 className="text-5xl font-bold text-center">How It Works</h2>
        <div className="flex justify-around mt-10">
          <div className="w-[30%] text-center">
            <h3 className="text-2xl font-semibold">1. Upload Your Data</h3>
            <p className="mt-4 text-lg">
              Easily upload your datasets in various formats for quick analysis.
            </p>
          </div>
          <div className="w-[30%] text-center">
            <h3 className="text-2xl font-semibold">2. Customize Your AI Models</h3>
            <p className="mt-4 text-lg">
              Customize model parameters to suit your specific needs.
            </p>
          </div>
          <div className="w-[30%] text-center">
            <h3 className="text-2xl font-semibold">3. Deploy and Monitor</h3>
            <p className="mt-4 text-lg">
              Deploy your models with a click and monitor performance in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-white py-20">
        <h2 className="text-5xl font-bold text-center">Testimonials</h2>
        <div className="flex justify-center mt-10">
          <div className="w-[40%] text-center">
            <img src={testimonialImg} alt="Testimonial" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <p className="text-xl italic">"This platform revolutionized the way we handle data science projects. It's intuitive and powerful."</p>
            <p className="mt-4 font-semibold">- John Doe, Data Scientist</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="w-full bg-gray-100 py-20">
        <h2 className="text-5xl font-bold text-center">Pricing</h2>
        <div className="flex justify-around mt-10">
          <div className="w-[30%] text-center border border-gray-300 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Free Plan</h3>
            <p className="mt-4 text-lg">Basic features to get you started.</p>
            <p className="mt-4 text-4xl font-bold">$0/month</p>
            <button className="mt-10 py-2 px-4 bg-blue-600 text-white rounded-full text-xl">
              Sign Up
            </button>
          </div>
          <div className="w-[30%] text-center border border-gray-300 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Pro Plan</h3>
            <p className="mt-4 text-lg">Advanced features for professionals.</p>
            <p className="mt-4 text-4xl font-bold">$49/month</p>
            <button className="mt-10 py-2 px-4 bg-blue-600 text-white rounded-full text-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-blue-600 py-20 text-white text-center">
        <h2 className="text-5xl font-bold">Ready to Transform Your Data?</h2>
        <p className="mt-6 text-2xl">
          Sign up today and start your journey with our AI-powered platform.
        </p>
        <button className="mt-10 py-4 px-8 bg-white text-blue-600 rounded-full text-2xl">
          Get Started Now
        </button>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 py-10 text-white text-center">
        <p className="text-lg">© 2024 Data Intelligence Platform. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-4 text-blue-400">Privacy Policy</a>
          <a href="#" className="mx-4 text-blue-400">Terms of Service</a>
          <a href="#" className="mx-4 text-blue-400">Contact Us</a>
        </div>
      </footer>
    </div>
  )
}
