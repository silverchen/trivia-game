import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { DataUtil, UIUtil, Consts } from 'common';
const { THEME_COLOR, DEFAULT_AMOUNT } = Consts;

const _STYLES = require('./css_intro');

export default class Intro extends Component {
	render() {
	  return (
			<View style={_STYLES.root}>
				<Text style={[_STYLES.text, _STYLES.headerText]}>Welcome to the{'\n'}Trivia Challenge!</Text>

				<View
					style={_STYLES.container}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					{ this._renderContent() }
				</View>

				<View style={_STYLES.buttonContainer}>
					<Button
						style={_STYLES.text}
					  onPress={this._onPressBegin}
					  title="BEGIN"
					  color={THEME_COLOR}
					/>
				</View>
			</View>
	  );
	}

	_renderContent = () => {
		return [
			(<Text key={'para1'} style={[_STYLES.text, _STYLES.bodyText]}>You will be presented with {DEFAULT_AMOUNT} True or False questions.</Text>),
			(<Text key={'para2'} style={[_STYLES.text, _STYLES.bodyText, {marginTop: UIUtil.verticalScale(100)}]}>Can you score 100%?</Text>)
		];
  }

	_onPressBegin = () => {
		Actions.quizScreen();
	}
}
