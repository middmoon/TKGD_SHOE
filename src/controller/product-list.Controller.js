class ProductListController {
  index(req, res) {
    res.render("product-list");
  }
}

module.exports = new ProductListController();
