const pool = require("../configs/database");

class Attributes {
  async getStyle() {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          SELECT 
            thuoctinhsanpham.GiaTriThuocTinhSanPham
          FROM
            thuoctinhsanpham
          WHERE
            thuoctinhsanpham.TenThuocTinhSanPham = 'Style';`,
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
}

module.exports = new Attributes();
