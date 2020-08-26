import React from 'react';


class Graphic extends React.Component {
  /* componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    document.body.appendChild(script);
  } */

  render() {
    function LoadCharts() {
     /*  let symbol = document.getElementById('pairs').value; */
      new TradingView.widget(
      {
      "width": 980,
      "height": 610,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "in",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tvchart"
      })
      }
     /*  LoadCharts(); */
    return (
      <div>
        <select onchange={LoadCharts()} id="pairs">
            <option value="BTC/USDT">BTC/USDT</option>
            {/* <option value="BTC/USDT">ETH/USDT</option> */}
        </select>
        <div class="tradingview-widget-container" id="tvchart">
        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
        </div>
      </div>
    )
  }
}

/* const Graphic = () => (
    <div class="tradingview-widget-container">
      <div id="tradingview_70c14"></div>
      <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>
      <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
      <script type="text/javascript">
      
          )};
      </script>
    </div>

); */

export default Graphic;