import './App.css';
import React, { useState } from "react";
import Axios from 'axios';
import Tabs from "./components/Tabs.js";

function App() {

  const [userInfo, setUserInfo] = useState("");

  // const getJoke = () => {
  //   Axios.get('http://127.0.0.1:8070/Ads').then(
  //     (response)=> {
  //       console.log(response);
  //       // setUserInfo(response.data.setup + " ... " + response.data.punchline);
  //     }
  //   );
  // }

  const getJoke = () => {
    Axios.get('https://v2.jokeapi.dev/joke/Any?type=single', {
      headers: {
        blacklistFlags: 'nsfw',
      }
    }).then(
      (response)=> {
        console.log(response);
        setUserInfo(response.data.joke);
      }
    );
  }

  return (
    <div className="App">

      <Tabs>

          <div label="Create" className="Nav-button">
            
            <div className="Page-container">

              <div className="Param-grid Page-element">
                <div className="White-box">

                  <div className="Param-child Title">Create Options:</div>

                  <Tabs>
                    <div label="Users">

                      <div className="Param-child Child-title">
                        <a>User ID:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Username:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>UPassword:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Email:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Gender:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Age:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>First_name:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Last_name:</a>
                        <input></input>
                      </div>

                      <button onClick={getJoke}>Create</button>

                    </div>

                    <div label="Products">

                      <div className="Param-child Child-title">
                          <a>Product ID:</a>
                          <input></input>
                        </div>
                        <div className="Param-child Child-title">
                          <a>PStatus:</a>
                          <input></input>
                        </div>
                        <div className="Param-child Child-title">
                          <a>PType:</a>
                          <input></input>
                        </div>
                        <div className="Param-child Child-title">
                          <a>Price:</a>
                          <input></input>
                        </div>
                        <div className="Param-child Child-title">
                          <a>UserID:</a>
                          <input></input>
                        </div>
                        <div className="Param-child Child-title">
                          <a>Descrip:</a>
                          <input></input>
                        </div>

                        <button>Create</button>
                    </div>

                    <div label="Ads">

                      <div className="Param-child Child-title">
                        <a>Product ID:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>UserID:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>AdID:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Clicker_counter:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>AText:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Medialink:</a>
                        <input></input>
                      </div>

                      <button>Create</button>

                    </div>

                    <div label="POSTS">

                      <div className="Param-child Child-title">
                        <a>Post ID:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Likes:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>PLocation:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Post_Date:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>ProductID:</a>
                        <input></input>
                      </div>

                      <button>Create</button>

                    </div>
                    <div label="COMMENTS">

                      <div className="Param-child Child-title">
                        <a>CommentID:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Content:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>Comment_Date:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>UserID:</a>
                        <input></input>
                      </div>
                      <div className="Param-child Child-title">
                        <a>PostID:</a>
                        <input></input>
                      </div>

                      <button>Create</button>

                    </div>
                  </Tabs>

                </div>
              </div>

              <div className="Results Page-element White-box">
                <div>Results</div>
                <div>{userInfo}</div>
              </div>

            </div>

          </div>


          <div label="Update" className="Nav-button">
            After 'while, <em>Crocodile</em>!
          </div>

          <div label="Delete" className="Nav-button">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>

       

      </Tabs>


      {/* <div className="Nav-bar">

        <div className="Nav-button">Search</div>
        <div className="Nav-button">Create</div>
        <div className="Nav-button">Update</div>
        <div className="Nav-button">Delete</div>

      </div> */}

      




    </div>




  );
}

export default App;
