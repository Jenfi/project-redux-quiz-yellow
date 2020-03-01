import React from "react";
import { useSelector } from "react-redux";

import "./summary.css"

export const Summary = () => {
  const submittedAnswers = useSelector(state => state.quiz.answers);

  const correctAnswers = submittedAnswers.filter(
    correctAnswer => correctAnswer.isCorrect === true
  );

  const totalCorrectAnswers = correctAnswers.length;

  return (
    <div className="summary">
      <h1>You got {totalCorrectAnswers} out of 5!</h1>
      {totalCorrectAnswers <= 3 && (
        <h3>Looks like you need to read up on female techers!</h3>
      )}
      {totalCorrectAnswers >= 4 && (
        <h3>Great job!</h3>
      )}
    </div>

  );
};
