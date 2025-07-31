import React from 'react';
import { CloudCog, Sliders, Network, History, ServerCog, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: CloudCog,
    title: "Seamless Cloud Migrations with Zero Downtime",
    description: "Our team specializes in smooth, efficient cloud migrations that minimize risk and avoid business interruptions, ensuring your operations continue running seamlessly throughout the process."
  },
  {
    icon: Sliders,
    title: "Tailored DevOps & Cloud Strategies",
    description: "We don't just offer generic solutions—we design custom DevOps and cloud strategies that align perfectly with your business goals, ensuring maximum impact and efficiency."
  },
  {
    icon: Network,
    title: "Proven Expertise in Multi-Cloud Environments",
    description: "With in-depth experience across all major cloud platforms—AWS, Azure, and Google Cloud—we provide a flexible and scalable cloud environment, allowing you to leverage the best features of each platform."
  },
  {
    icon: History,
    title: "End-to-End Automation for Faster Time-to-Market",
    description: "From development to deployment, we fully automate your workflows, enabling faster releases and reduced time-to-market—without compromising on quality or security."
  },
  {
    icon: ServerCog,
    title: "Scalable Infrastructure for Business Growth",
    description: "We design cloud infrastructures that scale with your business, ensuring that as your needs grow, your systems expand effortlessly to handle increased traffic, data, and user demand."
  },
  {
    icon: ShieldCheck,
    title: "Built-in Security at Every Step",
    description: "Security is integrated directly into our DevOps pipeline, from coding to deployment, providing robust protection against vulnerabilities and ensuring compliance with industry standards."
  }
];

const ServiceCard = ({ icon: Icon, title, description, index }: typeof services[0] & { index: number }) => (
  <div 
    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:border-brand-blue hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col animate-fade-in-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="mb-6">
      <Icon className="w-12 h-12 text-brand-blue" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Why Choose Us For Your DevOps Consulting Services In India?
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
