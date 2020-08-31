import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo_header.png';
import logomobile from '../assets/static/FondoHigh.png';
import menu from '../assets/static/menu.png';
import '../App.scss';

const Header = () => {
    return (
    <header className="header__main">
      <div className="header__container">
        <div className="header__logo">
          <a href="#">
            <img className="header__img" src={logo} alt="Logo" />
            <img className="header__img--mobile" src={logomobile} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="header__menu">
        <a href="#"><img className="img--hamburger" src={menu} alt="menu" /></a>
        <ul className="header__dropdown">
          <li className="content__balance">Balance: <a id="balance" className="balance_value">100.000</a></li>
          {/* <li><Link to="/signin">Login</Link></li> */}
          <li><Link to="/">Exchage</Link></li>
        </ul>
      </div>
    </header>
    )
  }


export default Header;