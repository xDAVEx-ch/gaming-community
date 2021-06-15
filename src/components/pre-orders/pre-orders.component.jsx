//React imports
import React from 'react';

//Vendors imports
import { Grid, Cell, Button, Alignments, Colors } from 'react-foundation';

import { Link } from 'react-router-dom';

//My own imports
import cover1 from './../../assets/alice-madness-cover.jpg';
import cover2 from './../../assets/bully.jpg';
import cover3 from './../../assets/crash-remaster.jpg';
import cover4 from './../../assets/driver-san-francisco.jpg';
import cover5 from './../../assets/gta-cover.jpg';
import cover6 from './../../assets/kf2.jpg';

import './pre-orders.styles.scss';

const PreOrders = () => (
  <section className='bg-split'>

    <Grid>

      <Cell medium='4' className='align-self-middle pre-order-description'>

        <h2>Pre-orders</h2>
        <p className='pre-order-text-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Labore officiis incidunt quod a nulla impedit. Iusto consequuntur nam dicta debitis at ut,
          maxime vero sequi temporibus eum, odit, nemo id.
        </p>

        <Link to='/catalog'>
          <Button color={Colors.SECONDARY}>View More</Button>
        </Link>

      </Cell>

      <Cell medium='8'>

        {/* ------ First inner grid -------*/}

        <Grid className='pre-order-game-grid grid-margin-x' alignX={Alignments.RIGHT}>

          <Cell small='4' medium='3'>
            <div className='pre-order-game-cover'><img src={cover1} alt='cover' /></div>
            <p className='pre-order-game-title'>
              Alice Madness Returns
              <span>$40.99</span>
            </p>
          </Cell>

          <Cell small='4' medium='3'>
            <div className='pre-order-game-cover'><img src={cover2} alt='cover' /></div>
            <p className='pre-order-game-title'>
              Bully: Scholarship Edition
              <span>$40.99</span>
            </p>
          </Cell>

          <Cell small='4' medium='3'>
            <div className='pre-order-game-cover'><img src={cover3} alt='cover' /></div>
            <p className='pre-order-game-title'>
              Crash N'Sanity Trilogy
              <span>$40.99</span>
            </p>
          </Cell>

        </Grid>

        {/* ------ Second inner grid -------*/}

        <Grid className='pre-order-grid grid-margin-x' alignX={Alignments.RIGHT}>

          <Cell small='4' medium='3'>
            <div className='pre-order-game-cover'><img src={cover4} alt='cover' /></div>
            <p className='pre-order-game-title'>
              Driver San Francisco
              <span>$40.99</span>
            </p>
          </Cell>

          <Cell small='4' medium='3'>
            <div className='pre-order-game-cover'><img src={cover5} alt='cover' /></div>
            <p className='pre-order-game-title'>
              Grand Theft Auto V
              <span>$40.99</span>
            </p>
          </Cell>

          <Cell small='4' medium='3'>
            <div className='pre-order-game-cover'><img src={cover6} alt='cover' /></div>
            <p className='pre-order-game-title'>
              Killing Floor 2
              <span>$40.99</span>
            </p>
          </Cell>

        </Grid>

      </Cell>

    </Grid>
  </section>
);

export default PreOrders;