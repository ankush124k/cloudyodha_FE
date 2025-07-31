import React from 'react';
import { ClipboardCheck, LayoutTemplate, Rocket, BarChart3 } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Assessment & Planning',
    description: 'We analyze your current systems and business goals to create a tailored DevOps and cloud strategy.',
    icon: ClipboardCheck,
    color: 'text-pink-500',
    bgColor: 'bg-pink-100',
    align: 'right',
  },
  {
    step: 2,
    title: 'Design & Integration',
    description: 'We design the architecture and integrate the necessary tools, ensuring seamless integration with your existing infrastructure.',
    icon: LayoutTemplate,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
    align: 'left',
  },
  {
    step: 3,
    title: 'Implementation & Automation',
    description: 'We set up DevOps pipelines, automate processes, and implement cloud solutions for faster, more efficient delivery.',
    icon: Rocket,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-100',
    align: 'right',
  },
  {
    step: 4,
    title: 'Monitoring & Optimization',
    description: 'We monitor performance and optimize your systems to ensure scalability, security, and continued efficiency.',
    icon: BarChart3,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    align: 'left',
  },
];

const StepCard = ({ step, title, description }) => (
  <div className="bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg p-6 w-full">
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ImplementationProcess = () => {
  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Streamlined Implementation Process
          </h2>
        </div>

        <div className="relative">
          {/* Decorative S-Curve Path */}
          <div aria-hidden="true" className="absolute inset-0 hidden md:flex items-center justify-center">
            <svg width="404" height="100%" viewBox="0 0 404 940" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
              <defs>
                <linearGradient id="path-gradient" x1="202" y1="0" x2="202" y2="940" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F472B6" />
                  <stop offset="0.33" stopColor="#FBBF24" />
                  <stop offset="0.66" stopColor="#34D399" />
                  <stop offset="1" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
              <path d="M202 0V60C202 115.748 157.748 160 102 160H2C1.44772 160 1 160.448 1 161V309C1 310.105 1.89543 311 3 311H102C157.748 311 202 355.252 202 411V529C202 584.748 246.252 629 302 629H401C402.105 629 403 629.895 403 631V779C403 779.552 402.552 780 402 780H302C246.252 780 202 824.252 202 880V940" 
                    stroke="url(#path-gradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="relative">
            {processSteps.map(({ step, title, description, icon: Icon, color, bgColor, align }) => {
              const isLeft = align === 'left';
              return (
                <div key={step} className={`flex ${isLeft ? 'md:flex-row-reverse' : 'flex-row'} items-center w-full mb-8 md:mb-0`}>
                  {/* Card */}
                  <div className="w-full md:w-5/12 px-2">
                    <div className={`md:transform ${isLeft ? 'md:translate-x-8' : 'md:-translate-x-8'}`}>
                      <div className="bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg p-6">
                        <div className="flex items-center mb-4">
                          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${bgColor} ${color} font-bold text-lg mr-4`}>
                            {step}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer & Icon */}
                  <div className="hidden md:w-2/12 md:flex justify-center">
                    <div className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center shadow-xl z-10`}>
                      <Icon className={`w-10 h-10 ${color}`} />
                    </div>
                  </div>
                  
                  {/* Mobile Spacer */}
                  <div className="w-full md:w-5/12 px-2 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;
