import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductListNav = (props) => {
  const {
    sku, name, price, type, size, weight, height, width, length,
  } = props;
  const dvdData = {
    sku,
    name,
    price,
    size,
  };

  const bookData = {
    sku,
    name,
    price,
    weight,
  };

  const furnitureData = {
    sku,
    name,
    price,
    height,
    width,
    length,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    switch (type) {
      case 'DVD':
        axios.post(
          'https://ayoub-chahir-scandi-api.herokuapp.com/api/dvd/create.php',
          dvdData,
        );
        break;
      case 'Book':
        axios.post(
          'https://ayoub-chahir-scandi-api.herokuapp.com/api/book/create.php',
          bookData,
        );
        break;
      case 'Furniture':
        axios.post(
          'https://ayoub-chahir-scandi-api.herokuapp.com/api/furniture/create.php',
          furnitureData,
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="pl-nav">
      <h1>Product Add</h1>
      <form className="ml-auto" onSubmit={onSubmit}>
        <button type="submit" className="save-product-btn">
          Save
        </button>
      </form>
      <Link to="/" className="cancel-product-btn">
        Cancel
      </Link>
    </div>
  );
};

ProductListNav.propTypes = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
};

export default ProductListNav;
