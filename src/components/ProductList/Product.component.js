import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const {
    product,
    sku,
    name,
    price,
    property,
    propertyValue,
    units,
    checkedProducts,
    setCheckedProducts,
  } = props;

  const [checked, setChecked] = useState(true);

  const handleCheck = () => {
    setChecked(!checked);
    if (!checked) {
      const UpdateProducts = checkedProducts.filter(
        (productChecked) => productChecked !== product,
      );
      setCheckedProducts((products) => [...UpdateProducts]);
    }
    if (!checkedProducts.includes(product)) {
      setCheckedProducts((prevProducts) => [...prevProducts, product]);
    }
  };

  return (
    <div className="product">
      <input
        type="checkbox"
        value={checked}
        onChange={handleCheck}
        className="delete-checkbox"
      />
      <div className="product-sku" id="sku">
        <span>{sku}</span>
      </div>
      <div className="product-name" id="name">
        <span>{name}</span>
      </div>
      <div className="product-price" id="price">
        {Number(price).toFixed(2)}
        {' '}
        $
      </div>
      <div id="productType">
        {property === 'Size' && (
          <div className="product-type" id="size">
            Size:
            {' '}
            {propertyValue}
            {' '}
            {units}
          </div>
        )}
        {property === 'Weight' && (
          <div className="product-type" id="weight">
            Weight:
            {' '}
            {propertyValue}
            {units}
          </div>
        )}
        {property === 'WxHxL' && (
          <div className="product-type">
            {' '}
            Dimension:
            {' '}
            {}
            {propertyValue}
          </div>
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  property: PropTypes.string.isRequired,
  propertyValue: PropTypes.number.isRequired,
  units: PropTypes.string.isRequired,
  checkedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCheckedProducts: PropTypes.func.isRequired,
};

export default Product;
