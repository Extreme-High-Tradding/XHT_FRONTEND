import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

import logo from '../assets/static/logo_header.png';
import log from '../assets/static/FondoHigh.png';
import logomorado from '../assets/static/logomorado.png';

class SignIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="login__header">
          <img className="login__header_image" src= {logo} alt=""/>
        </div> */}
        <section className="login__section">
          <div className="login__container">
            <form id="formsa" className="login__signin_input">
              <img className="login__img_logo" src={logomorado} alt="logo" />
              <div className="login__title">
                <h2>Sign in</h2>
              </div>
              <div className="login__signin_input">
                <input type="text" name="" placeholder="Username or Email" id="username"/>
              </div>
              <div className="login__signin_input">
                <input type="password" name="" placeholder="Password" id="password"/>
              </div>
              <div className="login__sigin_button">
                <button className="button_si" type="submit" form="formsa" value="Submit">Sign in</button>
                <p>Don't you have an account? <Link to="/signup">Sign up</Link></p>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    )
  }
}


/* const SignIn = () => (
  <React.Fragment>
    <div className="login__header">
      <img className="login__header_image" src= {logo} alt=""/>
    </div>
    <section className="login__section">
      <div className="login__container">
        <form id="formsa" className="login__signin_input">
          <img className="login__img_logo" src={log} alt="logo" />
          <div className="login__title">
            <h2>Sign in</h2>
          </div>
          <div className="login__signin_input">
            <input type="text" name="" placeholder="Username or Email" id="username"/>
          </div>
          <div className="login__signin_input">
            <input type="password" name="" placeholder="Password" id="password"/>
          </div>
          <div className="login__sigin_button">
            <button className="button_si" type="submit" form="formsa" value="Submit">Sign in</button>
            <p>Don't you have an account? <Link to="/singup">Sign up</Link></p>
          </div>
        </form>
      </div>
    </section>
  </React.Fragment>
) */

export default SignIn;

