import React from 'react';
import collabroationImage from "../assests/improve collabroation.jpeg"
import higherQuality from "../assests/higher quality .jpeg"
import efficiencyImage from "../assests/efficiency.jpeg"
import fasterTimeToMarketImage from "../assests/faster time to market.jpeg"
import costReductionImage from "../assests/cost reduction.jfif"

const benefitsData = [
  {
    title: 'Faster Time-To-Market',
    description: 'By automating and streamlining development processes, DevOps enables quicker release cycles, allowing you to deliver products and updates faster, keeping you ahead of the competition.',
    imageUrl: fasterTimeToMarketImage
  },
  {
    title: 'Improved Collaboration',
    description: 'DevOps fosters collaboration between development and operations teams, breaking down silos and ensuring more cohesive and efficient workflows, ultimately driving innovation.',
    imageUrl: collabroationImage
  },
  {
    title: 'Increased Efficiency & Automation',
    description: 'With automated pipelines and reduced manual tasks, DevOps boosts operational efficiency, ensuring tasks are done faster, with fewer errors, and more predictably.',
    imageUrl: efficiencyImage
  },
  {
    title: 'Higher Quality and Reliability',
    description: 'Frequent testing, continuous monitoring, and automated checks improve the quality of code, reducing bugs and downtime, while ensuring a more stable and reliable product.',
    imageUrl:higherQuality
  },
  {
    title: 'Cost Reduction',
    description: 'By improving processes and utilizing resources efficiently, DevOps reduces overhead costs. Automation minimizes manual interventions, while optimized cloud infrastructure ensures you\'re not overspending.',
    imageUrl: costReductionImage
  },
  {
    title: 'Scalability & Flexibility',
    description: 'DevOps practices provide the agility to scale your infrastructure effortlessly, whether it\'s on-premise or in the cloud, adapting quickly to changing demands without compromising performance.',
    imageUrl: 'https://images.pexels.com/photos/18472235/pexels-photo-18472235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const BenefitCard = ({ title, description, imageUrl }: typeof benefitsData[0]) => (
  <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col animate-fade-in-up">
    <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  </div>
);

const BusinessBenefits = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            How DevOps Consulting Helps Your Business
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
