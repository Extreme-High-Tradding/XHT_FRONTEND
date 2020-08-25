import React from 'react';
import '../../App.scss';

const Buy = () => (
  <div className="table__buy">
    <div className="table__content">
      <input placeholder="Price" type="text" className="form__values" />
      <span className="table__value">USD</span>
    </div>
    <div className="table__content">
      <input placeholder="Amount" type="text" className="form__values" />
      <span className="table__value">USD</span>
    </div>

    <div className="orden__total">
      <label className="orden__label">Total</label>
      <div className="total__content">
        <span className="total__content_amount">0.0000000000</span>
        <span className="total__content_account">USD</span>
      </div>
    </div>
    <div className="btn__order">
      <button type="button" className="btn__buy">Buy</button>
    </div>
  </div>
);

export default Buy;