import React, { useState } from 'react';
import Axios from 'axios';

const ProductsUpdate = () => {

    const [inputValues, setInputValues] = useState(['']);
    const [productId, setProductId] = useState('');

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const updateProductByID = async () => {

        const updateData = {
            pstatus: inputValues[0],
            ptype: inputValues[1],
            price: inputValues[2],
            puserId: inputValues[3],
            desc: inputValues[4],
        };

        const id = parseInt(productId, 10);

        try {

            const apiUrl = `http://127.0.0.1:8070/Products/${id}`
            const response = await Axios.put(apiUrl, updateData);
            
            console.log('Put successfully: ', response.data);

        } catch (error) {
            console.error('Error putting:', error);
        }

    };

    const inputLabels = ['Status', 'Type', 'Price', 'UserID', 'Description'];

    return (
        <div>
            <div>
                <a>ProductID to update: </a>
                <input
                    type="text"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
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

            <button onClick={updateProductByID} className="entry-button">Update Product</button>
        </div>
  );
};

export default ProductsUpdate;
