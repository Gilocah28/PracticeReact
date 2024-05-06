import React from "react";
import ExpandableTextComponents from "./ExpandableTextComponents";

const ParentComponent = () => {
  return (
    <>
      <ExpandableTextComponents maxChars={20}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
        facilis nostrum vitae adipisci molestias illo aperiam pariatur autem.
        Inventore laudantium, sapiente aperiam commodi consequuntur laboriosam
        similique maxime ex nihil culpa at facere nemo accusantium nam fugiat
        pariatur officiis, illo quibusdam dolorem, quisquam itaque quod. Non
        modi iure mollitia alias perspiciatis!
      </ExpandableTextComponents>
    </>
  );
};

export default ParentComponent;
