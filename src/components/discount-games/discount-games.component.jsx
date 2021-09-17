import React from 'react';

import { Grid, GridContainer, Cell, Alignments, Button, Colors } from 'react-foundation';

import cover from './../../assets/KF-doble-exposure.jpg';

import './discount-games.styles.scss';

const DiscountGames = () => (
  <section className='discount-gradient'>
    <div className='test'></div>
    <GridContainer>
      <Grid gutters='margin' alignX={Alignments.CENTER}>

        <Cell medium='4' className='align-self-middle'>
          <div className='discount-game-cover'>
            <img src={cover} alt='Discount game' />
          </div>
        </Cell>

        <Cell medium='5'>
          <div className='discount-description'>
            <h2>Killing Floor: Double Exposure</h2>
            <p>
              Fight the zeds across two realities in this brutal Doble feature
              containing Tripwire's beloved KILLING FLOOR 2 and KILLING FLOOR: Incursion
              on PlayStation 4 and PlayStationVR at one great price.
            </p>

            <div className='flex-container align-middle discount-buying-details'>
              <span className='discount-price'><s>$50.99</s></span>
              <span className='discount-price'>$30.99</span>

              <Button color={Colors.WARNING} style={{ width: '90px', marginBottom: '0' }}>Buy</Button>
            </div>
          </div>

        </Cell>

      </Grid>
    </GridContainer>
  </section>
);

export default DiscountGames;