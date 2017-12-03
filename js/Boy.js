import React, { Component} from 'react';
import PropType from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Girl from './Girl'

export default class Boy extends Component {
  constructor(props){
    super(props);
    this.state = {
      word : ''
    }
  }

  static navigationOptions = {
    title: 'Boy',
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style= {styles.container} >
        <Text style= {styles.text}>  i  am  a boy</Text>
        <Text style= {styles.text}
           onPress={()=>{
            //  this.props.navigator.push({
            //    component:Girl,
            //    params:{
            //      word: '一朵玫瑰',
            //      onCallback : (word)=>{
            //        this.setState({
            //         word: word
            //        })
            //      }
            //    }
            //  });

            navigate('Girl', {
              word: '一朵玫瑰',
              onCallback: (word)=> {
                this.setState({
                  word: word
                })
              }
            })
           }}>送女孩一朵玫瑰</Text>
          <Text style= {styles.text}>this.props.word</Text> 
      </View>
    )
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