import axios from 'axios';
import { API, Global } from 'common';

const { API_ENDPOINT_QUIZ } = API;

export const FETCH_QUIZ = 'FETCH_QUIZ';
export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';
export const FETCH_QUIZ_FAILURE = 'FETCH_QUIZ_FAILURE';
export const SET_RESULT = 'SET_RESULT';
export const CLEAR = 'CLEAR';

export function fetchQuiz({amount, difficulty, type}) {
  const request = axios({
    method: 'get',
    url: `${Global.getApiRootUrl()}/${API_ENDPOINT_QUIZ}?amount=` + amount + `&difficulty=` + difficulty + `&type=` + type
  });

  return {
    type: FETCH_QUIZ,
    payload: request
  };
}

export function fetchQuizSuccess(response) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    payload: response
  };
}

export function fetchQuizFailure(error) {
  return {
    type: FETCH_QUIZ_FAILURE,
    payload: error
  };
}

export function setResult({index, isCorrect}) {
  return {
    type: SET_RESULT,
    payload: {index, isCorrect}
  };
}

export function clear() {
  return {
    type: CLEAR
  };
}
