const Product = require("../models/product");
const ProductLine = require("../models/ProductLine");
const Collection = require("../models/Collection");

class apiController {
  index(req, res) {
    res.json({ project: "Thiet ke giao dien" });
  }
  async getAllProducts(req, res) {
    const data = await Product.getAllProducts();
    res.json(data);
  }
  async getProductById(req, res) {
    const id = req.params.id;
    const data = await Product.getProductById(id);
    res.json(data);
  }

  async getProductLine(req, res) {
    const id = req.params.id;
    const data = await ProductLine.getProductById(id);
    res.json(data);
  }

  async getCollection(req, res) {
    const id = req.params.id;
    const data = await Collection.getProductById(id);
    res.json(data);
  }
}

module.exports = new apiController();
