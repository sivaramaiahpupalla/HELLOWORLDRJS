import React from 'react'

const StringintoNum = () => {
    const ArrayStr = ["Siva","Ramaiah","Manikanta","Ashok"];
    const ArrayNum = ArrayStr.map((item) => {
        if (isNaN(item)) {
            return item.length;
        } else {
            return parseFloat(item);
        }
    });
    return (
        <div>
            <h1>Converted Array: {ArrayNum.join(', ')}</h1>
        </div>
    );
    }
export default StringintoNum;