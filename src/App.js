import React from 'react';

import { Route } from 'react-router-dom';

import LandingPage from './pages/landing-page';
import SignUpPage from './pages/sign-up-page';

function App() {
  return (
    <>
      <Route exact path='/' component={ LandingPage }/>
      <Route exact path='/signup' component={ SignUpPage }/>
    </>
  );
}

export default App;
