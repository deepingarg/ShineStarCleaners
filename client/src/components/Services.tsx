import React, { useState } from "react";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="service-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-black/90 opacity-80"></div>
      </div>
      
      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="bg-white/20 backdrop-blur-sm text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
          <i className={icon}></i>
        </div>
        
        <h3 className="text-xl font-bold font-poppins mb-3 text-white">{title}</h3>
        <p className="text-gray-200 mb-4 flex-grow">
          {description}
        </p>
        
        <button 
          onClick={scrollToContact}
          className="mt-2 inline-flex items-center text-white font-medium group/btn"
        >
          <span className="mr-2 group-hover/btn:mr-3 transition-all">Get Quote</span>
          <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center group-hover/btn:bg-white/50 transition-all">
            <i className="fas fa-arrow-right text-xs"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: "fas fa-building",
      title: "Office Cleaning",
      description: "Professional cleaning services for offices of all sizes. Keep your workspace pristine and create a healthier environment for your team.",
      image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: "fas fa-couch",
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning that removes stains, allergens, and odors. Extend the life of your carpets with our professional service.",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: "fas fa-home",
      title: "Residential Cleaning",
      description: "Comprehensive home cleaning services that keep your living space spotless. Regular or one-off cleaning options available.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: "fas fa-broom",
      title: "Deep Cleaning",
      description: "Thorough cleaning services that target hidden dirt and grime. Perfect for seasonal cleaning or before/after moving.",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: "fas fa-window-maximize",
      title: "Window Cleaning",
      description: "Professional window cleaning for streak-free, crystal clear results. Interior and exterior services for homes and businesses.",
      image: "https://images.unsplash.com/photo-1527689638836-411945a2b57c?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: "fas fa-sink",
      title: "Kitchen & Bathroom",
      description: "Specialized cleaning for the most demanding areas of your home. Eliminate grime, mold, and bacteria for a hygienic environment.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: "fas fa-tint",
      title: "Pressure Washing",
      description: "Restore driveways, decks, and exterior surfaces to their original condition with our powerful pressure washing service.",
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: "fas fa-trash",
      title: "Rubbish Removal",
      description: "Efficient waste collection and disposal services for homes and businesses. We ensure proper recycling and environmentally friendly practices.",
      image: "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: "fas fa-building",
      title: "Apartment Cleaning",
      description: "Specialized cleaning services for apartments and units. Perfect for end-of-lease cleaning or regular maintenance.",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-3 inline-block">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
            Professional <span className="text-gradient">Cleaning Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of professional cleaning services tailored to meet all your needs, with experienced staff and eco-friendly solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Not sure which service is right for you? Our team can help recommend the perfect cleaning solution for your specific needs.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary"
          >
            <span>Contact Us For a Custom Quote</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
