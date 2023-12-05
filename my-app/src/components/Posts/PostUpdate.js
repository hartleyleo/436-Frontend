import React, { useState } from 'react';
import Axios from 'axios';

const PostsUpdate = () => {

    const [inputValues, setInputValues] = useState(['']);
    const [postId, setPostId] = useState('');

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const updatePostByID = async () => {

        const updateData = [parseInt(postId, 10), {
            likes: inputValues[0],
            plocation: inputValues[1],
            post_Date: inputValues[2],
            pproductId: inputValues[3],
        }];

        console.log(updateData);

        try {

            const apiUrl = 'http://127.0.0.1:8070/Posts'
            const response = await Axios.put(apiUrl, updateData);
            
            console.log('Put successfully: ', response.data);

        } catch (error) {
            console.error('Error putting:', error);
        }

    };

    const inputLabels = ['Likes', 'Location', 'Post Date', 'ProductID'];

    return (
        <div>
            <div>
                <a>PostID to update: </a>
                <input
                    type="text"
                    value={postId}
                    onChange={(e) => setPostId(e.target.value)}
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

            <button onClick={updatePostByID} className="entry-button">Update Post</button>
        </div>
  );
};

export default PostsUpdate;
