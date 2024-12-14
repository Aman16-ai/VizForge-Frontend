import React from 'react';
import hero from '../assets/hero.png';
import featureImg1 from '../assets/dprocess.png';
import featureImg2 from '../assets/mlmodel.png';
import testimonialImg from '../assets/hero.png';
import lv from "../assets/lv.mp4";

const SectionHeader = ({ children, className = "" }) => (
  <h2 className={`text-4xl md:text-5xl font-bold text-center text-white ${className}`}>
    {children}
  </h2>
);

const Button = React.memo(({ children, variant = "primary", className = "", onClick }) => {
  const baseStyles = "py-2 px-6 rounded-full text-lg md:text-xl transition-all duration-300 hover:transform hover:scale-105";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-800 text-white hover:bg-gray-900 border border-gray-600"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

const FeatureCard = React.memo(({ image, title, description }) => (
  <div className="w-full md:w-[45%] lg:w-[30%] text-center p-4 bg-gray-800 rounded-lg shadow-xl">
    <img src={image} alt={title} className="w-full h-48 md:h-64 object-contain mb-4" />
    <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
    <p className="mt-4 text-base md:text-lg text-gray-300">{description}</p>
  </div>
));

const PricingCard = React.memo(({ title, description, price }) => (
  <div className="w-full md:w-[45%] lg:w-[30%] text-center border border-gray-600 p-6 md:p-8 rounded-lg shadow-xl bg-gray-800 transition-transform duration-300 hover:scale-105 mb-6 md:mb-0">
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
    <p className="mt-4 text-lg text-gray-300">{description}</p>
    <p className="mt-4 text-4xl font-bold text-blue-400">{price}</p>
    <Button className="mt-8">Get Started</Button>
  </div>
));

const HeroSection = () => (
  <div className="relative overflow-hidden min-h-screen"> {/* Kept min-h-screen */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src={lv} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div className="relative z-10 bg-black bg-opacity-80 min-h-screen flex items-center justify-center"> {/* Center content horizontally */}
      <div className="text-center px-4 md:px-8 py-10 md:py-20">
        <div className="max-w-2xl mx-auto"> {/* Centered horizontally */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
            Your data. Your AI.<br />Your future.
          </h1>
          <h2 className="text-xl md:text-3xl mt-6 text-gray-300">
            Own them all on the new data intelligence platform
          </h2>
        </div>
      </div>
    </div>
  </div>
);



const FeaturesSection = () => (
  <section id="features" className="w-full py-16 px-4 md:px-8 bg-gray-700">
    <SectionHeader>Features</SectionHeader>
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      <FeatureCard
        image={featureImg1}
        title="Automated Data Processing"
        description="Streamline your data with our cutting-edge automated data processing tools, designed to handle large datasets with ease."
      />
      <FeatureCard
        image={featureImg2}
        title="AI Model Building"
        description="Build and deploy sophisticated AI models without writing a single line of code."
      />
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section id="how-it-works" className="w-full bg-gray-800 py-16 px-4 md:px-8">
    <SectionHeader>How It Works</SectionHeader>
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {[
        {
          title: "1. Upload Your Data",
          description: "Easily upload your datasets in various formats for quick analysis."
        },
        {
          title: "2. Customize Your AI Models",
          description: "Customize model parameters to suit your specific needs."
        },
        {
          title: "3. Deploy and Monitor",
          description: "Deploy your models with a click and monitor performance in real-time."
        }
      ].map((step, index) => (
        <div key={index} className="w-full md:w-[30%] text-center p-4">
          <h3 className="text-xl md:text-2xl font-semibold text-white">{step.title}</h3>
          <p className="mt-4 text-base md:text-lg text-gray-300">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="w-full bg-gray-700 py-16 px-4 md:px-8">
    <SectionHeader>Testimonials</SectionHeader>
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-2xl text-center bg-gray-800 p-8 rounded-lg shadow-xl">
        <img 
          src={testimonialImg} 
          alt="Testimonial" 
          className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <p className="text-lg md:text-xl italic text-gray-300">
          "This platform revolutionized the way we handle data science projects. It's intuitive and powerful."
        </p>
        <p className="mt-4 font-semibold text-blue-400">- John Doe, Data Scientist</p>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="w-full bg-gray-800 py-16 px-4 md:px-8">
    <SectionHeader>Pricing</SectionHeader>
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      <PricingCard
        title="Free Plan"
        description="Basic features to get you started."
        price="$0/month"
      />
      <PricingCard
        title="Pro Plan"
        description="Advanced features for professionals."
        price="$49/month"
      />
    </div>
  </section>
);

const CallToActionSection = () => (
  <section className="w-full bg-gray-900 py-16 px-4 md:px-8 text-white text-center">
    <h2 className="text-3xl md:text-5xl font-bold">Ready to Transform Your Data?</h2>
    <p className="mt-6 text-xl md:text-2xl text-gray-300">
      Sign up today and start your journey with our AI-powered platform.
    </p>
    <Button variant="primary" className="mt-8">
      Get Started Now
    </Button>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-gray-900 py-8 px-4 md:px-8 text-gray-300 text-center">
    <p className="text-base md:text-lg">© 2024 Data Intelligence Platform. All rights reserved.</p>
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
      <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
      <a href="#" className="text-blue-400 hover:text-blue-300">Contact Us</a>
    </div>
  </footer>
);

export default function Landing() {
  return (
    <div className="overflow-x-hidden bg-gray-700">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}