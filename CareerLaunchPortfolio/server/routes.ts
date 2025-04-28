import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints for the contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Store the message using our storage interface
      const message = await storage.createMessage(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message
        });
        return;
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to send message"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
