import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//material ui
import { CssBaseline } from '@material-ui/core';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);


