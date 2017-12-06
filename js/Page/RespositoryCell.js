
import React, { Component, PureComponent } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

export class RespositoryCell extends PureComponent {
  


  render() {
    const textColor =  "black" ;
    return (
        <View style={{margin:10}}>
          <Text style={{ color: textColor }}>
            {this.props.full_name}
          </Text>
          <Text style={{ color: textColor }}>
            {this.props.description}
          </Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>Author:</Text> 
                  <Image style={{height: 22, width: 22}}
                         source={{uri: this.props.avatar_url}} />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>Star:</Text> 
                  <Text>{this.props.stargazers_count}</Text>
              </View>
              <Image style={{width: 22, height: 22}} source={require('../../res/images/ic_star.png')}/>
          </View>

        </View>
    );
  }

}