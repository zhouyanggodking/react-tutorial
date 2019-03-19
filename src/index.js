import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import RouteApp from './RouteApp';

ReactDOM.render((
  <HashRouter>
    <RouteApp />
  </HashRouter>
), document.getElementById('root'));
