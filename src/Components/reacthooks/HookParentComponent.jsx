import React, { useContext, useRef } from "react";
import UserefComponent from "./UserefComponent";
import UseEffectComponent from "./UseEffectComponent";
import BtnComponent from "./UseContext/BtnComponent";
import ThemeProvider from "./UseContext/ThemeProvider";
import ThemeContext from "./UseContext/context/ThemeContext";
import UseReducerComponent from "./UseReducerComponent";
import UseCallbackComponent from "./UseCallbackComponent";

const HookParentComponent = () => {

  // const {theme} = useContext(ThemeContext)

  return (
    <>
      {/* <UserefComponent/> */}
      {/* <UseEffectComponent/> */}

      {/* <ThemeProvider>
        <div>
          <h1>Theme Context</h1>
        </div>
        <BtnComponent />
      </ThemeProvider> */}


      {/* <UseReducerComponent/> */}

      <UseCallbackComponent/>
    </>
  );
};

export default HookParentComponent;
