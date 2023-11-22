const Attributes = require("../models/attributes");
const ProductLine = require("../models/ProductLine");
const Collection = require("../models/Collection");
const Product = require("../models/product");

class ProductListController {
  async index(req, res) {
    const attributes = await Attributes.getStyle();
    const productLine = await ProductLine.getAllProductLine();
    const collection = await Collection.getAllCollection();
    const productList = await Product.getAllProducts();
    res.render("product-list", { attributes, productLine, collection, productList });
  }
}

module.exports = new ProductListController();
