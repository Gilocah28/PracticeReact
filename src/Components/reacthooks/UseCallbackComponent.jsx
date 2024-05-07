import React, { useCallback, useState } from "react";

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Add One</button>
    </div>
  );
};

export default UseCallbackComponent;
