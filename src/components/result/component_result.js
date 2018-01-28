import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator, FlatList, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { isEqual } from 'lodash';
import { DataUtil, UIUtil, InteractionManager, Consts } from 'common';
const { THEME_COLOR } = Consts;
const _STYLES = require('./css_component_result');
const shouldItemUpdate = (props, nextProps) => (
  !isEqual(props.item, nextProps.item)
);

export default class ResultComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      error: props.error,
      isLoading: props.isLoading
    };
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
    var shouldUpdate = !isEqual(this.state.data, nextState.data) || this.state.isLoading !== nextState.isLoading;
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
    } else if (!DataUtil.isArrayEmpty(this.state.data)) {
        return (
          <View style={_STYLES.contentContainer}>
            <Text style={[_STYLES.text, _STYLES.headerText]}>You scored{'\n'}{this._getScore(this.state.data)}</Text>

            <FlatList
              style={_STYLES.list}
              showsVerticalScrollIndicator={false}
              data={this.state.data}
              renderItem={this._renderItem}
              ItemSeparatorComponent={this._renderSeparator}
              keyExtractor={(item, index) => index}
              shouldItemUpdate={shouldItemUpdate}
            />

            <View style={_STYLES.buttonContainer}>
    					<Button
    						style={_STYLES.text}
    					  onPress={this._onPressPlayAgain}
    					  title="PLAY AGAIN"
    					  color={THEME_COLOR}
    					/>
    				</View>
          </View>
    	  );
    }

    return null;
	}

  _getScore = (data) => {
    var numOfCorrectAns = 0;

    for (i = 0; i < data.length; i++) {
      if (this._isAnsCorrect(data[i].isCorrect)) {
        numOfCorrectAns += 1;
      }
    }

    return numOfCorrectAns + ' / ' + data.length;
  }

  _isAnsCorrect = (isCorrect) => {
    return DataUtil.isNotNull(isCorrect) && isCorrect;
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={_STYLES.resultContainer}>
        <Text style={[_STYLES.text, _STYLES.quizText, {marginRight: UIUtil.verticalScale(10)}]}>{this._getQuizResult(item.isCorrect)}</Text>
        <Text style={[_STYLES.text, _STYLES.quizText]}>{DataUtil.decodeString(item.question)}</Text>
      </View>
    );
  }

  _getQuizResult = (isCorrect) => {
    if (this._isAnsCorrect(isCorrect)) {
      return '+';
    } else if (DataUtil.isNotNull(isCorrect) && !isCorrect) {
      return '-';
    }
    return 'n.a'
  }

	_renderSeparator = () => {
    return (
      <View style={_STYLES.separator} />
    );
  }

  _onPressPlayAgain = () => {
    Alert.alert(
      'Ready to Replay?',
      'Starting a new game will reset your current score.',
      [
        { text: 'Yes', onPress: () => this._playAgain() },
        { text: 'No', onPress: () => console.log('Play Again cancelled') },
      ],
      { cancelable: true }
    );
	}

  _playAgain = () => {
    this.props.clear();
    Actions.introScreen();
  }
}
