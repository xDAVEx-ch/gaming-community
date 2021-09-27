import React from 'react';

const FormInput = ({ label, type }) =>(
  <label>
    {label}
    <input type={type}/>
  </label>
);

export default FormInput;