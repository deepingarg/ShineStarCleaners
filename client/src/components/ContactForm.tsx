import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string().min(1, { message: "Message is required" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "quote"
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
    <section id="contact" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Request a quote or book a service. Our team will respond promptly to discuss your cleaning needs.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold font-poppins mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 text-xl">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <a href="tel:02040161664" className="hover:text-gray-200 transition-colors">
                        02040161664
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-xl">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a href="mailto:info@shinestarcleaners.online" className="hover:text-gray-200 transition-colors">
                        info@shinestarcleaners.online
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-xl">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Hours</h4>
                      <p>Monday - Saturday: 8am - 6pm</p>
                      <p>Sunday: 9am - 4pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-200 transition-colors">
                      <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 transition-colors">
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 transition-colors">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 transition-colors">
                      <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6">Request a Quote</h3>
                
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
                    <input 
                      type="text"
                      id="name"
                      {...register("name")}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input 
                      type="email"
                      id="email"
                      {...register("email")}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input 
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select 
                      id="subject"
                      {...register("subject")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="quote">Request a Quote</option>
                      <option value="booking">Schedule a Cleaning</option>
                      <option value="question">General Question</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                    <textarea 
                      id="message"
                      rows={4}
                      {...register("message")}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500' : ''}`}
                    ></textarea>
                    {errors.message && (
                      <div className="text-red-500 text-sm mt-1">{errors.message.message}</div>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md w-full md:w-auto disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </form>
                
                {/* Success Message */}
                {formSubmitted && (
                  <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-3 text-xl"></i>
                      <p>Your message has been sent successfully! We'll be in touch soon.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
