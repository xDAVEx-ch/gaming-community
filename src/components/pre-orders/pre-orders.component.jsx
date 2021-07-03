//React imports
import React from 'react';

//Vendors imports
import { Grid, Cell, Button, Colors } from 'react-foundation';

import { Link } from 'react-router-dom';

//My own imports
import GameGrid from './../game-grid'

import './pre-orders.styles.scss';

const PreOrders = () => (
  <section className='bg-split'>

    <Grid>

      <Cell medium='5' className='align-self-middle'>

        <div className='pre-order-description'>
          <h2>Pre-orders</h2>
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

      <Cell medium='7' flexContainer={true} alignX='right'>
        <GameGrid maxNumItemsRow='3' position='right' />
      </Cell>

    </Grid>
  </section>
);

export default PreOrders;