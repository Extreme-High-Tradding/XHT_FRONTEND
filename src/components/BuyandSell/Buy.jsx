import React, { Component } from 'react';
import '../../App.scss';


const Buy = ({value}) => {
    return (
        <form className="form" id="buy_form">
          <div className="form__inputs">
            <div className="form__info">
              <input
                id="price"
                name="price"
                placeholder="Price"
                type="text"
                className="form__info--price" alt="price"/>
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
                <div className="form__info--symbol">
                  <span>USD</span>
                </div>
            </div>
            <div className="form__info">
              <input
                id="amount"
                name="amount"
                placeholder="Amount"
                type="text"
                className="form__info--amount" alt="amount"/>
                <div className="form__info--symbol">
                  <span>{value}</span>
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
                className="form__content--btn-buy"
                alt="buy">Buy</button>
            </div>
          </div>
        </form>
    )
  }


export default Buy;