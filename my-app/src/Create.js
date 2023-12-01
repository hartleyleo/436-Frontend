import Tabs from "./components/Tabs.js";
// import Axios from 'axios';
import React, { useState } from "react";

function Create() {

  const [updateTime, setUpdateTime] = useState("");

  const setTime = () => {
    // setUpdateTime(String(Date.now() / 1000 | 0));
    setUpdateTime("String(Date.now() / 1000 | 0)");
  }

  return (
      
        <div label="Create">
            
            <div className="Page-container">

              <div className="Param-grid Page-element">
                <div className="White-box">

                  <div className="Param-child Title">Create Options:</div>
                  <div className="Param-child">Choose table:</div>

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
                <div className="Title">Results:</div>
                <div>Last time updated: { updateTime }</div>
                <button onClick={() => setTime()}>Time update</button>
              </div>

            </div>

          </div>

    );
  }

export default Create;