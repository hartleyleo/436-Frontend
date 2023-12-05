import React, { useState } from 'react';
import Axios from 'axios';

const AdsDelete = () => {

    const [inputValues, setInputValues] = useState(['']);

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const deleteAdByID = async () => {

        const deleteData = parseInt(inputValues[0], 10);

        console.log(deleteData);

        try {

            const apiUrl = 'http://127.0.0.1:8070/Ads'
            const response = await Axios.delete(apiUrl, deleteData);
            
            console.log('Deleted successfully: ', response.data);

        } catch (error) {
            console.error('Error deleting:', error);
        }

    };

    const inputLabels = ['AdID'];

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

            <button onClick={deleteAdByID} className="entry-button">Delete Ad</button>
        </div>
  );
};

export default AdsDelete;
