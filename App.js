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
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     selectedTab :'tb_popular'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            title="最热"
            renderIcon={() => <Image style={styles.images} source={require('./res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.images,{tintColor: 'red'}]} source={require('./res/images/ic_favorite.png')} />}
            selectedTitleStyle={{color: 'red'}}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="趋势"
            renderIcon={() => <Image style={styles.images} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.images, {tintColor: 'yellow'}]} source={require('./res/images/ic_trending.png')} />}
            selectedTitleStyle={{color: 'yellow'}}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            title="收藏"
            renderIcon={() => <Image style={styles.images} source={require('./res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.images,{tintColor: 'red'}]} source={require('./res/images/ic_favorite.png')} />}
            selectedTitleStyle={{color: 'red'}}
            onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            title="我的"
            renderIcon={() => <Image style={styles.images} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.images, {tintColor: 'yellow'}]} source={require('./res/images/ic_trending.png')} />}
            selectedTitleStyle={{color: 'yellow'}}
            onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  page1: {
    flex: 1,
    backgroundColor: 'red'
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  images: {
    height: 22,
    width: 22
  }
  
});
