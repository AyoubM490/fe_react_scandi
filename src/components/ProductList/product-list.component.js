import React, { useEffect } from 'react';
import './product-list.component.scss';
import Products from './Products.component';
import ProductListNav from '../Navs/ProductListNav.component';

function ProductList() {
  return (
    <div>
      <ProductListNav />
      <hr />
      <div className="products">
        <Products />
      </div>
    </div>
  );
}

export default ProductList;
