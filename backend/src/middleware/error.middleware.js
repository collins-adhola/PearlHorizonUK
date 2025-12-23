/**
 * Centralized error handling middleware
 */
export default function errorMiddleware(err, req, res, next) {
  // Log error
  console.error("Error:", err);

  // Return 500 JSON response
  res.status(500).json({
    error: "Internal server error",
  });
}

