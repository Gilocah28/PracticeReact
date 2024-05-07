import React, { useRef } from "react";
import UserefComponent from "./UserefComponent";
import UseEffectComponent from "./UseEffectComponent";

const HookParentComponent = () => {

 

  return (
    <>
      {/* <UserefComponent/> */}
      <UseEffectComponent/>
    </>
  );
};

export default HookParentComponent;
