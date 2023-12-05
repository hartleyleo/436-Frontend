import Tabs from "./components/Tabs.js";
import React, { useState } from "react";
import ResultTable from "./components/ResultTable.js";
import TableDropdown from "./components/TableDropdown.js";
import AdsCreateList from "./components/AdsCreateList.js";
import UsersCreateList from "./components/UserCreateList.js"
import ProductCreateList from "./components/ProductCreateList.js";
import PostCreateList from "./components/PostCreateList.js";
import CommentCreateList from "./components/CommentCreateList.js";

const Create = ({ 
  setAds, adDataList, 
  // setPosts, postDataList, 
  // setComments, commentDataList,
  // setProducts, productDataList,
  setUsers, userDataList
}) => {

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
        {activeTable == 'Products' &&
          <ProductCreateList />
        }
        {activeTable == 'Posts' &&
          <PostCreateList />
        }
        {activeTable == 'Comments' &&
          <CommentCreateList />
        }
      </div>
      <div class="right-section">
        <h2>Results</h2>
        {activeTable == 'Ads' &&
          <div>
            <button onClick={setAds}>Update Table</button>
            <div className="result-table-container">
              <ResultTable data={adDataList} header={adHeaderList}/>
            </div>
          </div>
        }
        {activeTable == 'Users' &&
          <div>
            Users
            <button onClick={setUsers}>Update Table</button>
            <div className="result-table-container">
              <ResultTable data={userDataList} header={userHeaderList}/>
            </div>
          </div>
        }
        {/* {activeTable == 'Products' &&
          <div>
            <button onClick={setProducts}>Update Table</button>
            <div className="result-table-container">
              <ResultTable data={productDataList} header={productHeaderList}/>
            </div>
          </div>
        }
        {activeTable == 'Posts' &&
          <div>
            <button onClick={setPosts}>Update Table</button>
            <div className="result-table-container">
              <ResultTable data={postDataList} header={postHeaderList}/>
            </div>
          </div>
        }
        {activeTable == 'Comments' &&
          <div>
            <button onClick={setComments}>Update Table</button>
            <div className="result-table-container">
              <ResultTable data={commentDataList} header={commentHeaderList}/>
            </div>
          </div>
        } */}

      </div>
    </div>

  );

}

export default Create;