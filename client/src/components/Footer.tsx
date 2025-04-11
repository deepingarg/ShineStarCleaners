import React from "react";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Wave SVG divider */}
      <div className="absolute top-0 left-0 right-0 text-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path fill="currentColor" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -mb-32 -ml-32 blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 mr-3 rounded-full bg-primary flex items-center justify-center text-white">
                <i className="fas fa-sparkles"></i>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-white">ShineStar</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Premium professional cleaning services for homes and businesses across New Zealand. Eco-friendly solutions and trained professionals since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/shinestarcleaners" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/shinestarcleaners" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/shinestarclean" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-poppins mb-5 text-white relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  Office Cleaning
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  Carpet Cleaning
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  Window Cleaning
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  View All Services
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-poppins mb-5 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors duration-300">
                  <i className="fas fa-chevron-right text-xs text-primary mr-2"></i>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-poppins mb-5 text-white relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-primary mt-1 mr-3">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:02040161664" className="text-white hover:text-primary transition-colors duration-300 font-medium">02040161664</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-primary mt-1 mr-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:info@shinestarcleaners.online" className="text-white hover:text-primary transition-colors duration-300 font-medium break-all">info@shinestarcleaners.online</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-primary mt-1 mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-gray-400">Service Area</p>
                  <p className="text-white">Auckland, Wellington, Christchurch & all major NZ cities</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-10 pb-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h4 className="text-lg font-bold text-white mb-2">Subscribe to our Newsletter</h4>
              <p className="text-gray-400">Stay updated with our latest offers and cleaning tips</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full md:w-64 px-4 py-3 rounded-l-lg focus:outline-none bg-gray-800 text-white border border-gray-700"
              />
              <button className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} ShineStar Cleaners. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
