import React from 'react';

import {
  Button,
  Colors,
  Alignments,
  Grid,
  Cell
} from 'react-foundation';

import './hero.styles.scss';

const Hero = () => (
  <section class='hero-section'>

    <div class='hero-section-text'>

      <h1>Crash Bandicoot N'Sane Trilogy</h1>
      <p>
        Your favorite marsupial, Crash Bandicoot™, is back! He's enhanced, entranced and
        ready-to-dance with the N. Sane Trilogy game collection. Relive all your favourite Crash
        moments in their fully-remastered graphical glory and get ready to put some UMPH in your
        WUMP!
      </p>

    </div>

    <div className='hero-section-button-group'>
      <Button color={Colors.WARNING} style={{ width: '97px'}}>Buy</Button>
      <Button>See Trailer</Button>
    </div>

  </section >
);

export default Hero;