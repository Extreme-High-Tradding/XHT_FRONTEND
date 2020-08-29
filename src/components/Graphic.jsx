import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Graphic = () => (
  <div>
  <button>TSLA</button>
  <button>APPL</button>
  <button>GOOGL</button>
  <TradingViewWidget symbol="NASDAQ:GOOGL" /*theme={Themes.DARK}*/
  locale="fr"
  autosize />
  </div>

);

export default Graphic;