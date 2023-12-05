import React, { useState } from 'react';
import Axios from 'axios';

const CommentsUpdate = () => {

    const [inputValues, setInputValues] = useState(['']);
    const [commentId, setCommentId] = useState('');

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const updateCommentByID = async () => {

        const updateData = {
            com_date: inputValues[1],
            content: inputValues[0],
            cpost_id: inputValues[3],
            cuser_id: inputValues[2],
        };

        const id = parseInt(commentId, 10);

        try {

            const apiUrl = `http://127.0.0.1:8070/Comments/${id}`
            const response = await Axios.put(apiUrl, updateData);
            
            console.log('Put successfully: ', response.data);

        } catch (error) {
            console.error('Error putting:', error);
        }

    };

    const inputLabels = ['Content', 'Comment Date', 'UserID', 'PostID'];

    return (
        <div>
            <div>
                <a>CommentID to update: </a>
                <input
                    type="text"
                    value={commentId}
                    onChange={(e) => setCommentId(e.target.value)}
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

            <button onClick={updateCommentByID} className="entry-button">Update Comment</button>
        </div>
  );
};

export default CommentsUpdate;
