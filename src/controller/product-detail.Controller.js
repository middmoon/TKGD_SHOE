const Product = require("../models/product");

class ProductDetailController {
  async index(req, res) {
    const data = await Product.getProductById("AV00149");
    const test = "123";
    res.render("product-detail", { data });
  }
}

module.exports = new ProductDetailController();
