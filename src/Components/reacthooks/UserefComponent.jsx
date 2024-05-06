import React, { useRef } from "react";

const UserefComponent = () => {
  const inputRef = useRef();

  const handleFucos = () => {
    inputRef.current.focus(); // focus in the input element

    const value = inputRef.current.value // get the value in input element
    console.log(value)
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        name="firstName"
        placeholder="Enter name..."
      />

      <button className="btn btn-primary" onClick={handleFucos}>
        Fucos on me
      </button>
    </div>
  );
};

export default UserefComponent;
