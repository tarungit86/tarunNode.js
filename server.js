
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

// Root route
app.get("/", (req, res) => {
  res.json({ message: "E-MART Lambda server running!" });
});

// Export Lambda handler
module.exports.handler = serverless(app);
