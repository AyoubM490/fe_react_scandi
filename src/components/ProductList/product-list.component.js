import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './product-list.component.scss';
import ProductListNav from '../Navs/ProductListNav.component';
import Products from './Products.component';

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
