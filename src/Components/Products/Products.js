import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';

function Products({ products }) {
  let productsList;
  if (products === null) return <div>Loading...</div>;
  productsList = products.map((product, index) => (
    <div
      className="product-item"
      id={product.property.toLowerCase()}
      key={index}
    >
      <input type="checkbox" value={product.sku} className="delete-checkbox" />
      <div className="product-desc">
        <div>{product.sku}</div>
        <div>{product.product}</div>
        <div>
          {Number(product.price).toFixed(2)}
          <span> $</span>
        </div>
        <div>
          {product.product_type === 'Furniture' && 'Dimension'}
          {product.product_type === 'Book' && 'Weight'}
          {product.product_type === 'DVD' && 'Size'}
          :
          {'  '}
          {product.property_value}
          {product.property !== 'WxHxL' && product.units}
        </div>
      </div>
    </div>
  ));
  return <div id="products-wrapper">{productsList}</div>;
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Products;
