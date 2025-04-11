import React, { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface ChatBotProps {
  onFormFieldChange?: (field: string, value: string) => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onFormFieldChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      question: "Hi there! 👋 I'm ShineBot, your friendly cleaning assistant. Would you like help with getting a quote for our cleaning services?",
      field: null,
      options: ["Yes, please help me", "No thanks"]
    },
    {
      question: "Great! What's your name?",
      field: "name",
      options: null
    },
    {
      question: "Nice to meet you! What's the best email where we can reach you?",
      field: "email",
      options: null
    },
    {
      question: "Perfect! What type of cleaning service are you interested in?",
      field: "service",
      options: ["Office Cleaning", "Residential Cleaning", "Carpet Cleaning", "Window Cleaning", "Deep Cleaning", "Other"]
    },
    {
      question: "Could you briefly describe what you need cleaned?",
      field: "message",
      options: null
    },
    {
      question: "Thank you! Would you like us to contact you by phone as well? If yes, please provide your phone number.",
      field: "phone",
      options: ["I'd rather not provide my phone number"]
    },
    {
      question: "Thanks for providing your information! Our team will review your requirements and get back to you soon. Would you like me to help with anything else?",
      field: null,
      options: ["I have another question", "No, that's all for now"]
    }
  ];

  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      addBotMessage(steps[0].question);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now(), text, isBot: true }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now(), text, isBot: false }]);
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    
    addUserMessage(input);
    processUserInput(input);
    setInput("");
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);
    processUserInput(option);
  };

  const processUserInput = (text: string) => {
    // First message special handling
    if (currentStep === 0) {
      if (text.toLowerCase().includes("yes")) {
        setTimeout(() => {
          setCurrentStep(1);
          addBotMessage(steps[1].question);
        }, 500);
      } else {
        setTimeout(() => {
          addBotMessage("No problem! If you need any assistance with our cleaning services, just click this chat button again.");
        }, 500);
      }
      return;
    }
    
    // Last step special handling
    if (currentStep === steps.length - 1) {
      if (text.toLowerCase().includes("another") || text.toLowerCase().includes("question")) {
        setTimeout(() => {
          addBotMessage("Feel free to ask! Or you can call us directly at 02040161664 for immediate assistance.");
        }, 500);
      } else {
        setTimeout(() => {
          addBotMessage("Thank you for chatting with ShineBot! Have a sparkling day! ✨");
        }, 500);
      }
      return;
    }

    // Process form fields and inform parent component
    const currentField = steps[currentStep].field;
    if (currentField && onFormFieldChange && currentStep < steps.length - 1) {
      // Skip updating for the "I'd rather not provide" option for phone
      if (currentField === "phone" && text === "I'd rather not provide my phone number") {
        // Don't update the field
      } else {
        onFormFieldChange(currentField, text);
      }
    }

    // Advance to next step with delay for natural conversation feeling
    setTimeout(() => {
      setCurrentStep(prev => {
        const nextStep = prev + 1;
        if (nextStep < steps.length) {
          addBotMessage(steps[nextStep].question);
        }
        return nextStep;
      });
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-80 sm:w-96 mb-4 border border-gray-200 max-h-[500px] flex flex-col">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary mr-2">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="font-bold">ShineBot Assistance</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 min-h-[300px] max-h-[350px]">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-3 flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div 
                  className={`p-3 rounded-lg max-w-[80%] ${
                    message.isBot 
                      ? "bg-gray-200 text-gray-800 rounded-tl-none" 
                      : "bg-primary text-white rounded-tr-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
            
            {/* Options buttons */}
            {isOpen && currentStep < steps.length && steps[currentStep].options && (
              <div className="mt-2 space-y-2">
                {steps[currentStep].options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="bg-white text-gray-800 py-2 px-4 rounded-full border border-gray-300 text-sm hover:bg-gray-100 mr-2 mb-2 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white rounded-r-full py-2 px-4 hover:bg-primary/90"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary/90 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-xl`}></i>
      </button>
    </div>
  );
};

export default ChatBot;