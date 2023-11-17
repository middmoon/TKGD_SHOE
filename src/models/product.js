const pool = require("../configs/database");

async function selectAllProducts() {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT 
        sanpham.IdSanPham,
        dongsanpham.IdDongSanPham,
        dongsanpham.TenDongSanPham,
        bosuutap.IdBoSuuTap,
        bosuutap.TenBoSuuTap,
        sanpham.IdSanPham,
        sanpham.Gia
      FROM
        sanpham
        INNER JOIN
          bosuutap ON bosuutap.IdBoSuuTap = sanpham.IdBoSuuTap
        INNER JOIN
          dongsanpham ON dongsanpham.IdDongSanPham = bosuutap.IdDongSanPham;`,
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

async function selectAllAttributes() {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT 
        sanpham.IdSanPham,
        thuoctinhsanpham.TenThuocTinhSanPham,
        thuoctinhsanpham.GiaTriThuocTinhSanPham
      FROM
        thuoctinhsanpham
        INNER JOIN
          thuoctinhsanpham_cua_sanpham ON thuoctinhsanpham_cua_sanpham.IdThuocTinhSanPham = thuoctinhsanpham.IdThuocTinhSanPham
        INNER JOIN
          sanpham ON sanpham.IdSanPham = thuoctinhsanpham_cua_sanpham.IdSanPham;`,
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

async function selectAllImages() {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT 
        anhsanpham.IdSanPham, anhsanpham.Anh
      FROM
        anhsanpham;`,
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

async function selectAllQuantites() {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT 
        soluongkichco.IdSanPham,
        soluongkichco.KichCo,
        soluongkichco.SoLuong
      FROM
        soluongkichco;`,
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
// ----------

async function selectProductById(id) {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT 
        dongsanpham.IdDongSanPham,
        dongsanpham.TenDongSanPham,
        bosuutap.IdBoSuuTap,
        bosuutap.TenBoSuuTap,
        sanpham.IdSanPham,
        sanpham.Gia
      FROM
        sanpham
          INNER JOIN
            bosuutap ON bosuutap.IdBoSuuTap = sanpham.IdBoSuuTap
          INNER JOIN
            dongsanpham ON dongsanpham.IdDongSanPham = bosuutap.IdDongSanPham
      WHERE
        sanpham.IdSanPham = "${id}";`,
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

async function selectAttributesById(id) {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT 
        thuoctinhsanpham.TenThuocTinhSanPham,
        thuoctinhsanpham.GiaTriThuocTinhSanPham
      FROM
        thuoctinhsanpham
          INNER JOIN
            thuoctinhsanpham_cua_sanpham ON thuoctinhsanpham_cua_sanpham.IdThuocTinhSanPham = thuoctinhsanpham.IdThuocTinhSanPham
          INNER JOIN
            sanpham ON sanpham.IdSanPham = thuoctinhsanpham_cua_sanpham.IdSanPham
      WHERE
        sanpham.IdSanPham = "${id}"`,
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

async function selectImagesById(id) {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT 
        anhsanpham.Anh
      FROM
        anhsanpham
      WHERE
        anhsanpham.IdSanPham = "${id}";`,
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

async function selectQuantitesById(id) {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT 
        soluongkichco.KichCo,
        soluongkichco.SoLuong
      FROM
        soluongkichco
      WHERE
        soluongkichco.IdSanPham = "${id}";
      `,
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

class Product {
  async getAllProducts() {
    try {
      const SanPham = await selectAllProducts();
      const ThuocTinh = await selectAllAttributes();
      const BoAnh = await selectAllImages();
      const TonKho = await selectAllQuantites();

      const data = SanPham.map((sanPham) => {
        const IdSanPham = sanPham.IdSanPham;

        const thuocTinh = ThuocTinh.filter((atb) => atb.IdSanPham === IdSanPham);
        const boAnh = BoAnh.filter((img) => img.IdSanPham === IdSanPham);
        const tonKho = TonKho.filter((qty) => qty.IdSanPham === IdSanPham);
        return {
          ...sanPham,
          ThuocTinh: thuocTinh,
          BoAnh: boAnh,
          TonKho: tonKho,
        };
      });

      return data;
    } catch (error) {
      return { error: error };
    }
  }

  async getProductById(id) {
    try {
      const SanPham = await selectProductById(id);
      const ThuocTinh = await selectAttributesById(id);
      const BoAnh = await selectImagesById(id);
      const TonKho = await selectQuantitesById(id);
      return {
        SanPham,
        ThuocTinh: ThuocTinh,
        BoAnh: BoAnh,
        TonKho: TonKho,
      };
    } catch (error) {
      return { error: error };
    }
  }
}

module.exports = new Product();
