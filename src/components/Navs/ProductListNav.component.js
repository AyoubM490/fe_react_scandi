import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductListNav = () => (
  <div className="pl-nav">
    <h1>Product List</h1>
    <Link to="/addproduct" className="add">
      ADD
    </Link>
    <form>
      <button type="submit" className="delete-product-btn">
        MASS DELETE
      </button>
    </form>
  </div>
);

export default ProductListNav;
