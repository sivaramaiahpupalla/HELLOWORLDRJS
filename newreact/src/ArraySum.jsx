import React from 'react'

const ArraySum = () =>{
    const nums =[1,2,3,"5","6","7",10,23,45]
    const sum = nums.reduce((acc, curr) => {
        if (typeof curr === 'number') {
            return acc + curr;
        } else if (!isNaN(curr)) {
            return acc + parseFloat(curr);
        }
        return acc;
    }, 0);


    return (
        <div>       
            <h1>Sum of Array Elements: {sum}</h1>
        </div>
    )
}
export default ArraySum;

