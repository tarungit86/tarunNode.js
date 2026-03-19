// server.js
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const userRoutes = require("./routes/user");
const shopRoutes = require("./routes/shop");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
app.use("/api/user", userRoutes);
app.use("/api/shop", shopRoutes);

// Root route (UPDATED with log for demo)
app.get("/", (req, res) => {
  console.log("🔥 Lambda API HIT SUCCESS");   // 👈 added for logs
  res.json({ message: "E-MART Lambda server running 🚀" }); // 👈 improved message
});

// Health check route (NEW - useful for testing)
app.get("/health", (req, res) => {
  console.log("✅ Health check endpoint hit");
  res.json({ status: "OK" });
});

// Export Lambda handler (ALREADY CORRECT)
module.exports.handler = serverless(app);
