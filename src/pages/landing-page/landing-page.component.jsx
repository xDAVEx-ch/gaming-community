import React from 'react';

import Header from './../../components/header';
import Hero from './../../components/hero';
import PreOrders from './../../components/pre-orders';
import NewEvents from './../../components/new-events';
import NewReleases from './../../components/new-releases';
import DiscountGames from './../../components/discount-games';

const LandingPage = () =>(
  <>
    <Header />
    <Hero />
    <PreOrders />
    <NewEvents />
    <NewReleases />
    <DiscountGames />
  </>
);

export default LandingPage;