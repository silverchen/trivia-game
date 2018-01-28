import {
  FETCH_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  SET_RESULT,
  CLEAR
} from '../actions/action_quiz';

import { QuizModel } from '../models/quiz';

const INITIAL_STATE = {
  quizPayload: {
    data: null,
    error: null,
    loading: false
  }
};

export default function(state = INITIAL_STATE, action) {
  let error;

  switch (action.type) {
    case FETCH_QUIZ:
      return {
        ...state,
        quizPayload: {
          data: null,
          error: null,
          loading: true
        }
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        quizPayload: {
          data: action.payload.data.results.map(result => QuizModel(result)),
          error: null,
          loading: false
        }
      };
    case FETCH_QUIZ_FAILURE:
      // error = action.payload || {
      //   message: action.payload.message
      // };
      return {
        ...state,
        quizPayload: {
          data: null,
          error: 'Something went wrong',
          loading: false
        }
      };
    case SET_RESULT:
      var data = Array.from(state.quizPayload.data, (obj, index) => {
        if (index == action.payload.index) {
          obj.isCorrect = action.payload.isCorrect;
        }
        return obj;
      });

      return {
        ...state,
        quizPayload: {
          data: data,
          error: null,
          loading: false
        }
      };
    case CLEAR:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}
