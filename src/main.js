import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import promise from 'redux-promise';
import { Router, Scene, Actions } from 'react-native-router-flux';
import reducers from './reducers';
import { Consts } from 'common';
const { THEME_COLOR, BORDER_COLOR } = Consts;

import IntroScreen from './screens/intro/intro';
import QuizScreen from './screens/quiz/quiz';
import ResultScreen from './screens/result/result';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const _STORE = createStoreWithMiddleware(reducers);

export default class Main extends Component<{}> {
  render() {
    return (
      <Provider store={_STORE}>
        <Router getSceneStyle={getSceneStyle} navigationBarStyle={styles.navigationBarStyle} scenes={scenes} />
      </Provider>
    );
  }
}

const getSceneStyle = (props, computedProps) => {
  var style = {
    flex: 1,
    backgroundColor: 'black',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null
  };

  return style;
};

const styles = StyleSheet.create({
  navigationBarStyle: {
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1
  },
  tabBarStyle: {
    borderTopColor: BORDER_COLOR,
    borderTopWidth: 1,
    backgroundColor: 'white'
  },
  barButtonIconStyle: {
    tintColor: THEME_COLOR
  }
});

const scenes = Actions.create(
  <Scene key="root" barButtonIconStyle={styles.barButtonIconStyle}>
    <Scene key="introScreen" component={IntroScreen} hideTabBar hideNavBar type="reset" />
    <Scene key="quizScreen" component={QuizScreen} hideTabBar hideNavBar type="reset" />
    <Scene key="resultScreen" component={ResultScreen} hideTabBar hideNavBar />
  </Scene>
);
