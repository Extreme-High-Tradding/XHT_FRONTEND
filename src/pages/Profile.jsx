import React from 'react';
import '../App.scss';

import usert from '../assets/static/usert.png';
import wallet from '../assets/static/wallet.svg';
import chart from '../assets/static/chart.svg';


const Profile = () => (
  <div className=" profile__main">
    <div className="profile">
      <div className="profile__card">
        <div className="profile__photo">
          <img src={ usert } alt=""/>
        </div>
        <div className="profile__userdata">
          <p>Rick sanchez</p>
          <p>RickS@137.com</p>
        </div>
      </div>
      <div className="profile__wallet">
        <div className="profile__categories">
          <h2>My wallet</h2>
          <img src= {wallet} alt=""/>
        </div>
        <div className="profile__wallet__data">
          <div className="profile__wallet__b">
            <p>Wallet balance: </p>
            <p>$ 100.000</p>
          </div>
          <div className="profile__wallet__b">
            <p>Available  wallet balance:  </p>
            <p>$ 50.000</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="profile__balance">
      <div className="profile__categories">
        <h2>My Balance</h2>
        <img src= {chart} alt=""/>
      </div>
    </div>
  </div>
);

export default Profile;