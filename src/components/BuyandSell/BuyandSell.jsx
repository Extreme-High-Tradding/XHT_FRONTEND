import React, { Component} from 'react';
import Sell from './Sell';
import Buy from './Buy';
import '../../App.scss';

class BuyandSell extends Component {
  render(){
    return(
      <div className="order">
        <div className="order__container">
          <Sell />
        </div>
        <div className="order__container">
          <Buy />
        </div>
      </div>
    )
  }
}

export default BuyandSell;