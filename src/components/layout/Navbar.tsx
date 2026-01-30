import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useToggle } from '@/hooks/useToggle';
import { MenuIcon, XIcon, HeadphonesIcon } from '@/components/icons/Icons';
import { Button } from '@/components/ui/Button';
import { NAVIGATION_ITEMS, COMPANY_INFO } from '@/constants';

export const Navbar: React.FC = () => {
  const scrolled = useScrollPosition(20);
  const [mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen] = useToggle(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-10 h-10 rounded-lg flex items-center justify-center text-white">
              <HeadphonesIcon />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {COMPANY_INFO.NAME}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="md">
              Comprar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`block px-4 py-2 font-medium rounded-lg ${
                  location.pathname === item.path
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4">
              <Button size="md" className="w-full">
                Comprar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
