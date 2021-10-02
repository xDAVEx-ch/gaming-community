import React from 'react';

//Vendors imports
import { Grid, Cell, Button } from 'react-foundation';

import { Link } from 'react-router-dom';

//My own imports
import cover1 from './../../assets/alice-madness-cover.jpg';
import gamesData from './../../static-data.json';

import useMediaQuery from './../../effects/useMediaQuery';

import './game-grid.styles.scss';

const GameGrid = ({ maxNumItemsRow, maxNumItems = 8, buttonText, position = 'left' }) => {

  const dimensions = useMediaQuery();
  let positionStyles = {}

  if(position === 'right'){
    positionStyles = {
      marginLeft: 'auto'
    }
  } else if(position === 'center'){
    positionStyles = {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }

  return(
    <Grid upOnLarge={maxNumItemsRow} className='game-grid' alignX='right'>
      {
        gamesData
          .filter((game) => game.id <= maxNumItems)
          .map((game) => (
            <Cell small={dimensions.width > 500 ? '4': '6'}>
              <div 
                className={`game-item ${buttonText ? 'game-separationY' : ''}`} 
                style={positionStyles}
              >
                <img src={cover1} alt='art box game' className='game-cover' />
                <p className='game-info'>
                  {game.title}
                  <span>$40.99</span>
                </p>
                {
                  buttonText
                  ? <Button type='button' style={{ marginBottom: '150px', width: '100px' }}>
                      {buttonText}
                    </Button>
                  : null
                }
              </div>
            </Cell>
          ))
      }
    </Grid>
  );
};

export default GameGrid;