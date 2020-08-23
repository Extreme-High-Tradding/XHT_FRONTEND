import React from 'react';
import logo from '../assets/static/logo_header.png';
import arrow from '../assets/static/arrow.png';
import '../App.scss';

const Header = () => (
  <header className="header__main">
    <div className="header__container">

      <div className="header__logo">
        <a href="#"><img className="header__img" src={logo} alt="Logo" /></a>
      </div>

      <div className="header__nav--logo">
        <ul className="header__markets">
          <li><a className="header__despliegue" href="#">Exchange<img src={arrow} alt="arrow" /></a>
            <ul className="header__deploy">
              <li><a href="#">BTC/USD</a></li>
              <li><a href="#">TESLA/USD</a></li>
              <li><a href="#">GOLD/USD</a></li>
            </ul>
          </li>
        </ul>
      </div>

    </div>

    <div className="header__menu">
      <ul className="header__btn">
        <li><a className="header__btn--user" href="#">Log In</a></li>
        <li><a className="header__btn--user" href="#">Sing Up</a></li>
      </ul>
    </div>

  </header>
);

export default Header;