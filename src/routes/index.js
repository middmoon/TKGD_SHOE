const homeRoute = require("./home");
const apiRoute = require("./api");
const productDetailRoute = require("./product-detail");
const productListRoute = require("./product-list");
const newRoute = require("./new");
const vintasRoute = require("./vintas-new");
const sneakerRoute = require("./sneaker-new");
const vulcanRoute = require("./vulcan-new");

function routes(app) {
  app.use("/api", apiRoute);
  app.use("/product-detail", productDetailRoute);
  app.use("/product-list", productListRoute);
  app.use("/new", newRoute);
  app.use("/vintas-new", vintasRoute);
  app.use("/sneaker-new", sneakerRoute);
  app.use("/vulcan-new", vulcanRoute);
  app.use("/", homeRoute);
}

module.exports = routes;
