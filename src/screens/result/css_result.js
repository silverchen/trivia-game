import React, { Component } from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Consts, UIUtil } from 'common';
const { CONTENT_PADDING } = Consts;

module.exports = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    paddingHorizontal: UIUtil.verticalScale(CONTENT_PADDING)
  }
});
