import React from 'react';

import log from '../assets/static/FondoHigh.png';

const SignUp = () => (
  <React.Fragment>
    <section className="login__section">
      <div className="login__container">
        <form id="formsu" className="login__signin_input">
          <img className="login__img_logo" src={log} alt="logo" />
          <div className="login__title">
            <h2>Create Account</h2>
          </div>
          <div className="login__signin_input">
            <input type="text" name="" placeholder="Username" id="username"/>
          </div>
          <div className="login__signin_input">
            <input type="email" name="" placeholder="Email" id="email"/>
          </div>
          <div className="login__signin_input">
            <input type="password" name="" placeholder="Password" id="password"/>
          </div>
          <div className="login__sigin_button">
            <button className="button_si" type="submit" form="formsu" value="Submit">Create Account</button>
            
          </div>
        </form>
      </div>
    </section>
  </React.Fragment>
)

export default SignUp;