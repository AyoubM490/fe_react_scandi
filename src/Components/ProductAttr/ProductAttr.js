import React, { useState, useEffect } from 'react';
import ProductsApi from '../Services/ProductsApi';
import './productAttr.scss';

function ProductAttr({ type }) {
  const [attrs, setAttrs] = useState(null);

  useEffect(() => {
    if (type && parseInt(type, 10) !== 0) {
      ProductsApi.getSpecAttr(type).then((res) => {
        setAttrs(res.data);
      });
    } else setAttrs(null);
  }, [type]);

  let attrHTML;
  if (type === 'Furniture') {
    attrHTML = attrs && (
      <div id={type}>
        <h4>Special Attributes</h4>
        <div>
          <label htmlFor="width">Width:</label>
          <input type="number" min="1" step="0.1" id="width" required />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input type="number" min="1" step="0.1" id="height" required />
        </div>
        <div>
          <label htmlFor="length">Length:</label>
          <input type="number" min="1" step="0.1" id="length" required />
        </div>
        <p>
          <strong>
            Please, provide
            {' '}
            {type}
            &apos;s
            {' '}
            {attrs.name}
            {' '}
            in
            {' '}
            {attrs.units}
          </strong>
        </p>
      </div>
    );
  } else {
    attrHTML = attrs && (
      <div id={type}>
        <h4>Special Attribute</h4>
        <div>
          <label htmlFor={attrs.name}>
            {attrs.name}
            (
            {attrs.units}
            )
          </label>
          <input
            type="number"
            min="1"
            step="0.1"
            id={attrs.name.toLowerCase()}
            required
            className="spec-attr"
          />
        </div>
        <p>
          <strong>
            Please, provide
            {' '}
            {type}
            &apos;s
            {' '}
            {attrs.name}
            {' '}
            in
            {' '}
            {attrs.units}
          </strong>
        </p>
      </div>
    );
  }
  return attrHTML;
}
export default ProductAttr;
