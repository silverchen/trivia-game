import React, { Component } from 'react';
import { View } from 'react-native';
import QuizContainer from '../../containers/container_quiz';

const _STYLES = require('./css_quiz');

export default class Quiz extends Component {
	render() {
	  return (
			<View style={_STYLES.root}>
				<QuizContainer />
			</View>
	  );
	}
}
