import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const BtnComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div>
      <div>
        <h1>{theme}</h1>
      </div>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </div>
  );
};

export default BtnComponent;
