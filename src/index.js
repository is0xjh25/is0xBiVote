import React from 'react';
import { render } from 'react-dom';
import {SnackbarProvider} from 'notistack';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import './App.css';
import App from './App.js';

render(
  <SnackbarProvider 
  dense
  hideIconVariant
  preventDuplicate
  maxSnack={3}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
    TransitionComponent: 'Fade',
  }}
  >
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
);
