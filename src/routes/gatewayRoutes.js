const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const router = express.Router();

router.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true
  })
);

router.use(
  "/orders",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true
  })
);

router.use(
  "/payments",
  createProxyMiddleware({
    target: "http://localhost:3003",
    changeOrigin: true
  })
);

router.use(
  "/notifications",
  createProxyMiddleware({
    target: "http://localhost:3004",
    changeOrigin: true
  })
);

module.exports = router;
