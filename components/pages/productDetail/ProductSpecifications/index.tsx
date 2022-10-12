import React from "react";

const ProductSpecifications = () => {
  return (
    <div className="product-specifications">
      <h4 className="product-specifications__title">THÔNG SỐ KỸ THUẬT</h4>

      <table className="product-specifications__table">
        <thead className="product-specifications__table-head">
          <tr>
            <th className="product-specifications__cell-head">Kích thước</th>
            <th className="product-specifications__cell-head">
              Sàn thang (Dài x Rộng) (mm)
            </th>
            <th className="product-specifications__cell-head">
              Thông thuỷ (Dài x Rộng) (mm)
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>XS</td>
            <td>600 x 830</td>
            <td>1020 x 980</td>
          </tr>
          <tr>
            <td>XS</td>
            <td>600 x 830</td>
            <td>1020 x 980</td>
          </tr>
          <tr>
            <td>XS</td>
            <td>600 x 830</td>
            <td>1020 x 980</td>
          </tr>
          <tr>
            <td>XS</td>
            <td>600 x 830</td>
            <td>1020 x 980</td>
          </tr>
          <tr>
            <td>XS</td>
            <td>600 x 830</td>
            <td>1020 x 980</td>
          </tr>
          <tr>
            <td>XS</td>
            <td>600 x 830</td>
            <td>1020 x 980</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecifications;
