
import React, { Component, PureComponent } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export class RespositoryCell extends PureComponent {

  render() {
    const textColor =  "black" ;
    return (
        <TouchableOpacity style={styles.container}>
          <View style={styles.cell_container}>
            <Text style={styles.title}>
              {this.props.full_name}
            </Text>
            <Text style={styles.description}>
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
        </TouchableOpacity>
    );
  }

}

const styles =  StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 16,
    marginBottom:2 
  },
  description: {
    fontSize: 15,
    marginBottom: 2
   
  },
  cell_container: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 5,
    marginRight:5,
    borderWidth: 0.5,
    borderColor: 'black',
    marginVertical:3,
    borderRadius:10,
    shadowColor: 'gray',
    shadowOffset:{width:0.5, hegiht:0.5},
    shadowOpacity:0.5,
    shadowRadius:1
  }
})