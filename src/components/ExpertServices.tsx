import React from 'react';
import ciCdImage from '../assests/1.jfif'
import cloudInfrastructureImage from "../assests/2.jfif"
import automationImage from "../assests/3.jfif"
import counsultingImage from "../assests/4.jpeg"
import monitoringImage from "../assests/5.jfif"
import efficiencyImage from "../assests/efficiency.jpeg"

const servicesData = [
  {
    number: '1',
    title: 'Continuous Integration & Continuous Deployment (CI/CD)',
    description: 'We help you automate the process of code integration and deployment through robust CI/CD pipelines, ensuring faster, more reliable releases. This allows your teams to focus on development while automation handles testing, builds, and deployments, reducing manual errors and speeding up time-to-market.',
    imageUrl: ciCdImage
  },
  {
    number: '2',
    title: 'Cloud Infrastructure Management',
    description: 'We specialize in designing, deploying, and managing cloud infrastructures (AWS, Azure, Google Cloud) that are scalable, secure, and cost-efficient. Our cloud management services ensure optimal performance, high availability, and smooth scaling as your business grows.',
    imageUrl:cloudInfrastructureImage
  },
  {
    number: '3',
    title: 'Automation & Configuration Management',
    description: 'Our automation services streamline your software delivery process, from provisioning environments to managing configurations. We use tools like Ansible, Puppet, and Chef to reduce manual intervention, enhance productivity, and ensure consistency across your infrastructure.',
    imageUrl: automationImage
  },
  {
    number: '4',
    title: 'DevOps Consulting & Strategy',
    description: 'Our core focus is delivering top-tier DevOps consulting services in India. Our team works with you to define a tailored DevOps strategy, aligning it with your business goals to improve collaboration, reduce time-to-market, and increase overall operational efficiency.',
    imageUrl: counsultingImage
  },
  {
    number: '5',
    title: 'Monitoring & Performance Optimization',
    description: 'We offer real-time monitoring and performance tuning to proactively identify bottlenecks, optimize resource utilization, and ensure your systems are running efficiently. Our continuous monitoring solutions guarantee uptime and support seamless scalability as demand grows.',
    imageUrl: monitoringImage
  },
  {
    number: '6',
    title: 'Security Integration in DevOps (DevSecOps)',
    description: 'We implement security practices early in the development cycle to reduce vulnerabilities and ensure that your applications meet security standards. Through automated testing and regular audits, we help secure your code and infrastructure at every step of the way.',
    imageUrl: efficiencyImage
  }
];

const ServiceItem = ({ number, title, description, imageUrl, index }: typeof servicesData[0] & { index: number }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center animate-fade-in-up">
      <div className={`flex justify-center ${isReversed ? 'lg:order-last' : ''}`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="rounded-2xl shadow-2xl object-cover w-full max-w-md lg:max-w-none h-auto aspect-[4/3] transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-start gap-5">
          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 font-bold text-xl rounded-full mt-1">
            {number}
          </span>
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-snug">{title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpertServices = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Expert DevOps Consulting Services
          </h2>
        </div>
        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <ServiceItem key={service.number} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertServices;
