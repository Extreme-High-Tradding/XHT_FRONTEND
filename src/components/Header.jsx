import React from 'react';
import logo from '../assets/static/logo_header.png';
import '../App.scss';

const Header = () => (
  <header className="header__main">
    <div className="header__container">

      <div className="header__logo">
        <img className="header__img" src={logo} alt="Logo" />
      </div>

      <div className="header__nav--logo">
        <ul className="header__markets">
          <li><a>BTC/USD</a></li>
         {/*  <li><a>TESLA/USD</a></li>
          <li><a>GOLD/USD</a></li> */}
        </ul>
      </div>

    </div>

    <div className="header__menu">
      <ul className="header__btn">
        <li><a>Log In</a></li>
        <li><a>Sing Up</a></li>
      </ul>
    </div>

  </header>
);

export default Header;