import React from 'react';
import { render } from 'react-dom';
import {SnackbarProvider} from 'notistack';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import './App.css';
import App from './App.js';

render(
  <SnackbarProvider hideIconVariant maxSnack={3} 
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
    TransitionComponent: 'Slide',
  }}
  >
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
);
