import React from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ weight, setWeight }) => {
  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  return (
    <div className="book-form" id="Book">
      <div className="notice">! Please provide weight in KG format</div>
      <div className="form-group">
        <label className="label" htmlFor="book-weight">
          Weight (KG)
        </label>
        <input
          type="number"
          value={weight}
          onChange={onChangeWeight}
          className="form-control"
          id="weight"
        />
      </div>
    </div>
  );
};

BookForm.propTypes = {
  weight: PropTypes.number.isRequired,
  setWeight: PropTypes.func.isRequired,
};

export default BookForm;
