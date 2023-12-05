import React, { useState } from 'react';
import Axios from 'axios';

const UserCreateList = () => {

  const [inputValues, setInputValues] = useState(['', '', '', '', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const postUsers = async () => {

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

      const apiUrl = 'http://127.0.0.1:8070/Users';
      const response = await Axios.post(apiUrl, postData);

      console.log('Response:', response.data);

    } catch (error) {
      console.error('Error: oh no !: ', error.message);
    }
  };

  const inputLabels = ['UserID', 'Username', 'Password', 'Email', 'Gender', 'Age', 'First Name', 'Last Name'];

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

        <button onClick={postUsers}>Create Entry</button>
    </div>
  );
};

export default UserCreateList;
