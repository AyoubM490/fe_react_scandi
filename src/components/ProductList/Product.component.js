import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const {
    sku, name, price, size, weight, height, width, length, key,
  } = props;
  return (
    <div className="product">
      <input type="checkbox" className="delete-checkbox" />
      <div className="product-sku">
        <span>{sku}</span>
      </div>
      <div className="product-name">
        <span>{name}</span>
      </div>
      <div className="product-price">
        {price}
        {' '}
        $
      </div>
      {size && (
        <div className="product-type">
          {size}
          MB
        </div>
      )}
      {weight && (
        <div className="product-type">
          {Number(weight)}
          KG
        </div>
      )}
      {height && width && length && (
        <div className="product-type">
          {Number(height)}
          x
          {Number(width)}
          x
          {Number(length)}
        </div>
      )}
    </div>
  );
};

Product.propTypes = {
  key: PropTypes.number.isRequired,
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  size: PropTypes.number,
  weight: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  length: PropTypes.number,
};

export default Product;
