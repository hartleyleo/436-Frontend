import React, { useState } from 'react';
import Axios from 'axios';

const UsersUpdate = () => {

    const [inputValues, setInputValues] = useState(['']);
    const [userId, setUserId] = useState('');

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const updateUserByID = async () => {

        const updateData = [parseInt(userId, 10), {
            username: inputValues[0],
            upassword: inputValues[1],
            email: inputValues[2],
            gender: inputValues[3],
            age: inputValues[4],
            first_name: inputValues[5],
            last_name: inputValues[6],
        }];

        console.log(updateData);

        try {

            const apiUrl = 'http://127.0.0.1:8070/Users'
            const response = await Axios.put(apiUrl, updateData);
            
            console.log('Put successfully: ', response.data);

        } catch (error) {
            console.error('Error putting:', error);
        }

    };

    const inputLabels = ['Username', 'Password', 'Email', 'Gender', 'Age', 'First Name', 'Last Name'];

    return (
        <div>
            <div>
                <a>UserID to update: </a>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
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

            <button onClick={updateUserByID} className="entry-button">Update User</button>
        </div>
  );
};

export default UsersUpdate;
