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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg' 
        : 'py-4 bg-transparent'
    }`}>
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
          <div className="w-10 h-10 mr-2 rounded-full bg-primary flex items-center justify-center text-white">
            <i className="fas fa-sparkles"></i>
          </div>
          <span className={`text-2xl font-bold font-poppins ${scrolled ? 'text-primary' : 'text-white'}`}>
            ShineStar <span className="text-primary">Cleaners</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="space-x-1">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className={`font-medium px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-white'
              }`}
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className={`font-medium px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-white'
              }`}
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className={`font-medium px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-white'
              }`}
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className={`font-medium px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-white'
              }`}
            >
              Contact
            </a>
          </div>
          
          <div className="flex items-center ml-4">
            <a 
              href="tel:02040161664"
              className={`flex items-center px-4 py-2 rounded-full transition-all ${
                scrolled 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <i className="fas fa-phone-alt mr-2 text-sm"></i>
              <span className="font-medium">02040161664</span>
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} ${scrolled ? 'text-gray-800' : 'text-white'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out transform ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <nav className="bg-white shadow-xl rounded-b-xl mx-4 mt-2 overflow-hidden">
          <div className="px-4 py-3">
            <div className="flex flex-col space-y-1">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className="text-gray-800 font-medium py-3 hover:bg-primary/10 hover:text-primary px-3 rounded-lg flex items-center"
              >
                <i className="fas fa-home mr-3 w-6 text-primary"></i>
                Home
              </a>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="text-gray-800 font-medium py-3 hover:bg-primary/10 hover:text-primary px-3 rounded-lg flex items-center"
              >
                <i className="fas fa-concierge-bell mr-3 w-6 text-primary"></i>
                Services
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="text-gray-800 font-medium py-3 hover:bg-primary/10 hover:text-primary px-3 rounded-lg flex items-center"
              >
                <i className="fas fa-info-circle mr-3 w-6 text-primary"></i>
                About
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="text-gray-800 font-medium py-3 hover:bg-primary/10 hover:text-primary px-3 rounded-lg flex items-center"
              >
                <i className="fas fa-envelope mr-3 w-6 text-primary"></i>
                Contact
              </a>
              <div className="pt-2 mt-2 border-t border-gray-100">
                <a 
                  href="tel:02040161664"
                  className="flex items-center justify-center py-3 px-4 bg-primary text-white rounded-lg font-medium"
                >
                  <i className="fas fa-phone-alt mr-2"></i>
                  Call Us: 02040161664
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
