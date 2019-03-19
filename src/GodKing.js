import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class GodKing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>GodKing Route</h2>
        <ul>
            <li>
              <Link to="/godking/sub1">sub1</Link>
            </li>
            <li>
              <Link to="/godking/sub2">sub2</Link>
            </li>
          </ul>
        <Switch>
          <Route exact path='/godking/sub1' render={() => (<h2>sub1</h2>)}/>
          <Route path='/godking/sub2' render={() => (<h2>sub2</h2>)}/>
        </Switch>
      </React.Fragment>      
    );
  }
}

export default GodKing;