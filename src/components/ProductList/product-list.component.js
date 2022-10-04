import React, { useState } from 'react';
import './product-list.component.scss';
import Products from './Products.component';
import ProductListNav from '../Navs/ProductListNav.component';

function ProductList() {
  const [productsArr, setProductsArr] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);
  return (
    <div>
      <ProductListNav
        checkedProducts={checkedProducts}
        productsArr={productsArr}
      />
      <hr />
      <div className="products">
        <Products
          productsArr={productsArr}
          setProductsArr={setProductsArr}
          checkedProducts={checkedProducts}
          setCheckedProducts={setCheckedProducts}
        />
      </div>
    </div>
  );
}

export default ProductList;
