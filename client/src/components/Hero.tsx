import React from "react";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-light relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=cover&w=1600&h=800" 
          alt="Cleaning background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4">
            Premium Cleaning Services in New Zealand
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Trusted by thousands of homes and businesses across the country for spotless results and exceptional service.
          </p>
          <button 
            onClick={scrollToContact}
            className="inline-block bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
          >
            Get a Free Quote
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <i className="fas fa-award text-primary text-3xl mb-2"></i>
            <p className="font-medium">Top Rated Service</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <i className="fas fa-clock text-primary text-3xl mb-2"></i>
            <p className="font-medium">Fast Response</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <i className="fas fa-leaf text-primary text-3xl mb-2"></i>
            <p className="font-medium">Eco-Friendly</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <i className="fas fa-shield-alt text-primary text-3xl mb-2"></i>
            <p className="font-medium">Fully Insured</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
