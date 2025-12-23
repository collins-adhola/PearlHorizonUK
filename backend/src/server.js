import dotenv from "dotenv";
import { createApp } from "./app.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = createApp();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

