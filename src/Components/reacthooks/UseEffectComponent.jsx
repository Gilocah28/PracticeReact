import React, { useEffect, useRef, useState } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const [todos, SetTodos] = useState([]);

  useEffect(() => {
    // console.log("Count Updated")
    // inputRef.current.focus()'

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => SetTodos((prevState) => (prevState = data)));
  }, []);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectComponent;
