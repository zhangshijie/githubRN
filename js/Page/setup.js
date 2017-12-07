
import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";

import {
  View,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import PopularPage from '../Page/PopularPage'


// class HotScreen extends React.Component {
//   static navigationOptions = {
//     tabBarLabel: '最热',
//     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
//     tabBarIcon: ({ tintColor }) => (
//       <Image
//         source={require('../../res/images/ic_favorite.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to 趋势"
//       />
//     );
//   }
// }

class TrendingScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '趋势',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../res/images/ic_trending.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back 最热"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MainScreenNavigator = TabNavigator(
  {
    PopularPage: { screen: PopularPage },
    TrendingScreen: { screen: TrendingScreen },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
});

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2196F3',
      
    },
    
  }
});

  
export default SimpleApp;