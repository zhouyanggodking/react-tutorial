import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
  render() {
    const data = {
      headerData: ['name', 'title'],
      bodyData: [
        {
          name: 'godking',
          title: 'SE'
        },
        {
          name:'oceansky',
          title: 'MGR'
        }
      ]
    }

    return (
      <div className="App">
        <h1>Hello React!</h1>
        <Table data={data}></Table>
      </div>
    );
  }
}

export default App;
