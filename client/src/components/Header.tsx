import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className={`fixed w-full bg-white shadow-md z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="flex items-center"
        >
          <span className="text-primary text-2xl font-bold font-poppins">
            <i className="fas fa-sparkles mr-2"></i>ShineStar Cleaners
          </span>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <i className="fas fa-bars text-gray-700 text-xl"></i>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-primary font-medium hover:text-secondary transition-colors"
          >
            Home
          </a>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
            className="text-gray-700 font-medium hover:text-primary transition-colors"
          >
            Services
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="text-gray-700 font-medium hover:text-primary transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="text-gray-700 font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={`bg-white shadow-lg md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-primary font-medium py-2 hover:bg-light px-3 rounded"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-gray-700 font-medium py-2 hover:bg-light px-3 rounded"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-gray-700 font-medium py-2 hover:bg-light px-3 rounded"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-gray-700 font-medium py-2 hover:bg-light px-3 rounded"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
