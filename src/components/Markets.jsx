import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Markets = () => {

  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    console.log('useEffect')
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BCH&tsyms=USD&e=Coinbase&extraParams=your_app_name')
    const crypto = await data.json()
    /* console.log(crypto) */
    setCryptos(crypto)
    /* console.log(setCryptos(crypto)) */
  }

  console.log((cryptos.RAW))
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
            <tr key={key}>
            <td className="markets__pair--symbol">
              {key}
            </td>
            <td>
              ${cryptos.RAW.BTC.USD.PRICE}
            </td>
            <td>
            {cryptos.RAW.BTC.USD.LOW24HOUR}
            </td>
            <td className="markets__pair--symbol">
              ${cryptos.RAW.BTC.USD.CHANGEPCT24HOUR.toFixed(2)}%
            </td>
            </tr>
          </tbody>
        </table>
    </div>
    )
  }

export default Markets;