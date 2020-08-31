import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

class Markets extends Component {

  constructor(props) {
    super(props);
      this.state = {
        cryptos: [],
      }
    }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BCH&tsyms=USD&e=Coinbase&extraParams=your_app_name')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos.RAW})
        console.log('Pruebo Objetos', (this.state.cryptos));
      })
    }


  render() {
    return(
      <div className="trades__main">
        <div className="trades__title">
          <h1>Markets</h1>
        </div>
        <table className="trades__table">
          <thead>
            <tr>
              <th className="markets__head">
                Symbol
              </th>
              <th className="markets__head">
                Price
              </th>
              <th className="markets__head">
                Last Price (24h)
              </th>
              <th className="markets__head">
                Change (24h)
              </th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(this.state.cryptos).map((key) => (
          <tr key={key}>
          <td className="markets__pair--symbol">
            {key}
          </td>
          <td>
            ${this.state.cryptos[key].USD.PRICE}
          </td>
          <td>
          {this.state.cryptos[key].USD.LOW24HOUR}
          </td>
          <td className="markets__pair--symbol">
            ${this.state.cryptos[key].USD.CHANGEPCT24HOUR.toFixed(2)}%
          </td>
        </tr>))}
          </tbody>
        </table>
    </div>
    )
  }
}

export default Markets;