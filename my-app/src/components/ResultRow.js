import React, { Component } from 'react';

class ResultRow extends Component {

    render() {

      const { data } = this.props;
      
      const rowClassName = 'Result-Row';
      const rowItemClassName = 'Result-Row-Item';
  
      return (
        <li className={rowClassName}>
          {data.map((item, index) => (
            <span key={index} className={rowItemClassName}>
              {item}
            </span>
          ))}
        </li>
      );
    }

}

export default ResultRow;