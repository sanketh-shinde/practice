import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerDemo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>Counter - {count}</h1>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement 5
        </button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </>
  );
};

export default UseReducerDemo;
