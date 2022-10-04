import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductAttr from '../ProductAttr';
import ProductsApi from '../Services/ProductsApi';
import './addProduct.scss';

function AddProduct({ changed }) {
  const [types, setAllTypes] = useState(null);
  const [typeSelected, setType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ProductsApi.getTypes().then((res) => {
      setAllTypes(res.data);
      if (types) setType(types[0]);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (changed) navigate('/');
  }, [navigate, changed]);

  let typesList;
  if (types === null) return <div>Loading...</div>;
  typesList = types.map((type, index) => (
    <option value={type.id} key={index}>
      {type.name}
    </option>
  ));
  const changeType = (val) => {
    if (val.length > 0) setType(val);
  };

  return (
    <>
      <div id="products-wrapper" className="add-prod-wrapp">
        <form id="product_form">
          <div>
            <label htmlFor="sku">SKU</label>
            <input type="text" id="sku" className="basicInp" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="basicInp" />
          </div>
          <div>
            <label htmlFor="price">Price($)</label>
            <input
              type="number"
              id="price"
              step="0.1"
              min="1"
              className="basicInp"
            />
          </div>
          <div style={{ marginTop: '70px' }}>
            <label htmlFor="productType">Type Switcher</label>
            <select
              id="productType"
              onChange={(e) => changeType(e.target.value)}
              defaultValue={0}
            >
              <option value="0">---Select product type---</option>
              {typesList}
            </select>
          </div>
          <div id="spec-inputs">
            <ProductAttr type={typeSelected} />
          </div>
        </form>
        <ul id="errors-wrapper" />
      </div>
    </>
  );
}

AddProduct.propTypes = {
  changed: PropTypes.bool.isRequired,
};

export default AddProduct;
