import React from 'react';
import { render } from 'react-dom';
import {SnackbarProvider} from 'notistack';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import App from './App.js';

render(
  <SnackbarProvider maxSnack={2} 
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
    TransitionComponent: "Slide",
  }}
  >
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
);
