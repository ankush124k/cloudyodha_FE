import React from 'react';
import { Facebook, Linkedin, Youtube, Layers3 } from 'lucide-react';

const footerData = {
  contact: {
    title: 'Get in Touch',
    address: [
      'Reizend Pvt. Ltd.',
      'SBC 15 - 2 Floor,',
      'Thejaswini building,',
      'Technopark,',
      'Trivandrum, 695581',
    ],
  },
  learnMore: {
    title: 'Learn More',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'AI Services', href: '#' },
      { name: 'DevOps', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  varsity: {
    title: 'BH.AI Varsity',
    links: [{ name: 'Blogs', href: '#' }],
  },
  demo: {
    title: 'Request A Demo',
    line1: 'Slide into our dreams.',
    email: 'info@reizend.ai',
  },
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#020418] via-[#050b29] to-[#020418] text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand and Socials */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-5">
              <Layers3 className="w-8 h-8 text-brand-green" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-wider">REIZEND</span>
                <span className="text-xs text-gray-400 font-light -mt-1">Private Limited</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              © 2025 Reizend. All rights reserved.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Get in Touch */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wider mb-4">{footerData.contact.title}</h3>
            <address className="text-sm leading-6 not-italic">
              {footerData.contact.address.map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
            </address>
          </div>

          {/* Column 3: Learn More */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wider mb-4">{footerData.learnMore.title}</h3>
            <ul className="space-y-3">
              {footerData.learnMore.links.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: BH.AI Varsity */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wider mb-4">{footerData.varsity.title}</h3>
            <ul className="space-y-3">
              {footerData.varsity.links.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Request a Demo */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wider mb-4">{footerData.demo.title}</h3>
            <p className="text-sm">{footerData.demo.line1}</p>
            <a href={`mailto:${footerData.demo.email}`} className="text-sm hover:text-white transition-colors break-all">
              {footerData.demo.email}
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
