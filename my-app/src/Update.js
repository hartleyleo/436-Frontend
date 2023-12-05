import React, { useState } from "react";
import ResultTable from "./components/ResultTable.js";
import TableDropdown from "./components/TableDropdown.js";
import AdsUpdate from "./components/Ads/AdsUpdate.js";
import UsersUpdate from "./components/Users/UsersUpdate.js"
import ProductsUpdate from "./components/Products/ProductUpdate.js";
import PostsUpdate from "./components/Posts/PostUpdate.js";
import CommentsUpdate from "./components/Comments/CommentsUpdate.js";

const Create = ({ 
  setAds, adDataList, 
  setPosts, postDataList, 
  setComments, commentDataList,
  setProducts, productDataList,
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
        <h2>Update Data Entry:</h2>
        <TableDropdown onSelect={setTable}/>
        {activeTable == 'Ads' &&
          <AdsUpdate />
        }
        {activeTable == 'Users' &&
          <UsersUpdate />
        }
        {activeTable == 'Products' &&
          <ProductsUpdate />
        }
        {activeTable == 'Posts' &&
          <PostsUpdate />
        }
        {activeTable == 'Comments' &&
          <CommentsUpdate />
        }
      </div>
      <div class="right-section">
        <h2>Results</h2>
        {activeTable == 'Ads' &&
          <div>
            <button onClick={setAds} className="entry-button">Update Table</button>
            <div className="result-table-container">
              <ResultTable data={adDataList} header={adHeaderList}/>
            </div>
          </div>
        }
        {activeTable == 'Users' &&
          <div>
            <button onClick={setUsers} className="entry-button">Update Table</button>
            <div className="result-table-container">
              <ResultTable data={userDataList} header={userHeaderList}/>
            </div>
          </div>
        }
        {activeTable == 'Products' &&
          <div>
            <button onClick={setProducts} className="entry-button">Update Table</button>
            <div className="result-table-container">
              <ResultTable data={productDataList} header={productHeaderList}/>
            </div>
          </div>
        }
        {activeTable == 'Posts' &&
          <div>
            <button onClick={setPosts} className="entry-button">Update Table</button>
            <div className="result-table-container">
              <ResultTable data={postDataList} header={postHeaderList}/>
            </div>
          </div>
        }
        {activeTable == 'Comments' &&
          <div>
            <button onClick={setComments} className="entry-button">Update Table</button>
            <div className="result-table-container">
              <ResultTable data={commentDataList} header={commentHeaderList}/>
            </div>
          </div>
        }

      </div>
    </div>

  );

}

export default Create;