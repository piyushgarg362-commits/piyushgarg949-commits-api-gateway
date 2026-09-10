const express = require("express");

const {
  createProxyMiddleware
} = require("http-proxy-middleware");

const router = express.Router();

router.use(
  "/users",
  createProxyMiddleware({
    target:
      process.env.USER_SERVICE_URL ||
      "http://localhost:3001",
    changeOrigin: true
  })
);

router.use(
  "/orders",
  createProxyMiddleware({
    target:
      process.env.ORDER_SERVICE_URL ||
      "http://localhost:3002",
    changeOrigin: true
  })
);

router.use(
  "/payments",
  createProxyMiddleware({
    target:
      process.env.PAYMENT_SERVICE_URL ||
      "http://localhost:3003",
    changeOrigin: true
  })
);

router.use(
  "/notifications",
  createProxyMiddleware({
    target:
      process.env.NOTIFICATION_SERVICE_URL ||
      "http://localhost:3004",
    changeOrigin: true
  })
);

module.exports = router;
