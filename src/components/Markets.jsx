import React, { Component } from 'react';
import axios from 'axios';

class Markets extends Component {

  constructor() {
    super();
    this.state = {
      markets: []
    };
  };

  async componentDidMount() {
    const respuesta = await axios.get( 'https://sandbox.iexapis.com/stable/stock/aapl/peers?token=Tsk_2c0c88ee6ef14adb9250bfa7391d2c33 ' /* 'https://sandbox.iexapis.com/stable/stock/market/batch?symbols=TLSA,GOLD&types=quote&range=1m&last=5&token=Tsk_2c0c88ee6ef14adb9250bfa7391d2c33' */  /* ' https://sandbox.iexapis.com/stable/stock/TSLA/quote?token=Tpk_955576a7523c4a48b0e87e29d439a38e' */);
    console.log('respuesta ', respuesta.data);
    this.setState({
      markets: respuesta.data
    })
      /* .then(res => {
        const market = res.data;
        console.log(market.change);
      }) */
  }

  ponerFilas = () => {
    this.state.markets.map((currency) => (
      <tr key={currency}>
          <td className="markets__pair">
            { currency.symbol }
          </td>
          <td>
            { currency.latestPrice }
          </td>
          <td>
            { currency.changePercent }
          </td>
        </tr>
    ))
  }

  render() {
    console.log(this.state.market)
    return (
      <div className="trades__main">
    <div className="trades__title">
      <h1>Markets</h1>
    </div>
    <table className="trades__table">
      <thead>
        <tr>
          <th className="markets__pair">
            Pair
          </th>
          <th>
            price
          </th>
          <th>
            Change
          </th>
        </tr>
      </thead>
      <tbody>
        {this.ponerFilas}
        <tr>
          <td className="markets__pair">
            BTC
          </td>
          <td>
            0.020215
          </td>
          <td>
            11740.000
          </td>
        </tr>
        <tr>
          <td className="markets__pair">
            GOLD
          </td>
          <td>
            0.020215
          </td>
          <td>
            11740.000
          </td>
        </tr>

      </tbody>

    </table>
  </div>
    )
  }
}

/* const Markets = () => (
  <div className="trades__main">
    <div className="trades__title">
      <h1>Markets</h1>
    </div>
    <table className="trades__table">
      <thead>
        <tr>
          <th className="markets__pair">
            Pair
          </th>
          <th>
            Price
          </th>
          <th>
            Change
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="markets__pair">
            TESLA
          </td>
          <td>
            0.020215
          </td>
          <td>
            11740.000
          </td>
        </tr>
        <tr>
          <td className="markets__pair">
            BTC
          </td>
          <td>
            0.020215
          </td>
          <td>
            11740.000
          </td>
        </tr>
        <tr>
          <td className="markets__pair">
            GOLD
          </td>
          <td>
            0.020215
          </td>
          <td>
            11740.000
          </td>
        </tr>

      </tbody>

    </table>
  </div>
); */

export default Markets;