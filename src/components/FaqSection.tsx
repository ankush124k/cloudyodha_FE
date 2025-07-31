import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

const faqData = [
  {
    question: 'What are DevOps Consulting Services and why are they important for businesses in India?',
    answer: 'DevOps Consulting Services streamline and automate the processes between software development and IT teams. In India, they are crucial for businesses aiming to increase speed, efficiency, and quality of software delivery, enabling them to compete in a fast-paced digital market.',
  },
  {
    question: 'How do DevOps Consulting Services improve business performance in India?',
    answer: 'By fostering a culture of collaboration, automating the software delivery lifecycle, and implementing continuous feedback loops, DevOps services lead to faster time-to-market, improved operational stability, and enhanced innovation capacity for Indian businesses.',
  },
  {
    question: 'What are the benefits of cloud adoption through DevOps Consulting in India?',
    answer: 'Cloud adoption with DevOps provides scalability, cost-efficiency, and greater flexibility. For businesses in India, this means reduced infrastructure overhead, improved disaster recovery, and the ability to scale resources on-demand to meet market needs.',
  },
  {
    question: 'Can your team handle end-to-end cloud migration in India?',
    answer: 'Yes, our expert team manages the entire cloud migration process, from initial assessment and planning to execution and post-migration optimization. We ensure a seamless, secure, and efficient transition to the cloud with minimal disruption to your business operations in India.',
  },
  {
    question: 'What tools are used in your DevOps Consulting Services?',
    answer: 'We leverage a wide range of industry-leading tools for CI/CD, infrastructure as code, monitoring, and collaboration. This includes tools like Jenkins, GitLab CI, Docker, Kubernetes, Terraform, Ansible, Prometheus, and Grafana, tailored to your specific needs.',
  },
  {
    question: 'How do I get started with DevOps Consulting Services in India?',
    answer: "Getting started is simple. Contact us for a free consultation. We'll discuss your business goals, assess your current infrastructure, and propose a tailored DevOps strategy to help you achieve your objectives in the Indian market.",
  },
];

const AccordionItem = ({ item, isOpen, onToggle }: { item: typeof faqData[0], isOpen: boolean, onToggle: () => void }) => {
  return (
    <div className="bg-slate-50/70 rounded-lg mb-3 transition-all duration-300 shadow-sm hover:shadow-md">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full p-5 sm:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-800 text-base sm:text-lg">{item.question}</span>
        <ChevronDown
          className={clsx('w-6 h-6 text-gray-700 transition-transform duration-300 shrink-0 ml-4', {
            'transform rotate-180': isOpen,
          })}
        />
      </button>
      <div
        className={clsx('grid transition-all duration-500 ease-in-out', {
          'grid-rows-[1fr] opacity-100': isOpen,
          'grid-rows-[0fr] opacity-0': !isOpen,
        })}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 text-gray-600 leading-relaxed">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              FAQ
            </h2>
            <p className="text-lg text-gray-500">
              Check out our most commonly asked questions to find the information you need.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div>
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
