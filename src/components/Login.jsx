import React from 'react';
import ReactDOM from 'react-dom';
import '../App.scss';
//import { useForm } from 'react-hook-form';

import logo from '../assets/static/Logo_header.png';

const Login =  ()=>(
  <div className="Login__Container">
    <div className="Login__img">
      <img className="Login__img_logo" src={logo} alt="logo" />
    </div>
  </div>
)

export default Login;

