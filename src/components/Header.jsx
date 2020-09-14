import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo_header.png';
import logomobile from '../assets/static/FondoHigh.png';
import menu from '../assets/static/menu.png';
import '../App.scss';

const Header = () => {
    return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo--design">
          <a href="#">
            <img className="header__logo--desk" src={logo} alt="Logo" />
            <img className="header__logo--mobile" src={logomobile} alt="Logo--mobile" />
          </a>
        </div>
      </div>
      <div className="header__balance">
        <h3>Balance:</h3>
        <a id="balance" className="header__navegation--value" alt="balance"></a>
      </div>
      <div className="header__navegation">
        <a href="#"><img className="header__navegation--hamburger" src={menu} alt="menu" /></a>
        <ul className="header__navegation--dropdown">
          <li><Link className="header__navegation--login header__navegation--hover" to="/signin" alt="login">Login</Link></li>
          <li><Link className="header__navegation--exchange header__navegation--hover" to="/" alt="exchange">Exchage</Link></li>
        </ul>
      </div>
    </header>
    )
  }

export default Header;