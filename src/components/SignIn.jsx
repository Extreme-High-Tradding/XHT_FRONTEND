import React, { useState } from 'react';
import InputAuth from './InputAuth';
import { Link } from 'react-router-dom';
import '../App.scss';

import logomorado from '../assets/static/logomorado.png';

const  SignIn =()=>{

  const [ user, setUser ]= useState ('');
  const [ password, setPassword] = useState ('');

      function handleChange (name, value){


        if(name === 'user'){
          setUser(value)
        }else{
          setPassword(value)
        }
      };

      function handleSubmit(){

        const account = {user, password}
        if (account){
          console.log('account', account);
        }
      }

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
              <InputAuth
                attribute = {{
                id: 'user',
                name: 'user',
                type: 'text',
                placeholder: 'username'
              }}
            handleChange={handleChange}
            />
              </div>
              <div className="login__signin_input">
              <InputAuth
              attribute = {{
                id: 'password',
                name: 'password',
                type: 'password',
                placeholder: 'password'
              }}
            handleChange={handleChange}
            />
              </div>
              <div className="login__sigin_button">
                <button  onClick={handleSubmit} className="button_si" type="submit" form="formsu" value="Submit">Sign in</button>
                <p>Don't you have an account? <Link to="/signup">Sign up</Link></p>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    )
}

export default SignIn;

