import React, { useState } from 'react';
import { clsx } from 'clsx';

const tabsData = [
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    content: 'In the fast-paced world of e-commerce, we help businesses scale with automated DevOps pipelines, secure cloud infrastructure, and continuous delivery practices that ensure maximum uptime and availability for your online stores.',
    imageUrl: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'fintech',
    title: 'Finance & FinTech',
    content: 'We deliver secure, compliant, and scalable solutions for financial institutions and fintech companies, ensuring seamless transactions, data protection, and improved operational efficiency through automated workflows and cloud solutions.',
    imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    content: 'Our DevOps and cloud solutions help healthcare providers enhance patient care by ensuring regulatory compliance, data security, and streamlined collaboration. We enable faster delivery of applications and services in this highly regulated industry.',
    imageUrl: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'media',
    title: 'Media & Entertainment',
    content: 'From content delivery to real-time streaming, we help media companies optimize their operations with cloud platforms and automation. Our solutions ensure high performance, scalability, and security, supporting smooth content distribution and audience engagement.',
    imageUrl: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'software',
    title: 'Technology & Software Development',
    content: 'We empower tech and software development companies by building scalable DevOps pipelines, automating testing and deployment, and optimizing cloud infrastructure to accelerate software releases, ensuring high performance and innovation.',
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Tailored Solutions for Every Industry
          </h2>
        </div>

        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'py-3 px-6 rounded-full text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green',
                {
                  'bg-green-50 text-brand-green border border-brand-green shadow-sm': activeTab === tab.id,
                  'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800': activeTab !== tab.id,
                }
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {activeTabData && (
          <div className="bg-blue-50/50 rounded-2xl p-8 sm:p-12 transition-all duration-500 ease-in-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="animate-fade-in-up">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{activeTabData.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activeTabData.content}</p>
              </div>
              <div>
                <img
                  src={activeTabData.imageUrl}
                  alt={activeTabData.title}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustrySolutions;
