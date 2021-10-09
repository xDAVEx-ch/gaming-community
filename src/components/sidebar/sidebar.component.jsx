//React imports
import React from 'react';

//Vendors import
import { Button, Menu, MenuItem, Colors } from 'react-foundation';

import { Link } from 'react-router-dom'

//My imports
import profileImg from './../../assets/profile-picture.jpg';
import './sidebar.styles.scss';

const Sidebar = () =>(
  <div className='sidebar-bg'>

    <div className='sidebar-user-info'>
      <div className='sidebar-photo'>
        <img src={profileImg} alt='user profile'/>
      </div>

      <h2 className='text-center'>Kanxx</h2>
      <Button color={Colors.SUCCESS}>Edit</Button>
    </div>

    <Menu isVertical className='text-center sidebar-menu'>
      <MenuItem><Link>Account info</Link></MenuItem>
      <MenuItem><Link>My events</Link></MenuItem>
      <MenuItem><Link>My messages</Link></MenuItem>
      <MenuItem><Link>My games</Link></MenuItem>
      <MenuItem><Link>Log out</Link></MenuItem>
    </Menu>

  </div>
);

export default Sidebar;