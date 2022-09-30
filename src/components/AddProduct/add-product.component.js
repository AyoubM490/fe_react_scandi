import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DVDForm from '../Forms/DVDForm.component';
import BookForm from '../Forms/BookForm.component';
import FurnitureForm from '../Forms/FurnitureForm.component';
import './add-product.component.scss';

const ProductListNav = () => (
  <div className="pl-nav">
    <h1>Product Add</h1>
    <form className="ml-auto">
      <button type="submit" className="save-product-btn">
        Save
      </button>
    </form>
    <Link to="/" className="cancel-product-btn">
      Cancel
    </Link>
  </div>
);

const AddProductForm = () => {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('DVD');
  const [size, setSize] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);

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
    <form>
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
          id="type-switcher"
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

function AddProduct() {
  return (
    <div>
      <ProductListNav />
      <hr />
      <AddProductForm />
    </div>
  );
}

export default AddProduct;
