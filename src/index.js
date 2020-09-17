import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import history from './History';
import './index.scss';

ReactDOM.render(
  <BrowserRouter history={history} basename="/">
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
