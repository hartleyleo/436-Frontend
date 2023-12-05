import React, { useState } from "react";
import ResultTable from "./components/ResultTable.js";
import TableDropdown from "./components/TableDropdown.js";
import AdsDelete from "./components/Ads/AdsDelete.js";
import UsersDelete from "./components/Users/UsersDelete.js"
import ProductDelete from "./components/Products/ProductDelete.js";
import PostDelete from "./components/Posts/PostDelete.js";
import CommentsDelete from "./components/Comments/CommentsDelete.js";

const Delete = ({ 
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
        <h2>Delete Data Entry:</h2>
        <TableDropdown onSelect={setTable}/>
        {activeTable == 'Ads' &&
          <AdsDelete />
        }
        {activeTable == 'Users' &&
          <UsersDelete />
        }
        {activeTable == 'Products' &&
          <ProductDelete />
        }
        {activeTable == 'Posts' &&
          <PostDelete />
        }
        {activeTable == 'Comments' &&
          <CommentsDelete />
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

export default Delete;