import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { ReactComponent as Next } from './next.svg'
import './answerContainer.css';
import './currentQuestion.css';

export const AnswerContainer = () => {
  const options = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex].options
  );

  const id = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex].id
  );

  // const colors = useSelector(
  //   state => state.quiz.questions[state.quiz.currentQuestionIndex].colors
  // )

  const dispatch = useDispatch();

  return (
    <section className="answer-option-container">
      {options.map((option, index) => (

        <button
          type="button"
          className="answer-button"
          // style={{ background: 'green' }}
          // background={colors}
          onClick={() =>
            dispatch(
              quiz.actions.submitAnswer({ questionId: id, answerIndex: index })
            )
          }
          key={option}>
          {option}<div className="icon"><Next /></div>
        </button>))}
    </section>
  );
};
