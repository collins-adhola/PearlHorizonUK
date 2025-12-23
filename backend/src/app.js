import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import intakeRoutes from "./routes/intake.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";

/**
 * Creates and configures the Express application
 * @returns {express.Application} Configured Express app
 */
export function createApp() {
  const app = express();

  // Security middleware
  app.use(helmet());

  // CORS - open for now
  app.use(cors());

  // Body parsing middleware (limit 1mb)
  app.use(express.json({ limit: "1mb" }));

  // Logging middleware
  app.use(morgan("dev"));

  // Health check endpoint
  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API routes
  app.use("/api/intakes", intakeRoutes);

  // 404 handler
  app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  // Centralized error middleware
  app.use(errorMiddleware);

  return app;
}

