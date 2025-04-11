import React from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="text-primary">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
          {rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
        </div>
      </div>
      <p className="text-gray-700 mb-6">
        {quote}
      </p>
      <div className="flex items-center">
        <div className="mr-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
            <i className="fas fa-user text-gray-500"></i>
          </div>
        </div>
        <div>
          <h4 className="font-bold font-poppins">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "ShineStar Cleaners transformed our office space. Their attention to detail is impressive, and the team is always punctual and professional. Highly recommended!",
      name: "Sarah Johnson",
      title: "Office Manager, Auckland",
      rating: 5
    },
    {
      quote: "I've tried several cleaning services before, but ShineStar is by far the best. Their deep cleaning service made our home feel brand new. Consistent quality every time!",
      name: "Michael Thompson",
      title: "Homeowner, Wellington",
      rating: 5
    },
    {
      quote: "The window cleaning service exceeded my expectations. My storefront has never looked better! Fast, efficient, and reasonable pricing. Will be using them regularly.",
      name: "Jennifer Lee",
      title: "Retail Owner, Christchurch",
      rating: 4.5
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say about our cleaning services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
