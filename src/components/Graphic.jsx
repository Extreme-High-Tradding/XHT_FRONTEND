import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';



const Graphic = ({ symbol }) => {
  return(
    <React.Fragment>
        <TradingViewWidget symbol={symbol} theme={Themes.LIGHT}
        locale="fr"
        autosize />
    </React.Fragment>
  )
}

export default Graphic;