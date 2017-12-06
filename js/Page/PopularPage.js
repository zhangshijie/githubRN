
import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Button,
  Image,
  TextInput,
  Text
} from 'react-native';
import DataRepository from '../Expand/Dao/DataRepository'

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=starts';

export default class PopularPage extends Component {
  constructor(props){
    super(props)
    this.dataRepository = new DataRepository();
    this.state = {
      result:''
    }
  }

  static navigationOptions = {
    tabBarLabel: '最热',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../res/images/ic_favorite.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  onLoad(){
    this.dataRepository.fetchNetRepository(this.getUrl(this.text))
    .then(result => {
      this.setState({
        result:JSON.stringify(result) 
      })
    })
    .catch(error => {
      this.setState({
        result: JSON.stringify(error)
      })
    })
  }
  getUrl (key) { 
    return URL+key+QUERY_STR
  }
  render(){
    return (
      <View style={styles.container} >
          <Text onPress={()=>{
            this.onLoad( );
          }}
          style={styles.tips}> 获取数据</Text>
          <TextInput 
          style= {{height: 20, borderWidth: 1}}
          onChange= {text=> this.text = text}

          ></TextInput>
          <Text style={{height:500}}> {this.state.result} </Text>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
   container: {
     flex: 1,
   },
   tips: {
     fontSize: 28
   }
})