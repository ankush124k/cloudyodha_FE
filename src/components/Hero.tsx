import React from 'react';

const features = [
  { number: 1, text: "End-to-End DevOps & Cloud Solutions" },
  { number: 2, text: "24/7 Monitoring & Support" },
  { number: 3, text: "Faster Software Delivery" },
  { number: 4, text: "Cost-Effective & Agile" },
  { number: 5, text: "Scalable & Secure Infrastructure" },
  { number: 6, text: "Trusted by Leading Businesses" },
];

const FeatureItem = ({ number, text }: { number: number, text: string }) => (
  <div className="flex items-center space-x-4 animate-fade-in-up">
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white font-semibold border border-white/20">
      {number}
    </div>
    <span className="text-gray-300">{text}</span>
  </div>
);

const ContactForm = () => (
  <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-blue-500/10 w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Talk to Our DevOps Experts</h3>
    <form className="space-y-5">
      <InputField placeholder="Name" type="text" />
      <InputField placeholder="Phone Number" type="tel" />
      <InputField placeholder="Email Address" type="email" />
      <InputField placeholder="Company Name" type="text" />
      <InputField placeholder="Job Title" type="text" />
      <div>
        <textarea
          placeholder="Message (Optional)"
          rows={4}
          className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue transition"
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-brand-blue text-white font-bold py-4 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/30">
        Submit
      </button>
    </form>
  </div>
);

const InputField = ({ placeholder, type }: { placeholder: string, type: string }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue transition"
  />
);

const Hero = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <p className="font-semibold text-gray-400 tracking-widest animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            TRANSFORM THE WAY YOU BUILD, DEPLOY AND SCALE
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Top DevOps Consulting Services In India For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Scalable, Secure</span> and Faster Delivery
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Accelerate your digital transformation with expert DevOps consulting services in India. From CI/CD automation to cloud migration and infrastructure management, we help you streamline operations, enhance security, and scale effortlessly.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 pt-6">
            {features.map((feature, index) => (
              <div key={feature.number} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <FeatureItem number={feature.number} text={feature.text} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center lg:justify-end">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
