import React from 'react';

//Vendors imports
import { Grid, Cell, Button, Colors } from 'react-foundation';

import { Link } from 'react-router-dom';

//My own imports
import GameGrid from './../game-grid';

import './new-releases.styles.scss';

const NewReleases = () => (
  <section className='bg-split-inverse'>
    <Grid>

      <Cell medium='7'>
        <GameGrid maxNumItemsRow='3'/>
      </Cell>

      <Cell medium='5' className='align-self-middle'>

        <div className='new-releases-description'>
          <h2>New Releases</h2>
          <p className='text-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore officiis incidunt quod a nulla impedit. Iusto consequuntur nam dicta debitis at ut,
            maxime vero sequi temporibus eum, odit, nemo id.
          </p>

          <Link to='/catalog'>
            <Button color={Colors.SECONDARY}>View More</Button>
          </Link>
        </div>

      </Cell>

    </Grid>
  </section>
);

export default NewReleases;