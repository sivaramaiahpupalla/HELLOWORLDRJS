import React from 'react'

const Fibbonaci = () => {
    function fib(n) {
        if(n<=1) {
            return n;
        
        }
        return fib(n-1)+fib(n-2);
    }
    console.log(fib(5));
  return (
    <>
    <div>
      Fibonacci of 5 is: {fib(5)}
    </div>
    </>
  )
}

export default Fibbonaci