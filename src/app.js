const express = require("express");
const axios = require("axios");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/health", (req, res) => {
  res.json({
    service: "api-gateway",
    status: "UP"
  });
});

// User Service
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3001/users");
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("User Service error:", error.message);
    res.status(502).json({ error: "User Service unavailable" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const response = await axios.post(
      "http://user-service:3001/users",
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("User Service error:", error.message);
    res.status(502).json({ error: "User Service unavailable" });
  }
});

// Order Service
app.get("/orders", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3002/orders");
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Order Service error:", error.message);
    res.status(502).json({ error: "Order Service unavailable" });
  }
});

app.post("/orders", async (req, res) => {
  try {
    const response = await axios.post(
      "http://order-service:3002/orders",
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Order Service error:", error.message);
    res.status(502).json({ error: "Order Service unavailable" });
  }
});

// Payment Service
app.get("/payments", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3003/payments");
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Payment Service error:", error.message);
    res.status(502).json({ error: "Payment Service unavailable" });
  }
});

app.post("/payments", async (req, res) => {
  try {
    const response = await axios.post(
      "http://payment-service:3003/payments",
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Payment Service error:", error.message);
    res.status(502).json({ error: "Payment Service unavailable" });
  }
});

// Notification Service
app.get("/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://notofication-service:3004/notifications"
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Notification Service error:", error.message);
    res.status(502).json({ error: "Notification Service unavailable" });
  }
});

app.post("/notifications", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3004/notifications",
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Notification Service error:", error.message);
    res.status(502).json({ error: "Notification Service unavailable" });
  }
});

module.exports = app;
