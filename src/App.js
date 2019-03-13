import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tableData: {
        headerData: ['name', 'title', 'remove'],
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
    };
    // This binding is necessary to make `this` work in the callback
    this.removeRow = this.removeRow.bind(this); // necessary
  }

  removeRow(index) {
    const { tableData } = this.state;
    const bodyData = tableData.bodyData.filter((row, i) => i !== index);
    this.setState({
      tableData: {
        headerData: tableData.headerData,
        bodyData
      }
    });
  }

  handler() {
    console.log(this)
  }

  componentDidMount() {
    fetch('/api/recommendation', {
      method: 'post',
      body: JSON.stringify({
        maxCount:20,
        question:'十年十倍股',
        type:'all'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <button onClick={() => this.handler()}>test</button>
        <Table data={this.state.tableData} removeRow={this.removeRow}></Table>
      </div>
    );
  }
}

export default App;
