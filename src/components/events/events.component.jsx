//React imports
import React from 'react';

//Vendor imports
import {
  Button,
  Cell,
  Grid,
  GridContainer,
  Alignments,
  Colors
} from 'react-foundation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

//My imports
import './events.styles.scss';

const Events = () => (
  <main className='events-container'>

    <div className='flex-container align-middle'>
      <h1>My Events</h1>
      <Button
        className='events-add-event-btn'
        color={Colors.SUCCESS}
      >
        New Event
      </Button>
    </div>

  
    <GridContainer full className='table-scroll'>
      <Grid alignX={Alignments.JUSTIFY} className='events-details'>

        <Cell small='2'>
          <h2 className='h3'>Title</h2>
          <p>Event Name here</p>
        </Cell>

        <Cell small='2'>
          <h2 className='h3'>Event Date</h2>
          <p>22/05/22</p>
        </Cell>

        <Cell small='2' className='align-self-middle'>
          <Button
            color={Colors.SUCCESS}
            className='events-edit-event-btn'
          >
            Edit
          </Button>
        </Cell>

        <Cell small='1' className='align-self-middle shrink'>
          <FontAwesomeIcon
            className='events-close-icon'
            icon={faTimes}
            size='2x'
          />
        </Cell>

      </Grid>
      <Grid alignX={Alignments.JUSTIFY} className='events-details'>

        <Cell small='2'>
          <h2 className='h3'>Title</h2>
          <p>Event Name here</p>
        </Cell>

        <Cell small='2'>
          <h2 className='h3'>Event Date</h2>
          <p>22/05/22</p>
        </Cell>

        <Cell small='2' className='align-self-middle'>
          <Button
            color={Colors.SUCCESS}
            className='events-edit-event-btn'
          >
            Edit
          </Button>
        </Cell>

        <Cell small='1' className='align-self-middle'>
          <FontAwesomeIcon
            className='events-close-icon'
            icon={faTimes}
            size='2x'
          />
        </Cell>

      </Grid>
    </GridContainer>

  </main>
);

export default Events;