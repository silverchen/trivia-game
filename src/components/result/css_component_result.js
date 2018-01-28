import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Consts, UIUtil } from 'common';
const { FONT_WEIGHT_REGULAR, FONT_WEIGHT_BOLD, FONT_TYPE } = Consts;

module.exports = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  list: {
    flex: 1,
    marginVertical: UIUtil.verticalScale(30)
  },
  separator: {
    height: UIUtil.verticalScale(20)
  },
  buttonContainer: {
    padding: UIUtil.verticalScale(10)
  },
  text: {
    fontFamily: FONT_TYPE,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  headerText: {
    fontSize: UIUtil.verticalScale(20),
    fontWeight: FONT_WEIGHT_BOLD
  },
  bodyText: {
    fontSize: UIUtil.verticalScale(20),
    fontWeight: FONT_WEIGHT_REGULAR
  },
  quizText: {
    fontSize: UIUtil.verticalScale(18),
    fontWeight: FONT_WEIGHT_REGULAR,
    textAlign: 'left',
    color: '#696969'
  }
});
