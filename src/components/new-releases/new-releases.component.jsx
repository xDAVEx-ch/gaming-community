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

import './new-releases.styles.scss';

const NewReleases = () => (
  <section className='bg-split-inverse'>
    <Grid>

      <Cell medium='8'>

        {/* ------ First inner grid -------*/}

        <Grid className='grid-margin-x' alignX={Alignments.LEFT}>

          <Cell small='4' medium='3'>
            <div className='game-cover'><img src={cover1} alt='cover' /></div>
            <p className='game-title'>
              Alice Madness Returns
              <span>$40.99</span>
            </p>
          </Cell>

          <Cell small='4' medium='3'>
            <div className='game-cover'><img src={cover2} alt='cover' /></div>
            <p className='game-title'>
              Bully: Scholarship Edition
              <span>$40.99</span>
            </p>
          </Cell>

          <Cell small='4' medium='3'>
            <div className='game-cover'><img src={cover3} alt='cover' /></div>
            <p className='game-title'>
              Crash N'Sanity Trilogy
              <span>$40.99</span>
            </p>
          </Cell>

        </Grid>

        {/* ------ Second inner grid -------*/}

        <Grid className='grid-margin-x' alignX={Alignments.LEFT}>

          <Cell small='4' medium='3'>
            <div className='game-cover'><img src={cover4} alt='cover' /></div>
            <p className='game-title'>
              Driver San Francisco
              <span>$40.99</span>
            </p>
          </Cell>

          <Cell small='4' medium='3'>
            <div className='game-cover'><img src={cover5} alt='cover' /></div>
            <p className='game-title'>
              Grand Theft Auto V
              <span>$40.99</span>
            </p>
          </Cell>

          <Cell small='4' medium='3'>
            <div className='game-cover'><img src={cover6} alt='cover' /></div>
            <p className='game-title'>
              Killing Floor 2
              <span>$40.99</span>
            </p>
          </Cell>

        </Grid>

      </Cell>
      <Cell medium='4' className='align-self-middle new-releases-description'>

        <h2>New Releases</h2>
        <p className='text-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Labore officiis incidunt quod a nulla impedit. Iusto consequuntur nam dicta debitis at ut,
          maxime vero sequi temporibus eum, odit, nemo id.
        </p>

        <Link to='/catalog'>
          <Button color={Colors.SECONDARY}>View More</Button>
        </Link>

      </Cell>

    </Grid>
  </section>
);

export default NewReleases;