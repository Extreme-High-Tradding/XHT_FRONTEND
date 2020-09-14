import React from 'react';

const RecentsTrades = () => (
  <div className="trades__main">
    <div className="trades__title">
      <h1>Real-Time</h1>
    </div>
    <div className="table_content">
      <table className="trades__table">
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Operation
            </th>
            <th>
              Asset
            </th>
            <th >
              Amount
            </th>
            <th >
              Open
            </th>
            <th >
              Close
            </th>
          </tr>
        </thead>
        <tbody id="real_time-table" className="real__table">
        </tbody>
      </table>
    </div>

  </div>
);

export default RecentsTrades;