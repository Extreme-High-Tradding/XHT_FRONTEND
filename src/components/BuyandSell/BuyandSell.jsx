import React, { Component} from 'react';
import Sell from './Sell';
import Buy from './Buy';
import '../../App.scss';


const BuyandSell = ({ currency }) => {
  return(
    <div className="order">
        <div className="order__container">
          <Sell value={currency}/>
        </div>
        <div className="order__container">
          <Buy value={currency}/>
        </div>
      </div>
  )
}

export default BuyandSell;