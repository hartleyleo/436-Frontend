import React, { useState } from 'react';
import Axios from 'axios';

const UsersDelete = () => {

    const [inputValues, setInputValues] = useState(['']);

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const deleteUserByID = async () => {

        const deleteData = parseInt(inputValues[0], 10);

        console.log(deleteData);

        try {

            const apiUrl = 'http://127.0.0.1:8070/Users'
            const response = await Axios.delete(apiUrl, deleteData);
            
            console.log('Deleted successfully: ', response.data);

        } catch (error) {
            console.error('Error deleting:', error);
        }

    };

    const inputLabels = ['UserID'];

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

            <button onClick={deleteUserByID} className="entry-button">Delete User</button>
        </div>
  );
};

export default UsersDelete;
