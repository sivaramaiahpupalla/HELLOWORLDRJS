import React from 'react'

const Factorial = () => {
    function factorial(n) {
        if(n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    console.log(factorial(5)); 
  return (
    <div>Factorial:{factorial(5)}</div>
  )
}

export default Factorial ;