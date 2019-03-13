import React, { Component } from 'react';
import './Table.css';

// props.data is [string]
const TableHeader = (props) => {
  const headers = props.data.map((header, index) => {
    return (
      <div key={index}>{header}</div>
    )
  });
  return <div className="row">{headers}</div>
};

// props.data is [object]
const TableBody = (props) => {
  const rows = props.data.map((row, index) =>{
    return (
      <div className="row" key={index}>
        <div>{row.name}</div>
        <div>{row.title}</div>
        <button onClick={() => props.removeRow(index)}>remove</button>
      </div>
    );
  });
  return (
    <div>{rows}</div>
  );
};

class Table extends Component {
  render() {
    const { data, removeRow } = this.props;
    return (
      <div className="table">
        <TableHeader data={data.headerData}></TableHeader>
        <TableBody data={data.bodyData} removeRow={removeRow}></TableBody>
      </div>
    );
  }
}

export default Table;
