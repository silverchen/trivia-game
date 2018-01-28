import React, { Component } from 'react';
import { View } from 'react-native';
import ResultContainer from '../../containers/container_result';

const _STYLES = require('./css_result');

export default class Result extends Component {
	render() {
	  return (
			<View style={_STYLES.root}>
				<ResultContainer />
			</View>
	  );
	}
}
