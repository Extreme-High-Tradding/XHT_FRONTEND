import React, { Component } from 'react';
import '../../App.scss';


const Buy = () => {
    return (
        <form className="table__buy" id="buy_form">
          <div className="table__content">
            <input
              id="price"
              name="price"
              placeholder="Price"
              type="text"
              className="form__values" />
            <span className="table__value">USD</span>
          </div>
          <div className="table__content">
            <input
              id="amount"
              name="amount"
              placeholder="Amount"
              type="text"
              className="form__values" />
            <span className="table__value">USD</span>
          </div>

            <input
              id="user_id"
              value="1"
              name="user_id"
              type="hidden"
              className="input__hidden" />
            <input
              id="operation_type"
              value="False"
              name="operation_type"
              type="hidden"
              className="input__hidden" />
            <input
              id="operation_status"
              value="True"
              name="operation_status"
              type="hidden"
              className="input__hidden" />
            <input
              id="asset"
              value="1"
              name="asset"
              type="hidden"
              className="input__hidden" />

          <div className="orden__total">
            <label className="orden__label">Total</label>
            <div className="total__content">
              <span className="total__content_amount">0.0000000000</span>
              <span className="total__content_account">USD</span>
            </div>
          </div>
          <div className="btn__order">
            <button
              type="submit"
              className="btn__buy">Buy</button>
          </div>
        </form>
    )
  }


export default Buy;