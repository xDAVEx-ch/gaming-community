import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'

import './global.styles.scss';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);