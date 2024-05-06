import React, { useState } from "react";

const ExpandableTextComponents = ({ children, maxChars }) => {
  const [showFullText, setShowFullText] = useState(false);
  const text = showFullText ? children : children.substring(0, maxChars);

  if (children.length <= maxChars) {
    return <div>{children}</div>;
  }

  return (
    <div>
      {text} ...

      <button
        onClick={() => setShowFullText((prevState) => (prevState = !prevState))}
      >
        {showFullText ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableTextComponents;
