import React from 'react';
import PropTypes from 'prop-types';

const FurnitureForm = ({
  height,
  setHeight,
  width,
  setWidth,
  length,
  setLength,
}) => {
  const onChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const onChangeWidth = (e) => {
    setWidth(e.target.value);
  };

  const onChangeLength = (e) => {
    setLength(e.target.value);
  };
  return (
    <div className="furniture-form" id="Furniture">
      <div className="notice">! Please provide dimensions in HxWxL format</div>
      <div className="notice mt-3">! Please provide Height in CM</div>
      <div className="form-group">
        <label className="label" htmlFor="furniture-height">
          Height (CM)
        </label>
        <input
          type="text"
          className="form-control"
          value={height}
          onChange={onChangeHeight}
          id="height"
        />
      </div>
      <div className="notice">! Please provide Width in CM</div>
      <div className="form-group">
        <label className="label" htmlFor="width">
          Width (CM)
        </label>
        <input
          type="text"
          className="form-control"
          value={width}
          onChange={onChangeWidth}
          id="width"
        />
      </div>
      <div className="notice">! Please provide Length in CM</div>
      <div className="form-group">
        <label className="label" htmlFor="furniture-length">
          Length (CM)
        </label>
        <input
          type="text"
          className="form-control"
          value={length}
          onChange={onChangeLength}
          id="furniture-length"
        />
      </div>
    </div>
  );
};

FurnitureForm.propTypes = {
  height: PropTypes.number.isRequired,
  setHeight: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  setWidth: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};

export default FurnitureForm;
