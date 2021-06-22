import React from 'react';

import Header from './../../components/header';
import Hero from './../../components/hero';
import PreOrders from './../../components/pre-orders';
import NewEvents from './../../components/new-events';
import NewReleases from './../../components/new-releases';

const LandingPage = () =>(
  <>
    <Header />
    <Hero />
    <PreOrders />
    <NewEvents />
    <NewReleases />
  </>
);

export default LandingPage;