import './App.css';
import React, { useState } from "react";
import Axios from 'axios';
import Create from "./Create.js";
import Update from "./Update.js";
import Delete from "./Delete.js";

function App() {

  const [pageState, setPageState] = useState(0);
  
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

        for (let i = 0; i < length(response.data); i++) {
          let data = response.data[i];
          let row = [data.userID, data.username, data.upassword, data.email, data.gender, data.age, data.first_name, data.last_name];
          updatedUserList.push(row);
        }

      }
    );

    return updatedUserList;
  }

  const getProducts = () => {

    let updatedProductList = [];

    Axios.get('http://127.0.0.1:8070/Products').then(
      (response)=> {

        for (let i = 0; i < length(response.data); i++) {
          let data = response.data[i];
          let row = [data.productId, data.pstatus, data.ptype, data.price, data.puserId, data.desc];
          updatedProductList.push(row);
        }

      }
    );

    return updatedProductList;
  }

  const getPosts = () => {

    let updatedPostList = [];

    Axios.get('http://127.0.0.1:8070/Posts').then(
      (response)=> {

        for (let i = 0; i < length(response.data); i++) {
          let data = response.data[i];
          let row = [data.postId, data.likes, data.plocation, data.post_Date, data.pproductId];
          updatedPostList.push(row);
        }

      }
    );

    return updatedPostList;
  }

  const getComments = () => {

    let updatedCommentList = [];

    Axios.get('http://127.0.0.1:8070/Comments').then(
      (response)=> {

        for (let i = 0; i < length(response.data); i++) {
          let data = response.data[i];
          let row = [data.commentId, data.content, data.cuser_id, data.cpost_id, data.com_date];
          updatedCommentList.push(row);
        }

      }
    );

    return updatedCommentList;
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

  const setProducts = () => {
    const list = getProducts();
    setProductList(list);
  }

  const setPosts = () => {
    const list = getPosts();
    setPostList(list);
  }

  const setComments = () => {
    const list = getComments();
    setCommentList(list);
  }

  return (
    <div className="App">

      <div className="Admin-bar">Mockbook - Admin Page</div>

      <div className="Nav-bar">
        <div className="Nav-button" onClick={() => setState(0)}>Create</div>
        <div className="Nav-button" onClick={() => setState(1)}>Update</div>
        <div className="Nav-button" onClick={() => setState(2)}>Delete</div>
      </div>

      {pageState == 0 && (
        <Create 
          setAds={ setAds }
          adDataList={ adDataList }
          setUsers={ setUsers }
          userDataList={ userDataList }
          setProducts={ setProducts }
          productDataList={ productDataList }
          setPosts={ setPosts }
          postDataList={ postDataList }
          setComments={ setComments }
          commentDataList={ commentDataList }
        />
      )}
      {pageState == 1 && (
        <Update 
          setAds={ setAds }
          adDataList={ adDataList }
          setUsers={ setUsers }
          userDataList={ userDataList }
          setProducts={ setProducts }
          productDataList={ productDataList }
          setPosts={ setPosts }
          postDataList={ postDataList }
          setComments={ setComments }
          commentDataList={ commentDataList }
        />
      )}
      {pageState == 2 && (
        <Delete 
          setAds={ setAds }
          adDataList={ adDataList }
          setUsers={ setUsers }
          userDataList={ userDataList }
          setProducts={ setProducts }
          productDataList={ productDataList }
          setPosts={ setPosts }
          postDataList={ postDataList }
          setComments={ setComments }
          commentDataList={ commentDataList }
        />
      )}

    </div>

  );
}

export default App;
