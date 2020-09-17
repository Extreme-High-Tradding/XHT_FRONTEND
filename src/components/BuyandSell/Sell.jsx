import React, { Component } from 'react';
import '../../App.scss';


const Sell = ({ currency, value}) => {
    return(
      <form className="form" id="sell_form" >
        <div className="form__inputs">
          <div className="form__info">
            <input
              id="pricesell"
              name="price"
              placeholder="Price"
              type="text"
              value={value}
              className="form__info--price" alt="price"/>
              <div className="form__info--symbol">
                <span>USD</span>
              </div>
          </div>
          <div className="form__info">
            <input
              id="amountsell"
              name="amount"
              placeholder="Amount"
              type="text"
              value="1"
              className="form__info--amount" alt="amount"/>
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
              <div className="form__info--symbol">
                <span>{currency}</span>
              </div>
          </div>
        </div>
            <div className="form__content">
              <div className="form__content--label">
                <p className="form__content--labelname">Total</p>
                <span className="form__content--amount">0.0000000000</span>
                <span className="form__content--symbol">USD</span>
              </div>
              <div className="form__content--btn">
                <button
                  type="submit"
                  className="form__content--btn-sell"
                  alt="sell">Sell</button>
              </div>
            </div>
        </form>
    )
  }

export default Sell;