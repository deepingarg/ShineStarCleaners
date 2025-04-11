import React from "react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  count?: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, count }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-start">
        <div className="bg-primary/10 p-3 rounded-lg mr-4">
          <i className={`${icon} text-primary text-2xl`}></i>
        </div>
        <div>
          {count && (
            <span className="text-3xl sm:text-4xl font-bold text-gray-900 block mb-1">{count}</span>
          )}
          <h3 className="text-xl font-bold font-poppins">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const features = [
    {
      icon: "fas fa-users",
      title: "Professional Staff",
      count: "250+",
      description: "Fully trained and vetted cleaning professionals ready to serve you"
    },
    {
      icon: "fas fa-thumbs-up",
      title: "Satisfied Clients",
      count: "30k+",
      description: "Years of experience serving homes and businesses across New Zealand"
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Solutions",
      description: "We use environmentally responsible cleaning products and methods"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Local NZ Business",
      description: "Supporting local communities across the country since 2010"
    },
    {
      icon: "fas fa-bolt",
      title: "Same-Day Service",
      description: "Quick response for your urgent cleaning needs, 7 days a week"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Insured & Bonded",
      description: "Your property is fully protected while in our care"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-28 bg-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-3 inline-block">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
            Why Choose <span className="text-gradient">ShineStar Cleaners</span>?
          </h2>
          <p className="text-lg text-gray-700">
            At ShineStar Cleaners, we're committed to delivering exceptional cleaning services that exceed your expectations. 
            Our professional team uses eco-friendly products and state-of-the-art equipment to provide a thorough clean every time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              count={feature.count}
            />
          ))}
        </div>
        
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:w-1/2 relative">
            <div className="bg-gradient-to-r from-primary/30 to-primary/10 h-full w-full p-8 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mx-auto mb-4">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-700">Our commitment to excellence ensures spotless results every time.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-6">Our Cleaning Process</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Assessment</h4>
                  <p className="text-gray-600">We begin with a thorough assessment of your space to identify specific cleaning needs.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Customized Plan</h4>
                  <p className="text-gray-600">Our team creates a tailored cleaning plan specific to your property's requirements.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Professional Execution</h4>
                  <p className="text-gray-600">Our trained professionals execute the cleaning plan with attention to detail and care.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Quality Check</h4>
                  <p className="text-gray-600">We conduct a final inspection to ensure everything meets our high standards of cleanliness.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                <span>Book a Cleaning</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
