import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

class Graphic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    if (this.state.isToggleOn) {
      return (
        <React.Fragment>
          <div>
              <button type="submit" disabled onClick={this.handleClick} >TSLA</button>
              <button type="submit" onClick={this.handleClick}>APPL</button>
              <button type="submit" onClick={this.handleClick}>GOOGL</button>
              <TradingViewWidget symbol="NASDAQ:TSLA" /*theme={Themes.DARK}*/
              locale="fr"
              autosize />
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div>
              <button onClick={this.handleClick} className="order1__buy">TSLA</button>
              <button disabled onClick={this.handleClick} className="order__sell">APPL</button>
              <button type="submit" onClick={this.handleClick}>GOOGL</button>
              <TradingViewWidget symbol="NASDAQ:AAPL" /*theme={Themes.DARK}*/
              locale="fr"
              autosize />
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Graphic;

/* const Graphic = () => {

  return(
    <div>
      <button >TSLA</button>
      <button>APPL</button>
      <button>GOOGL</button>
      <TradingViewWidget symbol="NASDAQ:GOOGL" theme={Themes.DARK}
      locale="fr"
      autosize />
    </div>
  )
};

export default Graphic; */