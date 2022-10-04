import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Product from './Product.component';

const Products = (props) => {
  const {
    productsArr, setProductsArr, checkedProducts, setCheckedProducts,
  } = props;

  useEffect(() => {
    async function fetchData() {
      let products = await fetch(
        'https://ayoub-chahir-scandi-api.herokuapp.com/api/products',
      );
      products = await products.json();
      products = products.data;

      return products || [];
    }

    let res = fetchData();
    res.then((products) => {
      setProductsArr(products);
    });
  }, []);

  const Products = productsArr.map((product) => (
    <Product
      product={product}
      sku={product.sku}
      name={product.product}
      price={product.price}
      property={product.property}
      propertyValue={product.property_value}
      units={product.units}
      checkedProducts={checkedProducts}
      setCheckedProducts={setCheckedProducts}
    />
  ));

  return Products;
};

Products.propTypes = {
  id: PropTypes.string.isRequired,
  setId: PropTypes.func.isRequired,
};

export default Products;
