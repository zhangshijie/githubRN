import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { setTimeout } from 'core-js/library/web/timers';

export default class WelcomePage extends Component {

  componentDidMount(){
     this.timer = setTimeout(()=> {
          
     }, 2000)
  }

  componentWillUnmount(){
     this.timer && clearTimeout(this.timer)
  }
  render(){
    return <View>
      <Text>欢迎</Text>
    </View>
  }
}