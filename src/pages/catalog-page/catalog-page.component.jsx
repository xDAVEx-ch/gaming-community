//React imports
import React from 'react';

//My imports
import Header from './../../components/header';
import Footer from './../../components/footer';
import GameGrid from './../../components/game-grid';

import './catalog.styles.scss';

const CatalogPage = () =>{
  const owner = 'Controller photo by Andreas Haslinger';
  const ownerLink = 'https://unsplash.com/@andreas_haslinger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

  const acknowledgement = {
    owner, ownerLink
  }

  return(
    <>
      <Header />
      <h1 className='text-center catalog-title'>Explore Games</h1>
      <div className='catalog-grid flex-container align-center'>
        <GameGrid maxNumItemsRow='4' position='center' buttonText='Buy'/>
      </div>
      <Footer acknowledgement={acknowledgement}/>
    </>
  );
};

export default CatalogPage;