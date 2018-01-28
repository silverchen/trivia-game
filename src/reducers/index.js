import { combineReducers } from 'redux';
import QuizReducer from './reducer_quiz';

const appReducer = combineReducers({
    quizReducer: QuizReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
