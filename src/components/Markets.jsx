import React from 'react';

const Markets = () => {

  const [assets, setAssets] = React.useState([]);

  React.useEffect(() => {
    getShares()
  }, []);

  const getShares = async () => {
    const data = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=TSLA%252CAAPL%252CGOOGL", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "6c722fc672mshdcea6cb6a1150abp1d0ceejsn4c6c76f78d6c"
      }
    })
    const users = await data.json()
    console.log(users.quoteResponse.result);
    setAssets(users.quoteResponse.result)
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
              Name
            </th>
            <th className="markets__head">
              Symbol
            </th>
            <th className="markets__head">
              Price
            </th>
            <th className="markets__head">
              Last Price
            </th>
            <th className="markets__head">
              Change
            </th>
          </tr>
        </thead>
        <tbody>
        {assets.map((item) => (
        <tr key={item.symbol}>
          <td className="markets__pair">
            {item.longName}
          </td>
          <td className="markets__pair">
            {item.symbol}
          </td>
          <td>
            {(item.postMarketPrice).toFixed(2)}
          </td>
          <td>
            {(item.regularMarketPrice).toFixed(2)}
          </td>
          <td>
            {(item.postMarketChange).toFixed(2)}
          </td>
        </tr>
        ))}
        </tbody>
      </table>
  </div>

  )
}

export default Markets;