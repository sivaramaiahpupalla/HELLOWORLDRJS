import React from 'react'

const NestedArraySum = () => {

  function arraySum(arr) {
    let sum = 0;
    for (let item of arr) {
      if (typeof item === 'number') {
        sum += item;
      } else if (typeof item === 'object'|| Array.isArray(item)) {
        sum += arraySum(item);
      } else if( typeof item === 'string') {
        sum += Number(item);
        
        
      } 
    }
    return sum;
  }

  const nestedArray = [[2, 3], [5, 6], 3,"5","6"];
  const total = arraySum(nestedArray);

  return (
    <div>
      Sum: {total}
    </div>
  );
};

export default NestedArraySum;