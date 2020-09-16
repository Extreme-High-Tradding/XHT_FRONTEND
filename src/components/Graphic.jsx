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

/* class Graphic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marketChart: 1,
      market: 'COINBASE:BTCUSD',
      currency: ''
    }
  }

  handleClick = () => {
    this.setState({
      marketChart: 0,
      market: 'COINBASE:BTCUSD',
      currency: 'BTC'
    });
  }

  handleClickOne = () => {
    this.setState({
      marketChart: 1,
      market: 'COINBASE:ETHUSD',
      currency: 'ETH'
    });
  }

  handleClickTwo = () => {
    this.setState({
      marketChart: 2,
      market: 'COINBASE:BCHUSD',
      currency: 'BCH'
    });
  }

  render() {
    return(
      <React.Fragment>
          <button type="submit" onClick={this.handleClick}>Bitcoin</button>
          <button type="submit" onClick={this.handleClickOne}>Ethereum</button>
          <button type="submit" onClick={this.handleClickTwo}>Bitcoin Cash</button>
          <TradingViewWidget symbol={this.state.market} theme={Themes.LIGHT}
          locale="fr"
          autosize />
      </React.Fragment>
    )
  }
}

export default Graphic; */