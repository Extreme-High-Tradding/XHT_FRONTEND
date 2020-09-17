import React, { Component } from 'react';
import BuyandSell from '../components/BuyandSell/BuyandSell';
import RecentsTrades from '../components/RecentsTrades';
import Markets from '../components/Markets'
import Chart from '../components/Chart';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marketChart: 1,
      market: "COINBASE:BTCUSD",
      currency: 'BTC',
      value: 10912
    }
  }

  handleClick = () => {
    this.setState({
      marketChart: 0,
      market: 'COINBASE:BTCUSD',
      currency: 'BTC',
      value: 10912
    });
  }

  handleClickOne = () => {
    this.setState({
      marketChart: 1,
      market: 'COINBASE:ETHUSD',
      currency: 'ETH',
      value: 376
    });
  }

  handleClickTwo = () => {
    this.setState({
      marketChart: 2,
      market: 'COINBASE:BCHUSD',
      currency: 'BCH',
      value: 233
    });
  }

  render() {
    return (
      <React.Fragment>
      <div className="container">
          <div className="container__chart">
            <button type="submit" onClick={this.handleClick}>Bitcoin</button>
            <button type="submit" onClick={this.handleClickOne}>Ethereum</button>
            <button type="submit" onClick={this.handleClickTwo}>Bitcoin Cash</button>
            <Chart symbol={this.state.market} />
          </div>
          <div className="container__tools">
              <div className="container__tools--buyandsell">
                <div className="container__balance">
                  <h3>Balance:</h3>
                  <a id="balance" className="header__navegation--value" alt="balance">100.000</a>
                </div>
                <BuyandSell currency={this.state.currency} value={this.state.value} />
              </div>
              <div className="container__tools--trades">
                <RecentsTrades />
              </div>
              <div className="container__tools--markets">
                <Markets currency={this.state.currency} />
              </div>
          </div>
      </div>
    </React.Fragment>
    );
  }
}

export default Home;