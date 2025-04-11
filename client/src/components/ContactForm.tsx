import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Get form data from ChatBot (stored in localStorage)
  useEffect(() => {
    const chatbotData = localStorage.getItem('chatbot_form_data');
    if (chatbotData) {
      try {
        const parsedData = JSON.parse(chatbotData);
        // Pre-fill form fields with data from chatbot
        Object.entries(parsedData).forEach(([field, value]) => {
          if (value && typeof value === 'string') {
            setValue(field as any, value);
          }
        });
      } catch (error) {
        console.error("Error parsing chatbot data:", error);
      }
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to the server
      console.log("Form submitted:", data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Message Sent",
        description: "We'll be in touch with you shortly!",
        duration: 5000,
      });
      
      // Reset form
      reset();
      setFormSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-3 inline-block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
            Contact <span className="text-gradient">Our Team</span>
          </h2>
          <p className="text-lg text-gray-700">
            Have questions or ready to book a service? Reach out to our team for a free quote or more information.
            We're available 7 days a week to assist you with all your cleaning needs.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info Section */}
            <div className="lg:w-5/12 bg-primary text-white p-8 lg:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mb-32 z-0"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-poppins mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-phone text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Phone</h4>
                      <p className="text-white/90 mb-1">Call us directly:</p>
                      <a href="tel:02040161664" className="text-xl font-bold hover:underline">
                        02040161664
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <p className="text-white/90 mb-1">Send us an email:</p>
                      <a href="mailto:info@shinestarcleaners.online" className="text-lg font-bold break-all hover:underline">
                        info@shinestarcleaners.online
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Business Hours</h4>
                      <p className="text-white/90">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                      <p className="text-white/90">Sunday: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <h4 className="font-bold text-lg mb-3">Service Areas</h4>
                  <p className="text-white/90 mb-6">
                    We provide cleaning services across all major cities in New Zealand including Auckland, Wellington, Christchurch, Hamilton, Tauranga, and surrounding areas.
                  </p>
                  
                  <div className="mt-8">
                    <h5 className="font-bold flex items-center text-lg">
                      <i className="fas fa-exclamation-circle mr-2"></i> 
                      Emergency Cleaning?
                    </h5>
                    <p className="text-white/90 mb-4">
                      Need urgent cleaning services? We offer same-day service in most locations.
                    </p>
                    <a 
                      href="tel:02040161664" 
                      className="inline-flex items-center justify-center px-6 py-3 font-medium bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
                    >
                      <i className="fas fa-phone-alt mr-2"></i>
                      Call Now
                    </a>
                  </div>
                </div>
                
                <div className="mt-12 flex space-x-4">
                  <a href="https://www.facebook.com/shinestarcleaners" className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/shinestarcleaners" className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/shinestarclean" className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="lg:w-7/12 p-8 lg:p-12">
              <h3 className="text-2xl font-bold font-poppins mb-8 text-gray-900">Send Us A Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                    <input 
                      type="text"
                      id="name"
                      placeholder="John Smith"
                      {...register("name")}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input 
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      id="phone"
                      placeholder="021 123 4567"
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                    <select 
                      id="service"
                      {...register("service")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="Carpet Cleaning">Carpet Cleaning</option>
                      <option value="Residential Cleaning">Residential Cleaning</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                      <option value="Window Cleaning">Window Cleaning</option>
                      <option value="Kitchen & Bathroom">Kitchen & Bathroom</option>
                      <option value="Pressure Washing">Pressure Washing</option>
                      <option value="Rubbish Removal">Rubbish Removal</option>
                      <option value="Apartment Cleaning">Apartment Cleaning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell us about your cleaning needs, property details, preferred schedule, etc."
                    {...register("message")}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && (
                    <div className="text-red-500 text-sm mt-1">{errors.message.message}</div>
                  )}
                </div>
                
                <div className="flex items-start space-x-2 mb-2">
                  <input 
                    type="checkbox" 
                    id="privacy-consent" 
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="privacy-consent" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a> and consent to being contacted regarding my enquiry.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>Send Message</span>
                      <i className="fas fa-paper-plane ml-2"></i>
                    </div>
                  )}
                </button>
              </form>
              
              {/* Success Message */}
              {formSubmitted && (
                <div className="mt-6 p-5 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <i className="fas fa-check text-green-500 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-1">Message Sent Successfully!</h4>
                      <p>Thank you for contacting us. We'll be in touch with you shortly.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
