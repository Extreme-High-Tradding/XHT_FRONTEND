import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Graphic = () => (
  <TradingViewWidget symbol="NASDAQ:TSLA" /*theme={Themes.DARK}*/
  locale="fr"
  autosize />
);

export default Graphic;