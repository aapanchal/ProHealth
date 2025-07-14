import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { SITE_INFO, NAVIGATION } from '../constants/content';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 100;
      setIsScrolled(shouldBeScrolled);
      
      // Add/remove body class for padding adjustment
      if (shouldBeScrolled) {
        document.body.classList.add('header-sticky');
      } else {
        document.body.classList.remove('header-sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('header-sticky');
    };
  }, []);
  return (
    <>
      {/* Top Bar */}
      <div className={`bg-primary-blue text-white py-2 text-sm transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Contact Us: {SITE_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>{SITE_INFO.email}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>{SITE_INFO.hours.weekdays} | {SITE_INFO.hours.saturday}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white shadow-lg z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-xl' : 'relative'}`}>
        <div className="container">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
            <img src="/src/assets/logo.png" alt="Logo" className="logo-img" />

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-green'
                      : 'text-text-gray hover:text-primary-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium py-2 transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-primary-green'
                        : 'text-text-gray hover:text-primary-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;