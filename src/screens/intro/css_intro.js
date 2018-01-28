import React, { Component } from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Consts, UIUtil } from 'common';
const { CONTENT_PADDING, FONT_WEIGHT_REGULAR, FONT_WEIGHT_BOLD, FONT_TYPE } = Consts;

module.exports = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    paddingHorizontal: UIUtil.verticalScale(CONTENT_PADDING)
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  }
});
