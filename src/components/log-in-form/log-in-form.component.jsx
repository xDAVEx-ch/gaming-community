//React imports
import React from 'react';

import { Link } from 'react-router-dom';

//Vendors imports
import {
  Button,
  Colors,
} from 'react-foundation';

//My own imports
import FormInput from '../input-form/form-input.component';

import './log-in-form.styles.scss';

import imgUrl from './../../assets/login-image.jpg';

const LogInForm = () => (
  <main>
    <div className='log-in-container flex-container align-center'>

      <div className='log-in-side-img show-for-medium'>
        <img src={imgUrl} alt='Virtual videogame' />
      </div>

      <form className='log-in-form'>
        <h3 className='text-center'>Log In</h3>

        <FormInput label='Username or Email' type='text' />
        <FormInput label='Password' type='password' />
        <Link to='/identify'>
          <small className='help-text'>Fogot password?</small>
        </Link>

        <Button color={Colors.SUCCESS}>Log In Account</Button>

        <div className='text-center'>
          <span className='help-text' style={{marginRight: '10px'}}>Not an account?</span>
          <Link to='/signup'>
            <small className='help-text'>Sign up Now</small>
          </Link>
        </div>
      </form>
    </div>
  </main>
);

export default LogInForm;