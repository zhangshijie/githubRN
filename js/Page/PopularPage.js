
import React, { Component, PureComponent } from 'react';

import {
  View,
  StyleSheet,
  Button,
  Image,
  TextInput,
  Text,
  FlatList
} from 'react-native';
import DataRepository from '../Expand/Dao/DataRepository'
import ScrollableTabView , {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import {RespositoryCell} from './RespositoryCell'
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component {


  static navigationOptions = {
    tabBarLabel: '最热',
    title:'最热',
    headerTintColor: 'white',
    headerStyle: {backgroundColor: "white"},
    headerTitleStyle: {alignSelf: 'center'},
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../res/images/ic_favorite.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  
  render(){
    return (
      <View style={styles.container} >
          <ScrollableTabView
          tabBarBackgroundColor="#2196F3"
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='gray'
          renderTabBar={()=> <ScrollableTabBar/>}
          >
            <PopularTab tabLabel='Java'> Java</PopularTab>
            <PopularTab tabLabel='iOS'> iOS </PopularTab>
            <PopularTab tabLabel='Android'> Android</PopularTab>
            <PopularTab tabLabel='JS'> JS</PopularTab>
          </ScrollableTabView>
      </View>
    )
  }
}


class PopularTab extends Component {
  constructor(props){
    super(props)
    this.dataRepository = new DataRepository();
    this.state = {
      result:'',
      dataSouce:[]
    }
  }
  componentDidMount(){
    this.loadData()
  }
  loadData(){
    this.dataRepository.fetchNetRepository(this.getUrl(this.props.tabLabel))
    .then(result => {
      let items = result.items;
      this.setState({
        // result:JSON.stringify(result) 
        dataSouce: items
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

  _onPressItem = ((id)=>{

  })

  _renderItem = ({item}) => (
    <RespositoryCell 
      description={item.description}
      avatar_url={item.owner.avatar_url}
      stargazers_count={item.stargazers_count}
      full_name={item.full_name}/>
  );


  _keyExtractor = (item, index) => item.id;

  render(){
    return (
      <View style={{flex: 1}}>
       <FlatList 
          style={{flex:1}}
          data={this.state.dataSouce}
          renderItem={this._renderItem}
          keyExtractor = {this._keyExtractor}
       ></FlatList>
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
   },
   icon: {
    width: 26,
    height: 26,
    }
})