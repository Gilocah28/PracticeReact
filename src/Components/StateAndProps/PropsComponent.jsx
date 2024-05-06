import React, { useState } from "react";
import CountProps from "./CountProps";
import ChildComponent from "./ChildComponent";

const PropsComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <CountProps
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      <br />
      <hr />
      <br />

      <ChildComponent>
        <h1>This is the heading</h1>
        <p>This is a sample paragraph</p>
      </ChildComponent>
    </>
  );
};

export default PropsComponent;
