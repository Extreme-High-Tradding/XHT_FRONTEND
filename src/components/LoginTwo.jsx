import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

import logomorado from '../assets/static/logomorado.png';


class LoginTwo extends Component {
  handleChange  = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick  = (e) => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <section className="login__section">
          <div className="login__container">
            <form id="formsa" className="login__signin_input">
              <img className="login__img_logo" src={logomorado} alt="logo" />
              <div className="login__title">
                <h2>Sign in</h2>
              </div>
              <div className="login__signin_input">
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  placeholder="Username or Email" />
              </div>
              <div className="login__signin_input">
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="Password" />
              </div>
              <div className="login__sigin_button">
                <button
                onClick={this.handleClick}
                className="button_si"
                type="button"
                form="formsa"
                value="submit">Sign in</button>
                <p>Don't you have an account? <Link to="/signup">Sign up</Link></p>
              </div>
            </form>
          </div>
        </section>
    )
  }
}

export default LoginTwo;

/* class SignIn extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="login__section">
          <div className="login__container">
            <form id="formsa" className="login__signin_input">
              <img className="login__img_logo" src={logomorado} alt="logo" />
              <div className="login__title">
                <h2>Sign in</h2>
              </div>
              <div className="login__signin_input">
                <input
                  type="text"
                  name="username"
                  placeholder="Username or Email" />
              </div>
              <div className="login__signin_input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password" />
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
} */


