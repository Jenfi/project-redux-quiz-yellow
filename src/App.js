import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { QuizContainer } from "components/QuizContainer";
import "index.css";
import "app.css"
import "./components/currentQuestion.css"

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  // const quizEnd = useSelector(state => state.quiz.quizOver);

  return (
    <Provider store={store}>
      <div className="container">
        <QuizContainer />
      </div>
    </Provider>
  );
};
