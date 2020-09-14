import React, { Component } from 'react';
import '../../App.scss';


const Sell = () => {
    return(
      <form className="table__sell" id="sell_form">
      <label className="label__sell">
        <input  className="input__sell" type="checkbox"/>
        <span className="span__sell" ></span>
        <i className="indicator"></i>
      </label>
          <div className="table__content">
            <input
              id="pricesell"
              name="price"
              placeholder="Price"
              type="text"
              className="form__values" />
            <span className="table__value">USD</span>
          </div>
          <div className="table__content">
            <input
              id="amountsell"
              name="amount"
              placeholder="Amount"
              type="text"
              className="form__values" />
            <span className="table__value">USD</span>
          </div>

          <input
              id="usersell_id"
              value="1"
              name="user_id"
              type="hidden"
              className="input__hidden" />
            <input
              id="operationsell_type"
              value="True"
              name="operation_type"
              type="hidden"
              className="input__hidden" />
            <input
              id="operationsell_status"
              value="False"
              name="operation_status"
              type="hidden"
              className="input__hidden" />
            <input
              id="assetsell"
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
              className="btn__sell">Sell</button>
          </div>
        </form>
    )
  }

export default Sell;