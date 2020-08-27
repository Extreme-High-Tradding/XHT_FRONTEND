import React, { Component } from 'react';
import '../../App.scss';


class Sell extends Component {
  handleChange  = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick  = (e) => {
    console.log("Button was clicked Sell");
  };
  render(){
    return(
      <form className="table__sell" id="form__markert">
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
              className="btn__sell">Sell</button>
          </div>
        </form>
    )
  }
}

/* const Sell = () => (
  <div className="table__sell">
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
      <button type="button" className="btn__sell">Sell</button>
    </div>
  </div>
);
 */
export default Sell;