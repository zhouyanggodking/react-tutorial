import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import GodKing from './GodKing';
import OceanSky from './OceanSky';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/godking' component={ GodKing } />
          <Route path='/oceansky' component={ OceanSky } />
        </Switch>        
      </main>
    );
  }
}

export default Main;