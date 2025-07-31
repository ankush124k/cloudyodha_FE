import React, { useState } from 'react';
import { clsx } from 'clsx';

const techData = {
  'Cloud Platforms': [
    { name: 'AWS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Azure', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
    { name: 'Google Cloud', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  ],
  'CI/CD & Automation': [],
  'Configuration Management': [],
  'Containerization & Orchestration': [],
  'Infrastructure as Code (IaC)': [],
  'Monitor': [],
};

const tabs = Object.keys(techData);

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Tech Stack For DevOps And Cloud Solutions
          </h2>
        </div>

        <div className="mt-16">
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  'px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green',
                  {
                    'bg-brand-green text-white shadow-md': activeTab === tab,
                    'bg-gray-100 text-gray-600 hover:bg-gray-200': activeTab !== tab,
                  }
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {techData[activeTab].length > 0 ? (
              techData[activeTab].map((tech) => (
                <div key={tech.name} className="bg-white border border-gray-200 rounded-2xl p-8 flex items-center justify-center shadow-sm hover:shadow-xl transition-shadow duration-300 h-40">
                  <img src={tech.logoUrl} alt={tech.name} className="max-h-12 w-auto" />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">Tools and technologies for this category will be listed soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
