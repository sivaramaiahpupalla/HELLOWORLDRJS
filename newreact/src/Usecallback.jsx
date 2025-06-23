import React, { useState, useCallback } from 'react';
import Child from './UsecallbackChild'; 
// Child component that only re-renders if its props change
// const Child = React.memo(({ onClick }) => {
//   console.log('Child rendered');
//   return <button onClick={onClick}>Increment from Child</button>;
// });

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  // Without useCallback: new function every render
  // const increment = () => setCount(count + 1);

  // With useCallback: same function reference unless 'count' changes
  const increment = useCallback(() => setCount(c => c + 1), []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={increment} />
    
    </div>
  );
};

export default UseCallbackDemo;