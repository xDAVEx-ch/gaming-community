import React from 'react';

//Vendors imports
import { Button } from 'react-foundation';

import { Link } from 'react-router-dom';

import './cta-section.styles.scss';

const CtaSection = () => (
  <section className='cta-section-bgImg'>
    <div 
      className={`
        cta-section-container 
        flex-container 
        align-center 
        align-middle 
        flex-dir-column
      `}
    >
      <h3 className='h4'>
        <span className='cta-section-subtitle'>Like videogames?</span>
      </h3>
      <h2>Create an account with us</h2>
      <Link to='/signup' className='cta-link'>
        <Button isHollow className='cta-hollow-white-btn'>Sign up</Button>
      </Link>
    </div>
  </section>
);

export default CtaSection;