// TableDropdown.js
import React, { useState } from 'react';

const TableDropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('Users');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="table-dropdown">
      <select value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)}>
        <option value="Users">Users</option>
        <option value="Posts">Posts</option>
        <option value="Products">Products</option>
        <option value="Ads">Ads</option>
        <option value="Comments">Comments</option>
      </select>
    </div>
  );
};

export default TableDropdown;
