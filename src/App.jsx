import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SingUp';
import LoginTwo from './components/LoginTwo';
import Profile from './pages/Profile';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logintwo" component={LoginTwo} />
        {/* <Route exact path="/" component={Profile} /> */}
      </Layout>
    </BrowserRouter>
  )
}

export default App;