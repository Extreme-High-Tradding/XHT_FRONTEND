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
          <li><a className="header__despliegue" href="#">Markets</a>
            <ul className="header__deploy">
              <li><a>BTC/USD</a></li>
              <li><a>TESLA/USD</a></li>
              <li><a>GOLD/USD</a></li>
            </ul>
          </li>
        </ul>
      </div>

    </div>

    <div className="header__menu">
      <ul className="header__btn">
        <li><a href="#">Log In</a></li>
        <li><a href="#">Sing Up</a></li>
      </ul>
    </div>

  </header>
);

export default Header;