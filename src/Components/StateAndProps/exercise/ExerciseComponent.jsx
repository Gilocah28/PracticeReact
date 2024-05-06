import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ExerciseComponent = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prevState) => prevState = !prevState)
  }
  return (
    <div onClick={handleLike}>
      {isLiked ? <AiFillHeart color="red" /> : <AiOutlineHeart color="red" />}
    </div>
  );
};

export default ExerciseComponent;
