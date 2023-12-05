import React, { Component } from 'react';
import ResultRow from './ResultRow';
import ResultHeader from './ResultHeader';

class ResultTable extends Component {
  
  render() {

    const { header } = this.props;
    const { data } = this.props;

    const tableClassName = 'Result-Table';
    const tableHeader = 'Table-Header';

    return (
      <div>
        <ul className={tableHeader}>
            <ResultHeader header={header}/>
        </ul>
        <ul className={tableClassName}>
          {data.map((rowData, index) => (
            <ResultRow key={index} data={rowData} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ResultTable;