import './App.css';
import React, { useState } from "react";
import Axios from 'axios';
import Create from "./Create.js";
import Update from "./Update.js";
import Delete from "./Delete.js";

function App() {

  const [pageState, setPageState] = useState(0);
  const [pageUpdate, setPageUpdate] = useState("");
  
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

  const getUsers = () => {

    let updatedUserList = [];

    Axios.get('http://127.0.0.1:8070/Users').then(
      (response)=> {

        // for (let i = 0; i < length(response.data); i++) {
        //   let data = response.data[i];
        //   let row = [data.adId, data.aproductId, data.auserId, data.text, data.clickCounter, data.mediaLink];
        //   updatedAdList.push(row);
        // }
        console.log(response);

      }
    );

    // return updatedUserList;
  }

  const setState = (value) => {
    setPageState(value);
  }

  const setAds = () => {
    const list = getAds();
    setAdList(list);
  }

  const setUsers = () => {
    const list = getUsers();
    setUserList(list);
  }

  const setUpdate = () => {
    setPageUpdate(pageUpdate + "")
  }

  
  const adHeaderList = ['AdID', 'ProductID', 'UserID', 'Text', 'ClickCounter', 'MediaLink'];

  return (
    <div className="App">

      <div className="Admin-bar">Mockbook - Admin Page</div>

      <div className="Nav-bar">
        <div className="Nav-button" onClick={() => setState(0)}>Create</div>
        <div className="Nav-button" onClick={() => setState(1)}>Update</div>
        <div className="Nav-button" onClick={() => setState(2)}>Delete</div>
      </div>


      <div>{pageUpdate}</div>

      {pageState == 0 && (
        <Create 
          setAds={ setAds }
          adDataList={ adDataList }
          setUsers={ setUsers }
          userDataList={ userDataList }
        />
      )}
      {/* USE THIS FOR CONDITIONAL PAGES */}


      <button 
        className="fixed-button"
        onClick={setUpdate}
      >
        Update Page
      </button>

    </div>




  );
}

export default App;
