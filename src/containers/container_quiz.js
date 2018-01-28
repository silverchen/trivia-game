import QuizComponent from '../components/quiz/component_quiz';
import { connect } from 'react-redux';
import { setResult, fetchQuiz, fetchQuizSuccess, fetchQuizFailure } from '../actions/action_quiz';

const mapDispatchToProps = (dispatch) => {
  return {
    setResult: ({index, isCorrect}) => {
      dispatch(setResult({index, isCorrect}));
    },
    fetchQuiz: ({amount, difficulty, type}) => {
      dispatch(fetchQuiz({amount, difficulty, type})).then((response) => {
        !response.error ? dispatch(fetchQuizSuccess(response.payload)) : dispatch(fetchQuizFailure(response.payload));
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.quizReducer.quizPayload.data,
    error: state.quizReducer.quizPayload.error,
    isLoading: state.quizReducer.quizPayload.loading
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);
