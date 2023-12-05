import React, { useState } from "react";
import Axios from 'axios';

const AdsCreateList = () => {

  const [inputValues, setInputValues] = useState(['', '', '', '', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const postAds = async () => {

    const postData = {
        adId: inputValues[0],
        aproductId: inputValues[1],
        auserId: inputValues[2],
        clickcounter: inputValues[3],
        mediaLink: inputValues[4],
        product: null,
        text: inputValues[5],
        user: null,
    };

    // ---Testing---
    console.log(postData);
    // -------------

    try {

      const apiUrl = 'http://127.0.0.1:8070/Ads';
      const response = await Axios.post(apiUrl, postData);

      console.log('Response:', response.data);

    } catch (error) {
      console.error('Error: oh no !: ', error.message);
    }
  };

  const inputLabels = ['AdID', 'ProductID', 'UserID', 'ClickCounter', 'MediaLink', 'Text'];

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

        <button onClick={postAds} className="entry-button">Create Entry</button>
    </div>
  );
};

export default AdsCreateList;
