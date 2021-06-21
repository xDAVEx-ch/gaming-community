//React imports
import React from 'react';

//Vendors imports
import { Button, GridContainer, Grid, Cell, Alignments } from 'react-foundation';

import { Link } from 'react-router-dom';

//My ow imports
import './new-events.styles.scss';

const NewEvents = () =>(
  <section>
    <GridContainer>
      <Grid alignX={Alignments.CENTER} gutters='margin'>

        <Cell medium='4' style={{ textAlign: 'center' }}>
          <h2 className='h3'>New Event!!</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </Cell>

        <Cell medium='4' className='flex-container align-center align-self-middle'>
          <Link to='/'>
            <Button>View More</Button>
          </Link>
        </Cell>

      </Grid>
    </GridContainer>
  </section>
);

export default NewEvents;