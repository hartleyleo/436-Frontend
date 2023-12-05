import React, { useState } from 'react';
import Axios from 'axios';

const CommentCreateList = () => {

  const [inputValues, setInputValues] = useState(['', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const postComments = async () => {

    const postData = {
        adId: inputValues[0],
        // ------------------
        // ADD IN VALUES HERE
        // ------------------
    };

    // ---Testing---
    console.log(postData);
    // -------------

    try {

      const apiUrl = 'http://127.0.0.1:8070/Comments';
      const response = await Axios.post(apiUrl, postData);

      console.log('Response:', response.data);

    } catch (error) {
      console.error('Error: oh no !: ', error.message);
    }
  };

  const inputLabels = ['CommentID', 'Content', 'Comment Date', 'UserID', 'PostID'];

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

        <button onClick={postComments}>Create Entry</button>
    </div>
  );
};

export default CommentCreateList;
