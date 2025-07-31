import React from 'react';

const hiringModels = [
  {
    title: 'Project-Based Hiring',
    description: "Hire us for specific, time-bound projects. Whether it's a cloud migration, setting up CI/CD pipelines, or implementing DevOps best practices, we work with you on short-term engagements to deliver focused results within your timeline.",
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Dedicated Team Hiring',
    description: 'If you need ongoing support, hire a dedicated team of DevOps and cloud experts. This model allows you to scale your team based on project requirements, with a flexible, committed team that integrates seamlessly with your internal team.',
    imageUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Staff Augmentation',
    description: 'Whether for short-term projects or long-term engagements, augment your in-house team with our skilled DevOps and cloud professionals. This flexible model allows you to access full-time or part-time experts for a defined period without the overhead of permanent hiring.',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const HiringModels = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Flexible Hiring Models to Suit Your Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {hiringModels.map((model, index) => (
            <div 
              key={index} 
              className="bg-blue-50/50 rounded-2xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{model.title}</h3>
                <p className="text-gray-600 leading-relaxed">{model.description}</p>
              </div>
              <div className="h-56">
                <img 
                  src={model.imageUrl} 
                  alt={model.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringModels;
