import React, { useState } from 'react';
import Slideshow from './Slideshow2';

const Gallery: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('before-after');
  
  // Collection of before and after transformation images
  const beforeAfterImages = [
    "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&h=800",
    "https://images.pexels.com/photos/4108742/pexels-photo-4108742.jpeg?auto=compress&cs=tinysrgb&h=800",
    "https://images.pexels.com/photos/5591488/pexels-photo-5591488.jpeg?auto=compress&cs=tinysrgb&h=800",
    "https://images.pexels.com/photos/4108737/pexels-photo-4108737.jpeg?auto=compress&cs=tinysrgb&h=800"
  ];
  
  // Collection of team at work images
  const teamImages = [
    "https://images.pexels.com/photos/4108731/pexels-photo-4108731.jpeg?auto=compress&cs=tinysrgb&h=800",
    "https://images.pexels.com/photos/4108727/pexels-photo-4108727.jpeg?auto=compress&cs=tinysrgb&h=800",
    "https://images.pexels.com/photos/4108834/pexels-photo-4108834.jpeg?auto=compress&cs=tinysrgb&h=800",
    "https://images.pexels.com/photos/5591580/pexels-photo-5591580.jpeg?auto=compress&cs=tinysrgb&h=800"
  ];
  
  // Collection of equipment images
  const equipmentImages = [
    "https://images.pexels.com/photos/4108765/pexels-photo-4108765.jpeg?auto=compress&cs=tinysrgb&h=800",
    "https://images.pexels.com/photos/4108770/pexels-photo-4108770.jpeg?auto=compress&cs=tinysrgb&h=800",
    "https://images.pexels.com/photos/4108718/pexels-photo-4108718.jpeg?auto=compress&cs=tinysrgb&h=800",
    "https://images.pexels.com/photos/5591511/pexels-photo-5591511.jpeg?auto=compress&cs=tinysrgb&h=800"
  ];
  
  const beforeAfterCaptions = [
    "Residential living room transformation",
    "Kitchen deep cleaning results",
    "Window cleaning professional finish",
    "Carpet cleaning that removes even the toughest stains"
  ];
  
  const teamCaptions = [
    "Our professional team uses eco-friendly products",
    "Detailed attention to every corner",
    "Experienced staff with specialized training",
    "Reliable service you can count on"
  ];
  
  const equipmentCaptions = [
    "State-of-the-art cleaning equipment",
    "Professional-grade vacuum systems",
    "Specialized tools for deep cleaning",
    "High-pressure washing equipment"
  ];
  
  const getActiveImages = () => {
    switch(selectedTab) {
      case 'before-after':
        return { images: beforeAfterImages, captions: beforeAfterCaptions };
      case 'team':
        return { images: teamImages, captions: teamCaptions };
      case 'equipment':
        return { images: equipmentImages, captions: equipmentCaptions };
      default:
        return { images: beforeAfterImages, captions: beforeAfterCaptions };
    }
  };
  
  const { images, captions } = getActiveImages();

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-3 inline-block">
            OUR WORK
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
            See Our <span className="text-gradient">Cleaning Magic</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Browse through our gallery to see the transformation we bring to spaces, our professional team at work, and the specialized equipment we use.
          </p>
          
          {/* Tab navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 p-1 rounded-full shadow-md">
              <button 
                onClick={() => setSelectedTab('before-after')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTab === 'before-after' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Before & After
              </button>
              <button 
                onClick={() => setSelectedTab('team')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTab === 'team' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Our Team
              </button>
              <button 
                onClick={() => setSelectedTab('equipment')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTab === 'equipment' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Equipment
              </button>
            </div>
          </div>
        </div>
        
        {/* Slideshow */}
        <div className="max-w-4xl mx-auto mb-16">
          <Slideshow 
            images={images} 
            captions={captions}
            showCaptions={true}
            height="500px"
            className="shadow-2xl"
            effect="fade"
          />
        </div>
        
        {/* Interactive gallery grid with animation effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl aspect-square group hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img 
                src={image} 
                alt={captions[index]} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x600/e2e8f0/64748b?text=Image+Unavailable";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {captions[index]}
                </p>
                <button className="mt-2 bg-white/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 w-fit">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary"
          >
            <span>Schedule Your Cleaning</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;