import React, { useState } from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title, rating, image }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-all duration-500 hover:shadow-2xl card-hover">
      {/* Quote mark decoration */}
      <div className="absolute -top-5 -left-5 text-7xl text-primary/10 font-serif pointer-events-none">
        "
      </div>
      
      <div className="flex items-center mb-4">
        <div className="text-primary">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
          {rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
        </div>
        <div className="ml-2 text-gray-500 text-sm">
          ({rating.toString().replace(/\.5$/, '.5')}/5)
        </div>
      </div>
      
      <p className="text-gray-700 mb-8 italic">
        "{quote}"
      </p>
      
      <div className="flex items-center">
        <div className="mr-4">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-14 h-14 rounded-full object-cover shadow"
            />
          ) : (
            <div className="w-14 h-14 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center">
              <i className="fas fa-user text-primary"></i>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold font-poppins text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const testimonials = [
    {
      quote: "ShineStar Cleaners transformed our office space. Their attention to detail is impressive, and the team is always punctual and professional. We've been using their services for over 2 years now and couldn't be happier!",
      name: "Sarah Johnson",
      title: "Office Manager, Auckland",
      rating: 5,
      category: "business",
      image: "https://images.unsplash.com/photo-1581582538315-5c2ba2296769?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "I've tried several cleaning services before, but ShineStar is by far the best. Their deep cleaning service made our home feel brand new. Consistent quality every time!",
      name: "Michael Thompson",
      title: "Homeowner, Wellington",
      rating: 5,
      category: "residential",
      image: "https://images.unsplash.com/photo-1588534510807-82dab08b3bc8?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "The window cleaning service exceeded my expectations. My storefront has never looked better! Fast, efficient, and reasonable pricing. Will be using them regularly.",
      name: "Jennifer Lee",
      title: "Retail Owner, Christchurch",
      rating: 4.5,
      category: "business",
      image: "https://images.unsplash.com/photo-1602045557632-823a50526957?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "Our carpets were heavily stained after a party, and I thought we'd have to replace them. ShineStar's carpet cleaning service saved us thousands of dollars. Amazing results!",
      name: "David Wilson",
      title: "Apartment Owner, Dunedin",
      rating: 5,
      category: "residential",
      image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "We hired ShineStar for our end-of-lease cleaning, and they ensured we got our full bond back. Thorough, professional, and fairly priced. Highly recommend!",
      name: "Emma Roberts",
      title: "Student, Hamilton",
      rating: 4.5,
      category: "residential"
    },
    {
      quote: "ShineStar has been maintaining our medical clinic for the past year. Their sanitization protocols are excellent, and they understand the importance of cleanliness in healthcare settings.",
      name: "Dr. James Chen",
      title: "Medical Director, Wellington",
      rating: 5,
      category: "business"
    }
  ];
  
  const filteredTestimonials = activeTab === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeTab);

  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-primary/5 rounded-[60px] blur-3xl -rotate-3 opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-3 inline-block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-700">
            Don't just take our word for it - see what our satisfied customers have to say about our cleaning services. 
            We're proud to have earned the trust of thousands of clients across New Zealand.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1 rounded-full shadow-md">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "all" 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Reviews
            </button>
            <button 
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "residential" 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Residential
            </button>
            <button 
              onClick={() => setActiveTab("business")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "business" 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Business
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="text-primary text-xl">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="ml-2 font-bold">4.9/5</span>
            </div>
            <p className="font-bold text-xl mb-2">Average Rating from 500+ Reviews</p>
            <p className="text-gray-600">Join hundreds of satisfied customers who trust ShineStar Cleaners with their cleaning needs.</p>
            
            <div className="mt-6">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                <span>Become Our Next Happy Client</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
