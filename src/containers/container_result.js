import ResultComponent from '../components/result/component_result';
import { connect } from 'react-redux';
import { clear } from '../actions/action_quiz';

const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => {
      dispatch(clear());
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
