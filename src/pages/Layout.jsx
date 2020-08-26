import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="layout__container">
        <div>
          <Header />
        </div>
        <div>
          {props.children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout;