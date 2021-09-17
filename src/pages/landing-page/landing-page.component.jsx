import React from 'react';

import Header from './../../components/header';
import Hero from './../../components/hero';
import PreOrders from './../../components/pre-orders';
import NewEvents from './../../components/new-events';
import NewReleases from './../../components/new-releases';
import DiscountGames from './../../components/discount-games';
import CtaSection from './../../components/cta-section';
import Footer from './../../components/footer';

const LandingPage = () =>(
  <>
    <Header />
    <Hero />
    <PreOrders />
    <NewEvents />
    <NewReleases />
    <DiscountGames />
    <CtaSection />
    <Footer />
  </>
);

export default LandingPage;