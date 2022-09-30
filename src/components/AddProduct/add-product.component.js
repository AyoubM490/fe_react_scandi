import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DVDForm from '../Forms/DVDForm.component';
import BookForm from '../Forms/BookForm.component';
import FurnitureForm from '../Forms/FurnitureForm.component';
import './add-product.component.scss';
import ProductListNav from '../Navs/ProductListNav.component';
import AddProductForm from '../Forms/AddProductForm.component';

function AddProduct(props) {
  const {
    sku,
    setSku,
    name,
    setName,
    price,
    setPrice,
    type,
    setType,
    size,
    setSize,
    weight,
    setWeight,
    height,
    setHeight,
    width,
    setWidth,
    length,
    setLength,
  } = props;
  return (
    <div>
      <ProductListNav
        sku={sku}
        setSku={setSku}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        type={type}
        setType={setType}
        size={size}
        setSize={setSize}
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        width={width}
        setWidth={setWidth}
        length={length}
        setLength={setLength}
      />
      <hr />
      <AddProductForm
        sku={sku}
        setSku={setSku}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        type={type}
        setType={setType}
        size={size}
        setSize={setSize}
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        width={width}
        setWidth={setWidth}
        length={length}
        setLength={setLength}
      />
    </div>
  );
}

AddProduct.propTypes = {
  sku: PropTypes.string.isRequired,
  setSku: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  setPrice: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  setSize: PropTypes.func.isRequired,
  weight: PropTypes.string.isRequired,
  setWeight: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  setHeight: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  setWidth: PropTypes.func.isRequired,
  length: PropTypes.string.isRequired,
  setLength: PropTypes.func.isRequired,
};

export default AddProduct;
