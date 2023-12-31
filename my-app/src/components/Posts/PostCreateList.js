import React, { useState } from 'react';
import Axios from 'axios';

const PostCreateList = () => {

  const [inputValues, setInputValues] = useState(['', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const postPosts = async () => {

    const postData = {      
      likes: inputValues[1],
      plocation: inputValues[2],
      postId: inputValues[0],
      post_Date: inputValues[3],
      pproductId: inputValues[4],
    };

    try {

      const apiUrl = 'http://127.0.0.1:8070/Posts';
      const response = await Axios.post(apiUrl, postData);

      console.log('Response:', response.data);

    } catch (error) {
      console.error('Error: oh no !: ', error.message);
    }
  };

  const inputLabels = ['PostID', 'Likes', 'Location', 'Post Date', 'ProductID'];

  return (
    <div>
        <div>
            {inputLabels.map((label, index) => (
                <div key={index}>
                <a title={label}>{label}: </a>
                <input
                    type="text"
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                />
                </div>
            ))}
        </div>

        <button onClick={postPosts} className="entry-button">Create Entry</button>
    </div>
  );
};

export default PostCreateList;
