import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { isEqual } from 'lodash';
import { DataUtil, InteractionManager, Consts } from 'common';
const { THEME_COLOR, DEFAULT_AMOUNT } = Consts;
const _STYLES = require('./css_component_quiz');

export default class QuizComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      error: props.error,
      isLoading: true,
      currentIndex: 0
    };
  }

  componentDidMount() {
    if (DataUtil.isArrayEmpty(this.state.data)) {
      InteractionManager.runAfterInteractions(() => {
        this.props.fetchQuiz({amount: DEFAULT_AMOUNT, difficulty: 'hard', type: 'boolean'});
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.isLoading) {
      InteractionManager.runAfterInteractions(() => {
        this.setState({
          data: newProps.data,
          error: newProps.error,
          isLoading: false
        }, function afterStateChanged() {
          if (!newProps.isLoading) {
            if (this.props.onLoadingCompleted) {
              this.props.onLoadingCompleted();
            }
          }
        });
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    var shouldUpdate = !isEqual(this.state.data, nextState.data) || this.state.isLoading !== nextState.isLoading || this.state.currentIndex !== nextState.currentIndex;
    return shouldUpdate;
  }

  render() {
    return (
      <View style={_STYLES.root}>
        { this._renderContent() }
      </View>
    );
	}

  _renderContent = () => {
    if (this.state.isLoading) {
      return (
        <View style={_STYLES.loading}>
          <Text style={[_STYLES.text, _STYLES.bodyText, {color: 'gray'}]}>Loading...</Text>
          <ActivityIndicator
            animating={true}
            color= 'gray'
            style={[_STYLES.centering, {marginTop: 20, height: 20}]}
            size="small"
          />
        </View>
      );
    } else if (!DataUtil.isArrayEmpty(this.state.data) &&
      this.state.data.length > this.state.currentIndex &&
      DataUtil.isNotNull(this.state.data[this.state.currentIndex])) {
        return (
          <View style={_STYLES.contentContainer}>
            <Text style={[_STYLES.text, _STYLES.headerText]}>{DataUtil.decodeString(this.state.data[this.state.currentIndex].category)}</Text>

            <View style={_STYLES.quizContainer}>
              { this._renderQuiz(this.state.data[this.state.currentIndex]) }
              <Text style={[_STYLES.text, _STYLES.paginatorText]}>{this._getPaginator(this.state.currentIndex, this.state.data.length)}</Text>
            </View>

            <View style={_STYLES.buttonsContainer}>
              { this._renderButtons(this.state.data[this.state.currentIndex]) }
            </View>
          </View>
    	  );
    }

    return null;
	}

	_renderQuiz = (data) => {
    if (DataUtil.isNotNull(data) && !DataUtil.isStringEmpty(data.question)) {
      return (
        <View style={_STYLES.quizBox}>
          <Text style={[_STYLES.text, _STYLES.bodyText]}>{DataUtil.decodeString(data.question)}</Text>
        </View>
  		)
    }

		return null;
  }

  _getPaginator = (current, total) => {
    return current + 1 + ' of ' + total;
  }

	_renderButtons = (data) => {
    if (DataUtil.isNotNull(data) && !DataUtil.isStringEmpty(data.correctAnswer) && !DataUtil.isArrayEmpty(data.incorrectAnswers)) {
      var availableAnswers = [...data.incorrectAnswers, data.correctAnswer];
      availableAnswers.sort();

      return availableAnswers.map(answer => {
        return (
          <Button
            style={_STYLES.text}
            onPress={() => this._onPressAnswer(answer)}
            title={answer}
            color={THEME_COLOR}
          />
        )
      });
    }

		return null;
  }

	_onPressAnswer = (answer) => {
    this.props.setResult({index: this.state.currentIndex, isCorrect: answer == this.state.data[this.state.currentIndex].correctAnswer});

    if (this.state.currentIndex + 1 < this.state.data.length) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    } else {
      Actions.resultScreen();
    }
	}
}
