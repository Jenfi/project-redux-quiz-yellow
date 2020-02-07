import React from "react";
import { quiz } from "../reducers/quiz";
import { useSelector, useDispatch } from "react-redux";
import "./answerContainer.css";
import "./currentQuestion.css";

export const AnswerContainer = () => {
  const options = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex].options
  );

  const id = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex].id
  );

  const dispatch = useDispatch();

  return (
    <section className="answer-option-container">
      {options.map((option, index) => (

        <button
          type="button"
          className="answer-button"
          onClick={() =>
            dispatch(
              quiz.actions.submitAnswer({ questionId: id, answerIndex: index })
            )
          }
          key={option}>
          {option}
        </button>))}
    </section>
  );
};
