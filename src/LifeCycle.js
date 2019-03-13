import React, { Component } from 'react';

class LifeCycle extends Component {

  constructor(props) {
    super(props) 
    console.log('in constructor()');    
  }

  render() {
    console.log('in render()');
    return (<h1>life cycle</h1>);
  }

  componentDidMount() {
    console.log('in componentDidMount()');
  }

  componentDidUpdate() {
    console.log('in componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('in componentWillUnmount()');
  }
}

export default LifeCycle;