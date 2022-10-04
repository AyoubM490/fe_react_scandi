import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import { NavLink } from 'react-router-dom';

function Header({
  headerText, navText, onProductSave, onDeleteChecked,
}) {
  const addButton = (
    <NavLink
      to={navText[0] === 'ADD' ? '/add-product' : ''}
      className="control-button"
    >
      {navText[0]}
    </NavLink>
  );
  const saveButton = (
    <button
      type="button"
      className="add control-button"
      onClick={() => {
        onProductSave();
      }}
    >
      {navText[0]}
    </button>
  );
  const cancelButton = (
    <NavLink to="/" className="control-button">
      {navText[1]}
    </NavLink>
  );
  const deleteButton = (
    <button
      type="button"
      className="add control-button"
      id="delete-product-button"
      onClick={() => onDeleteChecked()}
    >
      {navText[1]}
    </button>
  );
  return (
    <header id="products-heading">
      <h1>{headerText}</h1>
      <div id="products-control-buttons">
        {navText[0] === 'Save' ? saveButton : addButton}
        {navText[1] === 'Cancel' ? cancelButton : deleteButton}
      </div>
    </header>
  );
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  navText: PropTypes.arrayOf(PropTypes.string).isRequired,
  onProductSave: PropTypes.func,
  onDeleteChecked: PropTypes.func,
};

export default Header;
