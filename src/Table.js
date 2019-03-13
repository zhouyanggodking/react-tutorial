import React, { Component } from 'react';
import './Table.css';

const TableHeader = (props) => {
  const headers = props.data.map((header, index) => {
    return (
      <div key={index}>{header}</div>
    )
  });
  return <div className="row">{headers}</div>
};

const TableBody = (props) => {
  const rows = props.data.map((row, index) =>{
    return (
      <div className="row" key={index}>
        <div>{row.name}</div>
        <div>{row.title}</div>
      </div>
    );
  });
  return (
    <div>{rows}</div>
  );
};

class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="table">
        <TableHeader data={data.headerData}></TableHeader>
        <TableBody data={data.bodyData}></TableBody>
      </div>
    );
  }
}

export default Table;
