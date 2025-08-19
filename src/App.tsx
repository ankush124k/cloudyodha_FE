import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ExpertServices from './components/ExpertServices';
import TechStack from './components/TechStack';
import ImplementationProcess from './components/ImplementationProcess';
import BusinessBenefits from './components/BusinessBenefits';
import HiringModels from './components/HiringModels';
import IndustrySolutions from './components/IndustrySolutions';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white w-full overflow-x-hidden antialiased">
      {/* Section 1: Hero and Header with dark background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020418] via-[#050b29] to-[#020418] z-0">
          <div 
            className="absolute inset-0 opacity-[0.15]" 
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </div>

      {/* Page Content */}
      <main>
        <section id='why-us'>
        <WhyChooseUs />
        </section>

        <section id='services'>
        <ExpertServices />
        </section>

        <section id='devOps'>
        <TechStack />
        <ImplementationProcess />
        <BusinessBenefits />
        </section>

        <HiringModels />
        <IndustrySolutions />
        <FaqSection />
        <CtaSection />
      </main>

        <section id='aboutUs'>
          <Footer />
        </section>
    </div>
  );
}

export default App;
