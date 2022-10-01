import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductListNav = (props) => {
  const { checkedProducts } = props;
  const dvds = checkedProducts.filter((product) => product.size !== undefined);
  const furnitures = checkedProducts.filter(
    (product) => product.length !== undefined,
  );
  const books = checkedProducts.filter(
    (product) => product.weight !== undefined,
  );
  const onSubmit = (e) => {
    e.preventDefault();

    if (dvds) {
      dvds.forEach((dvd) => {
        fetch(
          'https://ayoub-chahir-scandi-api.herokuapp.com/api/dvd/delete.php/',
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: dvd.id }),
          },
        );
      });
    }

    if (furnitures) {
      furnitures.forEach((furniture) => {
        fetch(
          'https://ayoub-chahir-scandi-api.herokuapp.com/api/furniture/delete.php/',
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: furniture.id }),
          },
        );
      });
    }

    if (books) {
      books.forEach((book) => {
        fetch(
          'https://ayoub-chahir-scandi-api.herokuapp.com/api/book/delete.php/',
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: book.id,
            }),
          },
        );
      });
    }
  };
  return (
    <div className="pl-nav">
      <h1>Product List</h1>
      <Link to="/addproduct" className="add">
        ADD
      </Link>
      <form onSubmit={onSubmit}>
        <button type="submit" className="delete-product-btn">
          MASS DELETE
        </button>
      </form>
    </div>
  );
};

ProductListNav.propTypes = {
  checkedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductListNav;
