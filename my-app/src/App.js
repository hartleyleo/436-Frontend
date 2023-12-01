import './App.css';
import React, { useState } from "react";
import Axios from 'axios';
import Create from "./Create.js";
import Update from "./Update.js";
import Delete from "./Delete.js";
import Tabs from "./components/Tabs.js";

function App() {

  const [pageState, setPageState] = useState(Create);

  const getAds = () => {
    Axios.get('http://127.0.0.1:8070/Ads').then(
      (response)=> {
        console.log(response);
        // setUserInfo(response.data.setup + " ... " + response.data.punchline);
      }
    );
  }

  const setState = (value) => {
    setPageState(value);
  }

  // const putAds = () => {
  //   Axios.put('http://127.0.0.1:8070/Ads', {
  //     :

  //   }).then(
  //     (response)=> {
  //       console.log(response);
  //       // setUserInfo(response.data.setup + " ... " + response.data.punchline);
  //     }
  //   );
  // }

  // const getJoke = () => {
  //   Axios.get('https://v2.jokeapi.dev/joke/Any?type=single', {
  //     headers: {
  //       blacklistFlags: 'nsfw',
  //     }
  //   }).then(
  //     (response)=> {
  //       console.log(response);
  //       setUserInfo(response.data.joke);
  //     }
  //   );
  // }

  // const setPage = () => {
  //   if (pageState == 0) {
  //     var page = new Create;
  //     return page;
  //   }
  // };

  return (
    <div className="App">

      <div className="Admin-bar">Mockbook - Admin Page</div>

      <div className="Nav-bar">

        <div className="Nav-button" onClick={() => setState(Create)}>Create</div>
        <div className="Nav-button" onClick={() => setState(Update)}>Update</div>
        <div className="Nav-button" onClick={() => setState(Delete)}>Delete</div>
      </div>

      <div>{pageState}</div>

    </div>




  );
}

export default App;
