import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const formData = contactFormSchema.parse(req.body);
      
      // In a real application, you would store the form data or send an email
      console.log("Contact form submission:", formData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Your message has been sent successfully! We'll be in touch soon." 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Validation error",
          errors: error.format() 
        });
      }
      
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        success: false, 
        message: "There was a problem processing your request. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
