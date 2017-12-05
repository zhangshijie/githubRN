/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreenNavigator from './js/Page/setup'


const App = MainScreenNavigator;

export default App;