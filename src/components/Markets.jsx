import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Markets = () => {

  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    setInterval(() => {
      obtenerDatos()
    }, 8000);
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BCH&tsyms=USD&e=Coinbase&extraParams=your_app_name');
    const crypto = await data.json();
    try {
      document.getElementById('closing').innerHTML = crypto.RAW.BTC.USD.PRICE;
    } catch (e) {
      console.log('NO EXISTEN POSICIONES ABIERTAS')
    }

    console.log(crypto.RAW.BTC.USD.PRICE);
    setCryptos(crypto);
  }

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
          {Object.keys(Object(cryptos.RAW)).map((key) => (
          <tr key={key}>
          <td className="markets__pair--symbol">
            {key}
          </td>
          <td>
            ${Object(cryptos.RAW)[key].USD.PRICE}
          </td>
          <td>
            {Object(cryptos.RAW)[key].USD.LOW24HOUR}
          </td>
          <td className="markets__pair--symbol">
            ${Object(cryptos.RAW)[key].USD.CHANGEPCT24HOUR.toFixed(2)}%
          </td>
        </tr>))}
          </tbody>
        </table>
    </div>
    )
  }

export default Markets;