const pool = require("../configs/database");

async function selectAllProductLine() {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      SELECT 
        *
      FROM
        dongsanpham;`,
      (error, result, fields) => {
        if (error) {
          reject(error);
        } else {
          const data = JSON.parse(JSON.stringify(result));
          resolve(data);
        }
      }
    );
  });
}

class ProductLine {
  async getAllProductLine() {
    try {
      const DongSanPham = selectAllProductLine();
      return DongSanPham;
    } catch (error) {
      return { error: error };
    }
  }
}

module.exports = new ProductLine();
