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
      com_date: inputValues[4],
      commentId: inputValues[0],
      content: inputValues[1],
      cpost_id: inputValues[3],
      cuser_id: inputValues[2],
    };

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

        <button onClick={postComments} className='entry-button'>Create Entry</button>
    </div>
  );
};

export default CommentCreateList;
