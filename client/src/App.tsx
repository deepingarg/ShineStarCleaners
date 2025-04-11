import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ChatBot from "@/components/ChatBot";
import { useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleFormFieldChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // You can send the updated form data to the contact form component
    // or save to localStorage for persistence
    localStorage.setItem('chatbot_form_data', JSON.stringify({
      ...formData,
      [field]: value
    }));

    // Log the value (for demonstration - you'd typically use this data to pre-populate your form)
    console.log(`ChatBot updated field: ${field} with value: ${value}`);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ChatBot onFormFieldChange={handleFormFieldChange} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
