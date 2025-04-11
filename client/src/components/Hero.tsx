import React from "react";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden" id="home">
      {/* Full-screen background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=cover&w=2000&h=1200" 
          alt="Professional cleaning service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 text-white mb-12 md:mb-0">
            <span className="inline-block text-sm font-bold tracking-wider uppercase bg-primary/20 border border-primary/30 rounded-full px-4 py-1 mb-6">
              Professional & Reliable
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
              <span className="text-gradient">Premium Cleaning</span> Services in New Zealand
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Trusted by thousands of homes and businesses across the country for spotless results and exceptional service, delivered by 250+ trained professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary"
              >
                <span>Get a Free Quote</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <a 
                href="tel:02040161664"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                <span>Call Us</span>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center">
                <div className="mr-3 text-primary">
                  <i className="fas fa-star text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Rating</p>
                  <p className="font-bold">4.9/5 (500+ Reviews)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-primary">
                  <i className="fas fa-users text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Happy Clients</p>
                  <p className="font-bold">30,000+ Served</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-5/12 flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-30 rounded-full blur-3xl"></div>
              <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Quick Quote</h2>
              
              <form className="space-y-4 relative z-10">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white/20 text-white border border-gray-200/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/20 text-white border border-gray-200/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-300"
                  />
                </div>
                <div>
                  <select className="w-full bg-white/20 text-white border border-gray-200/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="" disabled selected className="text-gray-400">Select Service</option>
                    <option value="office" className="text-gray-800">Office Cleaning</option>
                    <option value="home" className="text-gray-800">Home Cleaning</option>
                    <option value="carpet" className="text-gray-800">Carpet Cleaning</option>
                    <option value="other" className="text-gray-800">Other Services</option>
                  </select>
                </div>
                <button 
                  type="button" 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg"
                >
                  Request Quote
                </button>
                <p className="text-xs text-gray-300 text-center mt-2">
                  We'll get back to you within 2 hours
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/20 card-hover">
            <i className="fas fa-award text-primary text-3xl mb-3"></i>
            <p className="font-medium text-white">Top Rated Service</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/20 card-hover">
            <i className="fas fa-clock text-primary text-3xl mb-3"></i>
            <p className="font-medium text-white">Fast Response</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/20 card-hover">
            <i className="fas fa-leaf text-primary text-3xl mb-3"></i>
            <p className="font-medium text-white">Eco-Friendly</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/20 card-hover">
            <i className="fas fa-shield-alt text-primary text-3xl mb-3"></i>
            <p className="font-medium text-white">Fully Insured</p>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
