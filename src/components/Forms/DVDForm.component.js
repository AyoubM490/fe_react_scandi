import React from 'react';
import PropTypes from 'prop-types';

const DVDForm = ({ size, setSize }) => {
  const onChangeSize = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className="dvd-form" id="DVD">
      <div className="notice">! Please provide size in MB format</div>
      <div className="form-group">
        <label className="label" htmlFor="dvd-size">
          Size (MB)
        </label>
        <input
          type="number"
          onChange={onChangeSize}
          value={size}
          className="form-control"
          id="dvd-size"
        />
      </div>
    </div>
  );
};

DVDForm.propTypes = {
  size: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired,
};

export default DVDForm;
