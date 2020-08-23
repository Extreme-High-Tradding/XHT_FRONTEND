import React from 'react';
import './App.scss';
import logo from './assets/static/logo_header.png';

const App = ()=>(
  <div className="app">Welcome to XHT
  <div className="title">HELLO IM A TITLEs</div>
  <img className="header__logo" src={logo} alt="logo" />
  <h1>PROBANDO SASS</h1>
  </div>
)

export default App;