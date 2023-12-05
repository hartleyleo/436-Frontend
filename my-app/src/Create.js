import Tabs from "./components/Tabs.js";
import React, { useState } from "react";
import ResultTable from "./components/ResultTable.js";
import TableDropdown from "./components/TableDropdown.js";
import AdsCreateList from "./components/AdsCreateList.js";
import UsersCreateList from "./components/UserCreateList.js"

const Create = ({ setAds, adDataList }) => {

  const userHeaderList = ['UserID', 'Username', 'Password', 'Email', 'Gender', 'Age', 'First Name', 'Last Name'];
  const productHeaderList = ['ProductID', 'Status', 'Type', 'Price', 'UserID', 'Descrip'];
  const adHeaderList = ['AdID', 'ProductID', 'UserID', 'Text', 'ClickCounter', 'MediaLink'];
  const postHeaderList = ['PostID', 'Likes', 'Location', 'Post Date', 'ProductID'];
  const commentHeaderList = ['CommentID', 'Content', 'UserID', 'PostID', 'Comment Date'];

  const [activeTable, setActiveTable] = useState('Users');

  const setTable = (value) => {
    setActiveTable(value);
  };

  return (
    
    <div class="container">
      <div class="left-section">
        <h2>Create Data Entry:</h2>
        <TableDropdown onSelect={setTable}/>
        {activeTable == 'Ads' &&
          <AdsCreateList />
        }
        {activeTable == 'Users' &&
          <UsersCreateList />
        }
      </div>
      <div class="right-section">
        <h2>Results</h2>
        <button onClick={setAds}>Update Table</button>
        <div className="result-table-container">
          <ResultTable data={adDataList} header={adHeaderList}/>
        </div>
      </div>
    </div>

  );

}

export default Create;