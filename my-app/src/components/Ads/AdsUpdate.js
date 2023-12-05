import React, { useState } from 'react';
import Axios from 'axios';

const AdsUpdate = () => {

    const [inputValues, setInputValues] = useState(['']);
    const [adId, setAdId] = useState('');

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const updateAdByID = async () => {

        const updateData = {
            aproductId: inputValues[0],
            auserId: inputValues[1],
            clickcounter: inputValues[2],
            mediaLink: inputValues[3],
            text: inputValues[4],
        };

        const id = parseInt(adId, 10);

        try {

            const apiUrl = `http://127.0.0.1:8070/Ads/${id}`
            const response = await Axios.put(apiUrl, updateData);
            
            console.log('Put successfully: ', response.data);

        } catch (error) {
            console.error('Error putting:', error);
        }

    };

    const inputLabels = ['ProductID', 'UserID', 'ClickCounter', 'MediaLink', 'Text'];

    return (
        <div>
            <div>
                <a>AdID to update: </a>
                <input
                    type="text"
                    value={adId}
                    onChange={(e) => setAdId(e.target.value)}
                />
            </div>
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

            <button onClick={updateAdByID} className="entry-button">Update Ad</button>
        </div>
  );
};

export default AdsUpdate;
