//react imports
import React from 'react';

import { Routes, Route } from 'react-router-dom';

//My imports
import Footer from './../../components/footer';
import Sidebar from './../../components/sidebar';
import UserDashboard from './../../components/user-dashboard';
import Events from './../../components/events';

const AccountPage = () =>{

  const owner = 'Badge vector created by freepik';
  const ownerLink = 'https://www.freepik.es/vectores/logo';

  const acknowledgement = {
    owner, ownerLink
  }
  return(
    <>
      <div className='flex-container' style={{position: 'relative'}}>
        <section><Sidebar /></section>
        <Routes>
          <Route index element={ <UserDashboard />} />
          <Route path={`/events`} element={ <Events /> } />
        </Routes>
      </div>
      <Footer acknowledgement={acknowledgement}/>
    </>
  );
};

export default AccountPage;