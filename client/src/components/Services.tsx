import React from "react";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="service-card bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="text-primary text-4xl mb-4">
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-bold font-poppins mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <a 
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToContact();
        }}
        className="text-primary font-medium hover:text-secondary transition-colors"
      >
        Learn more <i className="fas fa-arrow-right ml-1"></i>
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: "fas fa-building",
      title: "Office Cleaning",
      description: "Professional cleaning services for offices of all sizes. Keep your workspace pristine and create a healthier environment for your team."
    },
    {
      icon: "fas fa-couch",
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning that removes stains, allergens, and odors. Extend the life of your carpets with our professional service."
    },
    {
      icon: "fas fa-home",
      title: "Residential Cleaning",
      description: "Comprehensive home cleaning services that keep your living space spotless. Regular or one-off cleaning options available."
    },
    {
      icon: "fas fa-broom",
      title: "Deep Cleaning",
      description: "Thorough cleaning services that target hidden dirt and grime. Perfect for seasonal cleaning or before/after moving."
    },
    {
      icon: "fas fa-window-maximize",
      title: "Window Cleaning",
      description: "Professional window cleaning for streak-free, crystal clear results. Interior and exterior services for homes and businesses."
    },
    {
      icon: "fas fa-sink",
      title: "Kitchen & Bathroom",
      description: "Specialized cleaning for the most demanding areas of your home. Eliminate grime, mold, and bacteria for a hygienic environment."
    },
    {
      icon: "fas fa-tint",
      title: "Pressure Washing",
      description: "Restore driveways, decks, and exterior surfaces to their original condition with our powerful pressure washing service."
    },
    {
      icon: "fas fa-trash",
      title: "Rubbish Removal",
      description: "Efficient waste collection and disposal services for homes and businesses. We ensure proper recycling and environmentally friendly practices."
    },
    {
      icon: "fas fa-building",
      title: "Apartment Cleaning",
      description: "Specialized cleaning services for apartments and units. Perfect for end-of-lease cleaning or regular maintenance."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">Our Cleaning Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of professional cleaning services tailored to meet all your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
