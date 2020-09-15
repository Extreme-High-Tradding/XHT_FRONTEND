import React from 'react';
import BuyandSell from '../components/BuyandSell/BuyandSell';
import RecentsTrades from '../components/RecentsTrades';
import Markets from '../components/Markets'
import Graphic from '../components/Graphic';
import './Home.scss';

const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
          <div className="container__chart">
            <Graphic />
          </div>
          <div className="container__tools">
              <div className="container__tools--buyandsell">
                <div className="container__balance">
                  <h3>Balance:</h3>
                  <a id="balance" className="header__navegation--value" alt="balance">100.000</a>
                </div>
                <BuyandSell />
              </div>
              <div className="container__tools--trades">
                <RecentsTrades />
              </div>
              <div className="container__tools--markets">
                <Markets />
              </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Home;
