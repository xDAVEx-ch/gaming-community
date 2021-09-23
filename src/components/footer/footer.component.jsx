import React from 'react';

import {
  GridContainer,
  Grid,
  Cell,
  Menu,
  MenuItem,
  Alignments
} from 'react-foundation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare
} from '@fortawesome/free-brands-svg-icons';

import useMediaQuery from './../../effects/useMediaQuery';

import './footer.styles.scss';

const Footer = () => {

  const dimensions = useMediaQuery();
  let isVertical = false;

  if(dimensions.width > 900){
    isVertical = true;
  }

  return (
    <footer>
      <div className='footer'>
        <GridContainer fluid>
          <Grid alignX={Alignments.JUSTIFY}>
            <Cell large='3'>
              <h3 className='h5'>About us</h3>
              <p>
                Curiously, the optimization of the criterion the
                minor details of specific action result the
                integration prospects and will possibly result
                in the feature of Simple architecture
              </p>
            </Cell>
            <Cell large='3'>
              <h3 className='h5'>Acknowledgment</h3>
              <Menu isVertical className='' alignY={Alignments.MIDDLE}>
                <MenuItem>
                  <a
                    href='https://unsplash.com/@andreas_haslinger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    Controller photo by Andreas Haslinger
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='https://www.giantbomb.com/api/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Box art from Giantbomb
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='https://fontawesome.com/license'
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    Cart icon from Fontawesome
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='https://fontawesome.com/license'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Social media icons from Fontawesome
                  </a>
                </MenuItem>
              </Menu>
            </Cell>
            <Cell large='2'>
              <h3 className='h5 footer-title'>Connect with us</h3>
              <Menu isVertical={isVertical}>
                <MenuItem>
                  <a
                    className='footer-social-link'
                    href='https://www.facebook.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} size='2x' pull='left' />Facebook
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className='footer-social-link'
                    href='https://twitter.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faTwitterSquare} size='2x' pull='left' />Twitter
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className='footer-social-link'
                    href='https://www.instagram.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faInstagramSquare} size='2x' pull='left' />Instagram
                  </a>
                </MenuItem>
              </Menu>
            </Cell>
          </Grid>
        </GridContainer>
      </div>
    </footer>
  );
};

export default Footer;