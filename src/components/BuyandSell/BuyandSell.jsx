import React, { Component} from 'react';
import Sell from './Sell';
import Buy from './Buy';
import '../../App.scss';


const BuyandSell = ({ currency, value }) => {
  return(
    <div className="order">
        <div className="order__container">
          <Sell currency={currency} value={value} />
        </div>
        <div className="order__container">
          <Buy currency={currency} value={value} />
        </div>
      </div>
  )
}

export default BuyandSell;