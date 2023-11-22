const Product = require("../models/product");

class ProductDetailController {
  async index(req, res) {
    const id = req.params.id;
    const data = await Product.getProductById(id);
    res.render("product-detail", { data });
  }

  // async index(req, res) {
  //   const id = req.params.id;
  //   const data = await Product.getProductById("AV00149");
  //   res.send(id);
  // }
}

module.exports = new ProductDetailController();
