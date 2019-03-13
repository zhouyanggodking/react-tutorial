import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <div>table header</div>
  );
};

const TableBody = () => {
  return (
    <div>table body</div>
  );
};

class Table extends Component {
  render() {
    return (
      <div className="table">
        <TableHeader></TableHeader>
        <TableBody></TableBody>
      </div>
    );
  }
}

export default Table;
