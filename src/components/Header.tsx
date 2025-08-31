import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import ReactGA from 'react-ga4';

const NavLink = ({ children, href, hasDropdown = false, name }: { children: React.ReactNode, href: string, hasDropdown?: boolean, name: string }) => {
  const handleNavClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Navbar Link',
      label: name // e.g., "Home", "Why Us"
    });
  };
  
  return (
    <a href={href} onClick={handleNavClick} className="flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-base">
      {children}
      {hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
    </a>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'DevOps', href: '#devOps' },
    // { name: 'Products', href: '#', hasDropdown: true },
    // { name: 'BH.AI Varsity', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#aboutUs' },
  ];

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img className="h-32 w-auto object-contain" src="/white.png" alt='CloudYodha Logo' />
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink key={item.name} href={item.href} hasDropdown={item.hasDropdown || false} name={item.name}>
                {item.name}
              </NavLink>
            ))}
          </nav>

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
              <NavLink key={item.name} href={item.href} hasDropdown={item.hasDropdown || false} name={item.name}>
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;