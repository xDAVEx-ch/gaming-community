import React from 'react';

import { Route } from 'react-router-dom';

import LandingPage from './pages/landing-page';

function App() {
  return (
    <>
      <Route exact path='/' component={ LandingPage }/>
    </>
  );
}

export default App;
