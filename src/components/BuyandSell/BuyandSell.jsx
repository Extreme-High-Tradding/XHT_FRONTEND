import React from 'react';
import Sell from './Sell';
import Buy from './Buy';
import '../../App.scss';

const BuyandSell = () => {
  return (
    <React.Fragment>
      <div className="order__container">
        <ul className="order__btn">
          <li><a hrer="#">Buy</a></li>
          <li><a hrer="#">Sell</a></li>
        </ul>
        <Sell />
        <Buy />
      </div>
    </React.Fragment>
  )
}

export default BuyandSell;