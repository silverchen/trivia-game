import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Consts, UIUtil } from 'common';
const { FONT_WEIGHT_REGULAR, FONT_WEIGHT_BOLD, FONT_TYPE } = Consts;

module.exports = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: UIUtil.verticalScale(12),
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: UIUtil.verticalScale(10)
  },
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quizBox: {
    padding: UIUtil.verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: UIUtil.verticalScale(1),
    borderColor: 'black',
    marginBottom: UIUtil.verticalScale(20)
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
  paginatorText: {
    fontSize: UIUtil.verticalScale(14),
    fontWeight: FONT_WEIGHT_REGULAR
  }
});
