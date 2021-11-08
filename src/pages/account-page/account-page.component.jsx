//react imports
import React from 'react';

import { Route } from 'react-router-dom';

//My imports
import Header from './../../components/header';
import Footer from './../../components/footer';
import Sidebar from './../../components/sidebar';
import UserDashboard from './../../components/user-dashboard';
import Events from './../../components/events';

const AccountPage = ({ match }) =>{

  const owner = 'Badge vector created by freepik';
  const ownerLink = 'https://www.freepik.es/vectores/logo';

  const acknowledgement = {
    owner, ownerLink
  }
  return(
    <>
      <Header />
      <div className='flex-container' style={{position: 'relative'}}>
        <section><Sidebar /></section>
        <Route path={`${match.path}/dashboard`} component={ UserDashboard } />
        <Route path={`${match.path}/events`} component={ Events } />
      </div>
      <Footer acknowledgement={acknowledgement}/>
    </>
  );
};

export default AccountPage;