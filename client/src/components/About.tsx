import React from "react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="bg-white p-2 rounded-full shadow-md mr-4">
        <i className={`${icon} text-primary text-xl`}></i>
      </div>
      <div>
        <h3 className="text-xl font-bold font-poppins">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const features = [
    {
      icon: "fas fa-users",
      title: "250+ Professional Staff",
      description: "Fully trained and vetted cleaning professionals"
    },
    {
      icon: "fas fa-thumbs-up",
      title: "30,000+ Satisfied Clients",
      description: "Years of experience serving homes and businesses"
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Solutions",
      description: "Environmentally responsible cleaning products"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Local New Zealand Business",
      description: "Supporting local communities across the country"
    },
    {
      icon: "fas fa-bolt",
      title: "Same-Day Service Available",
      description: "Quick response for your urgent cleaning needs"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&h=600" 
              alt="Professional cleaner" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-6">Why ShineStar Cleaners?</h2>
            <p className="text-lg text-gray-700 mb-8">
              At ShineStar Cleaners, we're committed to delivering exceptional cleaning services that exceed your expectations. Our professional team uses eco-friendly products and state-of-the-art equipment to provide a thorough clean every time.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Feature 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
