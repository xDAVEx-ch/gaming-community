import React from 'react';

import Header from './../../components/header';
import Hero from './../../components/hero';
import PreOrders from './../../components/pre-orders';
import NewEvents from './../../components/new-events';
import NewReleases from './../../components/new-releases';
import DiscountGames from './../../components/discount-games';
import CtaSection from './../../components/cta-section';
import Footer from './../../components/footer';

const LandingPage = () =>{

  const owner = 'Controller photo by Andreas Haslinger';
  const ownerLink = 'https://unsplash.com/@andreas_haslinger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

  const acknowledgement = {
    owner, ownerLink
  }
  return(
    <>
      <Header />
      <Hero />
      <PreOrders />
      <NewEvents />
      <NewReleases />
      <DiscountGames />
      <CtaSection />
      <Footer acknowledgement={acknowledgement}/>
    </>
  );
};

export default LandingPage;