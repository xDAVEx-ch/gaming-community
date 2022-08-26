//React import
import React from 'react';

import { Routes, Route } from 'react-router-dom';

//My own imports
import LandingPage from './pages/landing-page';
import SignUpPage from './pages/sign-up-page';
import LogInPage from './pages/log-in-page';
import CatalogPage from './pages/catalog-page';
import AccountPage from './pages/account-page';

import Header from './components/header/header.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={ <LandingPage /> }/>
        <Route path='/signup' element={ <SignUpPage /> }/>
        <Route path='/login' element={ <LogInPage /> }/>
        <Route path='/catalog' element={ <CatalogPage /> }/>
        <Route path='/account/*' element={ <AccountPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
