const express = require("express");

const logger =
  require("./middleware/logger");

const gatewayRoutes =
  require("./routes/gatewayRoutes");

const app = express();

app.use(express.json());

app.use(logger);

app.get("/health", (req, res) => {
  res.json({
    service: "api-gateway",
    status: "UP"
  });
});

app.use("/", gatewayRoutes);

module.exports = app;
