import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

class Graphic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marketChart: 1,
      market: 'COINBASE:BTCUSD'
    }
  }

  handleClick = () => {
    this.setState({
      marketChart: 0,
      market: 'COINBASE:BTCUSD'
    });
  }

  handleClickOne = () => {
    this.setState({
      marketChart: 1,
      market: 'COINBASE:ETHUSD'
    });
  }

  handleClickTwo = () => {
    this.setState({
      marketChart: 2,
      market: 'COINBASE:BCHUSD'
    });
  }

  render() {
    return(
      <div className="graphic__container">
          <button type="submit" onClick={this.handleClick}>Bitcoin</button>
          <button type="submit" onClick={this.handleClickOne}>Ethereum</button>
          <button type="submit" onClick={this.handleClickTwo}>Bitcoin Cash</button>
          <TradingViewWidget symbol={this.state.market} theme={Themes.LIGHT}
          locale="fr"
          autosize />
      </div>
    )
  }
}

export default Graphic;