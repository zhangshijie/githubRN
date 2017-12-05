import React, { Component } from 'react';
import PropType from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


export default class Girl extends Component {
  constructor(props){
    super(props);
    this.state = {
      word : ''
    }
  }


  static navigationOptions = {
    title: 'Girl',
  };

  render(){
    const { params } = this.props.navigation.state;
    return (
      <View style= {styles.container} >
        <Text style= {styles.text}>  i  am  a girl</Text>
        <Text style= {styles.text}> 收到: {params.word}</Text>
        <Text style= {styles.text}
         onPress={
           ()=>{
            params.onCallback('一份巧克力');
            this.props.navigation.goBack()
           }
         }> 回赠巧克力</Text>
      </View>)
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  text: {
    fontSize: 20,
  }
})