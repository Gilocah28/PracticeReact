import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      return state;
  }
};

const UseReducerComponent = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <div>
        <button className="btn btn-primary" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn btn-success" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducerComponent;
