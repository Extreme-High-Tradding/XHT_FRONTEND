import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="layout__container">
        <React.Fragment>
          <Header />
        </React.Fragment>
        <React.Fragment>
          {props.children}
        </React.Fragment>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </div>
    </React.Fragment>
  )
}

export default Layout;