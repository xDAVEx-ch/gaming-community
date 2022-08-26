//React imports
import React, {useState} from 'react';

import { useLocation } from 'react-router-dom';

//Vendors imports
import {
  Menu,
  MenuItem,
  Alignments,
  Button,
  Icon
} from 'react-foundation';

import { Link, Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//My imports
import { ReactComponent as CartIcon } from './../../assets/svg/shopping-cart-solid.svg';
import './header.styles.scss';

const Header = () => {

  const pathName = useLocation().pathname;

  return (
    <>
      <header class="top-bar" id="example-menu">
        
        <Link to='/' className='logo'>GAMING</Link>
    
          <Menu alignment={Alignments.RIGHT}>
            <MenuItem>
    
              {
                pathName.includes('/signup') || pathName.includes('/account')
                ? ''
                : (
                  <Link to='/signup'>
                    <Button 
                      isHollow 
                      className='header-hollow-white-btn'
                    >Sign up
                    </Button>
                  </Link>
                )
              }
  
            </MenuItem>
            
            <li className='flex-container align-middle'>
              <CartIcon style={{ width: '30px', height: '19px' }} />
            
              <Link to='/cart' style={{ paddingLeft: '0.4rem' }}>
                <span>My cart</span>
              </Link>
            
            </li>
            
            <MenuItem className='show-for-small-only'>
              <Link to='#'>
                <Icon name="fi-list"/>
                <span>
                  <FontAwesomeIcon icon={faBars} size='2x' pull='right'/>
                </span>
              </Link>
            </MenuItem>
            
          </Menu>
            
      </header>
            
      <Outlet />
    </>
  );
};

export default Header;