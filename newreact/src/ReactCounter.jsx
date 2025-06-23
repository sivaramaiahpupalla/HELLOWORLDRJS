
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset } from "./counteraction";


const ReactCounter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default ReactCounter;
