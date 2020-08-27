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
        <form className="table__buy" id="form__markert">
          <div className="table__content">
            <input
              id="form__input"
              onChange={this.handleChange}
              name="price"
              placeholder="Price"
              type="text"
              className="form__values" />
            <span className="table__value">USD</span>
          </div>
          <div className="table__content">
            <input
              id="form__input"
              onChange={this.handleChange}
              name="amount"
              placeholder="Amount"
              type="text"
              className="form__values" />
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
            <button 
              onClick={this.handleClick}
              type="button" 
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