import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo_header.png';
import logomobile from '../assets/static/FondoHigh.png';
import menu from '../assets/static/menu.png';
import '../App.scss';

class Header extends React.Component {
  render() {
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
          <li><Link to="/logintwo">Login</Link></li>
          <li><Link to="/">Exchage</Link></li>
        </ul>
      </div>
    </header>
    )
  }
}

export default Header;