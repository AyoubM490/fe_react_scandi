import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const {
    sku,
    name,
    price,
    size,
    weight,
    height,
    width,
    length,
    id,
    checkedProducts,
    setCheckedProducts,
    product,
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
        {price}
        {' '}
        $
      </div>
      <div id="productType">
        {size && (
          <div className="product-type" id="size">
            {size}
            MB
          </div>
        )}
        {weight && (
          <div className="product-type" id="weight">
            {Number(weight)}
            KG
          </div>
        )}
        {height && width && length && (
          <div className="product-type">
            <span id="height">{Number(height)}</span>
            x
            <span id="width">{Number(width)}</span>
            x
            <span id="length">{Number(length)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  size: PropTypes.number,
  weight: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  length: PropTypes.number,
  id: PropTypes.string.isRequired,
  checkedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCheckedProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

export default Product;
