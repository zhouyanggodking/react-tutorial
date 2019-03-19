import React, { Component } from 'react';

import Navigation from './Navigation';
import Main from './Main';

class RouteApp extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Main></Main>
      </div>
    );
  }
}

export default RouteApp;