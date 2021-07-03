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

import useMediaQuery from './../../effects/useMediaQuery';

import './game-grid.styles.scss';

const GameGrid = ({ maxNumItemsRow, buttonText, position = 'left' }) => {

  const dimensions = useMediaQuery();
  let positionStyles = {}

  if(position === 'right'){
    positionStyles = {
      marginLeft: 'auto'
    }
  }

  return (
    <Grid upOnLarge={maxNumItemsRow} className='game-grid' alignX='right'>

      <Cell small={dimensions.width > 500 ? '4': '6'}>
        <div 
          className={`game-item ${buttonText ? 'game-separationY' : ''}`} 
          style={positionStyles}
        >
          <img src={cover1} alt='art box game' className='game-cover' />
          <p className='game-info'>
            Alice Madness Returns
            <span>$40.99</span>
          </p>
          {
            buttonText
            ? <Button type='button'>{buttonText}</Button>
            : null
          }
        </div>
      </Cell>

      <Cell small={dimensions.width > 500 ? '4': '6'}>
        <div 
          className={`game-item ${buttonText ? 'game-separationY' : ''}`}
          style={positionStyles}
        >
          <img src={cover2} alt='art box game' className='game-cover' />
          <p className='game-info'>
            Bully: Scholarship Edition
            <span>$40.99</span>
          </p>
          {
            buttonText
            ? <Button type='button' style={{ marginBottom: '150px' }}>{buttonText}</Button>
            : null
          }
        </div>
      </Cell>

      <Cell small={dimensions.width > 500 ? '4': '6'}>
        <div 
          className={`game-item ${buttonText ? 'game-separationY' : ''}`}
          style={positionStyles}
        >
          <img src={cover3} alt='art box game' className='game-cover' />
          <p className='game-info'>
            Crash N'Sanity Trilogy
            <span>$40.99</span>
          </p>
          {
            buttonText
            ? <Button type='button' style={{ marginBottom: '150px' }}>{buttonText}</Button>
            : null
          }
        </div>
      </Cell>

      <Cell small={dimensions.width > 500 ? '4': '6'}>
        <div
          className={`game-item ${buttonText ? 'game-separationY' : ''}`}
          style={positionStyles}
        >
          <img src={cover4} alt='art box game' className='game-cover' />
          <p className='game-info'>
            Driver San Francisco
            <span>$40.99</span>
          </p>
          {
            buttonText
            ? <Button type='button' style={{ marginBottom: '150px' }}>{buttonText}</Button>
            : null
          }
        </div>
      </Cell>

      <Cell small={dimensions.width > 500 ? '4': '6'}>
        <div 
          className={`game-item ${buttonText ? 'game-separationY' : ''}`}
          style={positionStyles}
        >
          <img src={cover5} alt='art box game' className='game-cover' />
          <p className='game-info'>
            Grand Theft Auto V
            <span>$40.99</span>
          </p>
          {
            buttonText
            ? <Button type='button' style={{ marginBottom: '150px' }}>{buttonText}</Button>
            : null
          }
        </div>
      </Cell>

      <Cell small={dimensions.width > 500 ? '4': '6'}>
        <div 
          className={`game-item ${buttonText ? 'game-separationY' : ''}`}
          style={positionStyles}
        >
          <img src={cover6} alt='art box game' className='game-cover' />
          <p className='game-info'>
            Killing Floor 2
            <span>$40.99</span>
          </p>
          {
            buttonText
            ? <Button type='button' style={{ marginBottom: '150px' }}>{buttonText}</Button>
            : null
          }
        </div>
      </Cell>

    </Grid>
  );
};

export default GameGrid;