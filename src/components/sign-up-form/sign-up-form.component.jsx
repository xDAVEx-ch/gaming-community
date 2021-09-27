//React imports
import React from 'react';

//Vendors import 
import {
  Button,
  Grid,
  Cell,
  GutterTypes,
  Colors,
} from 'react-foundation';

//My own imports
import FormInput from '../input-form/form-input.component';

import imgUrl from './../../assets/signup-image.jpg';

import './sign-up-form.styles.scss';

const SignUpForm = () => (
  <main>
    <div className='sign-up-container flex-container align-center'>
      
      <div className='sign-up-side-img show-for-medium'>
        <img src={imgUrl} alt='videogame controllers' />
      </div>

      <form className='sign-up-form'>
        <h3 style={{ textAlign: 'center' }}>Sign Up for Free</h3>

        <FormInput label='Username' type='text' />
        <FormInput label='Email Address' type='email' />
        <FormInput label='Country' type='text' />

        <Grid gutters={GutterTypes.MARGIN}>
          <Cell small='6'>
            <FormInput label='Password' type='password' />
          </Cell>
          <Cell small='6'>
            <FormInput label='Confirm Password' type='password' />
          </Cell>
        </Grid>

        <Button color={Colors.SUCCESS}>Sign Up Now</Button>
      </form>
    </div>
  </main>
);

export default SignUpForm;