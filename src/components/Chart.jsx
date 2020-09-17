import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';



const Chart = ({ symbol }) => {
  return(
    <React.Fragment>
        <TradingViewWidget symbol={symbol} theme={Themes.LIGHT}
        locale="fr"
        autosize />
    </React.Fragment>
  )
}

export default Chart;



