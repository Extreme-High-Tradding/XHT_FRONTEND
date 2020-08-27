import React, { Component } from 'react';
import axios from 'axios';

class Markets extends Component {

  constructor(props) {
    super(props);

    this.state = {
      market: []
    };
  }

  componentDidMount() {
    axios.get('https://sandbox.iexapis.com/stable/stock/market/batch?symbols=TLSA,GOLD,btcusd&types=quote&range=1m&last=5&token=Tsk_2c0c88ee6ef14adb9250bfa7391d2c33')
      .then(res => {
        const market = res.data;
        console.log(market);
      })
  }

  render() {
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