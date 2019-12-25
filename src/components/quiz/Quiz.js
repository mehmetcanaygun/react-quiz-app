import React from "react";
import Timer from "./Timer";
import Question from "./Question";

const Quiz = () => {
  return (
    <div className="quiz container">
      <Timer />
      <Question />
    </div>
  );
};

export default Quiz;
