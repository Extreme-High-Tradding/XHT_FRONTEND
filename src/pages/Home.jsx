import React from 'react';
import Header from '../components/Header';
import BuyandSell from '../components/BuyandSell/BuyandSell';
import Buy from '../components/BuyandSell/Buy';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <BuyandSell />
      <Footer />
    </React.Fragment>
  )
}

export default Home;