import React from 'react';
import { Link } from 'react-router-dom';
import './product-list.component.scss';

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

const Product = () => (
  <div className="product">
    <input type="checkbox" className="delete-checkbox" />
    <div className="product-sku">
      <span>SKU</span>
    </div>
    <div className="product-name">
      <span>Product Name</span>
    </div>
    <div className="product-price">$100</div>
    <div className="product-type">10</div>
  </div>
);
const Products = () => (
  <div className="products">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </div>
);

function ProductList() {
  return (
    <div>
      <ProductListNav />
      <hr />
      <Products />
    </div>
  );
}

export default ProductList;
