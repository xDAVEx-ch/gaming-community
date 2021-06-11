//React imports
import React from 'react';

//Vendors imports
import {
  Menu,
  MenuItem,
  Alignments,
  Button
} from 'react-foundation';

import { Link } from 'react-router-dom';

//My imports
import { ReactComponent as CartIcon } from './../../assets/svg/shopping-cart-solid.svg';
import './header.styles.scss';

const Header = () => {

  return (
    <header class="top-bar">

      
      <Link to='/' className='logo'>GAMING</Link>

        <Menu alignment={Alignments.RIGHT}>
          <MenuItem>

            <Link to='/signup'>
              <Button 
                  isHollow 
                  className='header-hollow-white-btn'
                >Sign up
              </Button>
            </Link>

          </MenuItem>

          <li className='flex-container align-middle'>
            <CartIcon style={{ width: '30px', height: '19px' }} />

            <Link to='/cart' style={{ paddingLeft: '0.4rem' }}>
              <span>My cart</span>
            </Link>

          </li>

        </Menu>

    </header>
  );
};

export default Header;