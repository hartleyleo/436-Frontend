import React, { Component } from 'react';

class ResultHeader extends Component {

    render() {

      const { header } = this.props;
      
      const rowClassName = 'Header-Row';
      const rowItemClassName = 'Header-Row-Item';
  
      return (
        <li className={rowClassName}>
          {header.map((item, index) => (
            <span key={index} className={rowItemClassName}>
              {item}
            </span>
          ))}
        </li>
      );
    }

}

export default ResultHeader;