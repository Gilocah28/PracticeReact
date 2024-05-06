import React from "react";

const CountProps = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => handleIncrement()} className="btn btn-success">+ 1</button>
      <button onClick={() => handleDecrement()} className="btn btn-danger">- 1</button>
    </div>
  );
};

export default CountProps;
