import React from 'react';
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import cloudyodhaLogo from '../assests/logos/cloudyodhaLogo.jpg';

// Updated data object with the 'varsity' section removed.
const footerData = {
  contact: {
    title: 'Get in Touch',
    address: [
      'Gaur city Noida',
      'Uttar Pradesh, 695581',
    ],
  },
  learnMore: {
    title: 'Learn More',
    links: [
      { name: 'About Us', href: '#aboutUs' },
      { name: 'Services', href: 'services' },
      { name: 'DevOps', href: '#devOps' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  demo: {
    title: 'Request A Demo',
    line1: 'Slide into our dreams.',
    email: 'ujjwalkannojiya15@gmail.com',
  },
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/cloudyodha-com/', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#020418] via-[#050b29] to-[#020418] text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* The grid is updated to better handle 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          {/* Adjusted column span for better balance in a 4-column layout */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-5">
              <img className="h-32 w-auto" src={cloudyodhaLogo} alt='CloudYodha Logo' />
            </a>
            <p className="text-sm leading-relaxed">
              Your trusted partner in navigating the cloud.
            </p>
          </div>

          {/* Column 2: Get in Touch */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{footerData.contact.title}</h3>
            <address className="text-sm leading-6 not-italic">
              {footerData.contact.address.map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
            </address>
          </div>

          {/* Column 3: Learn More */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{footerData.learnMore.title}</h3>
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

          {/* === COLUMN 4 REMOVED === */}
          {/* The "BH.AI Varsity" column that was here is now gone. */}

          {/* Column 4: Request a Demo (previously column 5) */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{footerData.demo.title}</h3>
            <p className="text-sm mb-2">{footerData.demo.line1}</p>
            <a href={`mailto:${footerData.demo.email}`} className="text-sm text-blue-400 hover:text-blue-300 transition-colors break-all">
              {footerData.demo.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Socials */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Cloudyodha. All rights reserved.
          </p>
          <div className="flex space-x-5 order-1 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} target='_blank' className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;