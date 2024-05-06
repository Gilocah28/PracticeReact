import React, { useState } from "react";

const StateAndPropsCom = () => {
  const [count, SetCount] = useState(0);
  const [name, SetName] = useState("Giber"); //Sample of usestate
  const [isChecked, SetIsChecked] = useState(false); //Sample of usestate
  const [fruit, setFruits] = useState(["Manga", "Dorian", "Banana"]); //Sample of usestate
  const [person, setPerson] = useState({ name: "Giber", age: 21 }); //Sample of usestate

  const handleIncrement = () => {
    SetCount((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    SetCount((prevState) => prevState - 1);
  };

  const handleShowFruits = () => {
    SetIsChecked((prevState) => !isChecked);
  };

  const handleAddFruit = () => {
    setFruits([...fruit, "PineApple"]); // Sample Code Static Only to Add Fruits
  };

  const handleRemove = (FruitIndex) => {
    const filteredFruits = fruit.filter((fruit,index) => index !== FruitIndex)

    setFruits(prevState => prevState = filteredFruits)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Increment</button>
      <hr />

      <div>
        <label>Show</label>
        <input
          type="checkbox"
          onChange={handleShowFruits}
          checked={isChecked}
        />
      </div>

      <button onClick={handleAddFruit}>add Fruits</button>

      <ul className="list-group">
        {isChecked &&
          fruit.map((fruit, index) => {
            return (
              <div key={index}>
                <li className="list-group-item">{fruit}</li>
                <button onClick={() => handleRemove(index)} className="btn btn-danger">Remove Fruits</button>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default StateAndPropsCom;
