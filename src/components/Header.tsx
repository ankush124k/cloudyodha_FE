import React, { useState } from 'react';
import { Layers3, ChevronDown, Menu, X } from 'lucide-react';

const NavLink = ({ children, href, hasDropdown = false }: { children: React.ReactNode, href: string, hasDropdown?: boolean }) => (
  <a href={href} className="flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-base">
    {children}
    {hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'AI Services', href: '#' },
    { name: 'DevOps', href: '#' },
    { name: 'Products', href: '#', hasDropdown: true },
    { name: 'BH.AI Varsity', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  return (
    <header className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Layers3 className="w-8 h-8 text-brand-green" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wider">REIZEND</span>
              <span className="text-xs text-gray-400 font-light -mt-1">Private Limited</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink key={item.name} href={item.href} hasDropdown={item.hasDropdown}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#" className="bg-brand-green text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-green-500/20">
              Contact Us
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map(item => (
              <NavLink key={item.name} href={item.href} hasDropdown={item.hasDropdown}>
                {item.name}
              </NavLink>
            ))}
            <a href="#" className="bg-brand-green text-white text-center font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-green-500/20 mt-2">
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
