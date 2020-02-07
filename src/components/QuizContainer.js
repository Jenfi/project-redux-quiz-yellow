import React from "react";
import { useSelector } from "react-redux";
import { AnswerContainer } from "components/AnswerContainer";
import { Button } from "components/Button";
import { Summary } from "components/Summary";
import { ProgressCount } from "components/ProgressCount";
import { CurrentQuestion } from "components/CurrentQuestion";
import { Feedback } from "components/Feedback";

import "./currentQuestion.css"

export const QuizContainer = () => {
  const quizEnd = useSelector(state => state.quiz.quizOver);
  return (
    <>
      <div className="progress-container">
        <ProgressCount />
      </div>
      {!quizEnd && (
        <>
          <article>
            <CurrentQuestion />
            <AnswerContainer />
            <Feedback />
          </article>
        </>
      )}
      {quizEnd && <Summary />}
      <Button />
    </>
  );
};
