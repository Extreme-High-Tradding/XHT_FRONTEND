import React, { Component } from 'react';
import '../../App.scss';


class Buy extends Component {
  handleChange  = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick  = (e) => {
    console.log("Button was clicked Buy");
  };
  render () {
    return (
        <form className="table__buy" id="operation_form">
          <div className="table__content">
            <div className="table__content">
              <input
                id="asset"
                value="1"
                name="asset"
                type="hidden"
                className="input__hidden" />
            </div>
            <input
              id="price"
              onChange={this.handleChange}
              name="price"
              placeholder="Price"
              type="text"
              className="form__values" />
            <span className="table__value">USD</span>
          </div>
          <div className="table__content">
            <input
              id="amount"
              onChange={this.handleChange}
              name="amount"
              placeholder="Amount"
              type="text"
              className="form__values" />
            <span className="table__value">USD</span>
          </div>

          <div className="table__content">
            <input
              id="user_id"
              value="1"
              name="user_id"
              type="hidden"
              className="form__values" />
          </div>

          <div className="table__content">
            <input
              id="operation_type"
              value="false"
              name="operation_type"
              type="hidden"
              className="form__values" />
          </div>

          <div className="table__content">
            <input
              id="operation_status"
              value="false"
              name="operation_status"
              type="hidden"
              className="form__values" />
          </div>

          <div className="orden__total">
            <label className="orden__label">Total</label>
            <div className="total__content">
              <span className="total__content_amount">0.0000000000</span>
              <span className="total__content_account">USD</span>
            </div>
          </div>
          <div className="btn__order">
            <button 
              onClick={this.handleClick}
              type="submit"
              className="btn__buy">Buy</button>
          </div>
        </form>
    )
  }
}

/* const Buy = () => (
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
); */

export default Buy;