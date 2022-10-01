import React from 'react';
import PropTypes from 'prop-types';
import BookForm from './BookForm.component';
import DVDForm from './DVDForm.component';
import FurnitureForm from './FurnitureForm.component';

const AddProductForm = (props) => {
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
  const types = ['DVD', 'Book', 'Furniture'];
  const onChangeSKU = (e) => {
    setSku(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onChangeType = (e) => {
    setType(e.target.value);
  };

  return (
    <form id="product_form">
      <div className="form-group">
        <label className="label" htmlFor="sku">
          SKU
        </label>
        <input
          type="text"
          className="form-control"
          value={sku}
          id="sku"
          placeholder="Enter SKU"
          onChange={onChangeSKU}
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          id="name"
          placeholder="Enter Name"
          onChange={onChangeName}
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="price">
          Price ($)
        </label>
        <input
          type="text"
          className="form-control"
          value={price}
          id="price"
          placeholder="Enter Price"
          onChange={onChangePrice}
        />
      </div>

      <div className="form-group">
        <label className="label" htmlFor="type-switcher">
          Type Switcher
        </label>
        <select
          className="form-control"
          id="productType"
          onChange={onChangeType}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {type === 'DVD' && <DVDForm size={size} setSize={setSize} />}
      {type === 'Book' && <BookForm weight={weight} setWeight={setWeight} />}
      {type === 'Furniture' && (
        <FurnitureForm
          height={height}
          setHeight={setHeight}
          width={width}
          setWidth={setWidth}
          length={length}
          setLength={setLength}
        />
      )}
    </form>
  );
};

AddProductForm.propTypes = {
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

export default AddProductForm;
