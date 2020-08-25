import React from 'react';
import Header from '../components/Header';
import BuyandSell from '../components/BuyandSell/BuyandSell';
import Buy from '../components/BuyandSell/Buy';
import RecentsTrades from '../components/RecentsTrades';
import Markets from '../components/Markets'
import Footer from '../components/Footer';
import Graphic from '../components/Graphic';
import './Home.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
          <div className="container__chart">
            <Graphic />
          </div>
          <div className="container__tools">
              <div className="test">
                <BuyandSell />
              </div>
              <div className="test1">
                <RecentsTrades />
              </div>
              <div className="test2">
                <Markets />
              </div>
          </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Home;