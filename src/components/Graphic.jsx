import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

class Graphic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marketChart: 1,
      market: ''
    }
  }

  handleClick = () => {
    this.setState({
      marketChart: 0,
      market: 'NASDAQ:TSLA'
    });
  }

  handleClickOne = () => {
    this.setState({
      marketChart: 1,
      market: 'NASDAQ:AAPL'
    });
  }

  handleClickTwo = () => {
    this.setState({
      marketChart: 2,
      market: 'NASDAQ:GOOGL'
    });
  }

  render() {
    return(
      <div>
          <button type="submit" onClick={this.handleClick} >Tesla, Inc</button>
          <button type="submit" onClick={this.handleClickOne}>Apple Inc.</button>
          <button type="submit" onClick={this.handleClickTwo}>Alphabet Inc.</button>
          <TradingViewWidget symbol={this.state.market} theme={Themes.LIGHT}
          locale="fr"
          autosize />
      </div>
    )
  }
}

export default Graphic;