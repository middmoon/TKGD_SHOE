const homeRoute = require("./home");
const apiRoute = require("./api");
const productDetailRoute = require("./product-detail");
const productListRoute = require("./product-list");

function routes(app) {
  app.use("/api", apiRoute);
  app.use("/product-detail", productDetailRoute);
  app.use("/product-list", productListRoute);
  app.use("/new", productListRoute);
  app.use("/", homeRoute);
}

module.exports = routes;
