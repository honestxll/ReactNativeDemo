import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import FlatList from '../Components/FlatList';
import USBox from '../Components/USBox';
import TabBarImage from './TabBarImage';
import styles from '../Styles/Style';

const Tab = TabNavigator({
  Home: {
    screen: FlatList,
    navigationOptions({navigation}) {
      return {
        tabBarLabel: '首页',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarImage
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../imgs/category.png')}
            selectedImage={require('../imgs/category1.png')}
          />
        )
      }
    }
  },
  Mine: {
    screen: USBox,
    navigationOptions({navigation}) {
      return {
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarImage
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../imgs/play.png')}
            selectedImage={require('../imgs/play1.png')}
          />
        )
      }
    }
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#05e9ff',
    inactiveTintColor: '#979797',
    style: {
      backgroundColor: '#ffffff'
    },
    labelStyle: {
      fontSize: 16, // 文字大小
    }
  }
})

const Navigator = StackNavigator({
  Tab: {
    screen: Tab
  }
}, {
  navigationOptions: {
    // title:'首页',
    headerBackTitle: null,
    headerTintColor: '#333333',
    showIcon: true,
    swipeEnabled: false,
    animationEnabled: false
  },
  mode: 'card'
});

export default class MovieTalk extends Component {
  render() {
    return (<Navigator/>);
  }
}
