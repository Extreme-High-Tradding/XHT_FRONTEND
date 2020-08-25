import React from 'react';

const Markets = () => (
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
);

export default Markets;