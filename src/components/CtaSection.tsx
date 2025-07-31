import React from 'react';

const CtaSection = () => {
  return (
    <section className="relative bg-gray-900">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
      ></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-8 animate-fade-in-up">
          Get India's Leading DevOps Consulting Services Today
        </h2>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="#"
            className="inline-block bg-emerald-500 text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg transform transition duration-300 hover:bg-emerald-600 hover:scale-105"
          >
            Let's Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
