import './App.css';
import React, { useState } from "react";
import Axios from 'axios';
import Create from "./Create.js";
import Update from "./Update.js";
import Delete from "./Delete.js";
import ResultTable from "./components/ResultTable.js";
import TableDropdown from "./components/TableDropdown.js";


function App() {

  const [pageState, setPageState] = useState(Create);
  const [adDataList, setAdList] = useState([]);
  const [userDataList, setUserList] = useState([]);
  const [productDataList, setProductList] = useState([]);
  const [commentDataList, setCommentList] = useState([]);
  const [postDataList, setPostList] = useState([]);

  const length = (list) => {
    var length = 0;
    while (list[length] !== undefined)
      length++;
    return length;
  }

  const getAds = () => {

    let updatedAdList = [];

    Axios.get('http://127.0.0.1:8070/Ads').then(
      (response)=> {

        for (let i = 0; i < length(response.data); i++) {
          let data = response.data[i];
          let row = [data.adId, data.aproductId, data.auserId, data.text, data.clickCounter, data.mediaLink];
          updatedAdList.push(row);
        }

      }
    );

    return updatedAdList;
  }

  const setState = (value) => {
    setPageState(value);
  }

  const setAds = () => {
    const list = getAds();
    setAdList(list);
  }

  const adHeaderList = ['AdID', 'ProductID', 'UserID', 'Text', 'ClickCounter', 'MediaLink'];

  return (
    <div className="App">

      <div className="Admin-bar">Mockbook - Admin Page</div>

      <div className="Nav-bar">

        <div className="Nav-button" onClick={() => setState(Create)}>Create</div>
        <div className="Nav-button" onClick={() => setState(Update)}>Update</div>
        <div className="Nav-button" onClick={() => setState(Delete)}>Delete</div>
      </div>

      <div class="container">
          <div class="left-section">
              <h2>Create Data Entry:</h2>
              <TableDropdown onSelect={setAds}/>
          </div>
          <div class="right-section">
              <h2>Results</h2>
              <button onClick={setAds}>Update Table</button>
              <div className="result-table-container">
                <ResultTable data={adDataList} header={adHeaderList}/>
              </div>
          </div>
      </div>




      <div>{pageState}</div>

    </div>




  );
}

export default App;
