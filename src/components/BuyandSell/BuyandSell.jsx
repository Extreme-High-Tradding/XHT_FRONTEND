import React, { Component} from 'react';
import Sell from './Sell';
import Buy from './Buy';
import '../../App.scss';

class BuyandSell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trade: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      trade: !state.trade
    }));
  }

  render() {
    if (this.state.trade) {
      return (
        <React.Fragment>
          <div className="order__container">
            <ul className="order__btn">
              <li><button type="submit" disabled onClick={this.handleClick} className="order1__buy">Buy</button></li>
              <li><button type="submit" onClick={this.handleClick} className="order__sell">Sell</button></li>
            </ul>
            <Buy />
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="order__container">
            <ul className="order__btn">
              <li><button onClick={this.handleClick} className="order1__buy">Buy</button></li>
              <li><button disabled onClick={this.handleClick} className="order__sell">Sell</button></li>
            </ul>
            <Sell />
          </div>
        </React.Fragment>
      )
    }
  }

}

export default BuyandSell;