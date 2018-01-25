import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import {View, Text} from 'react-native';
import styles from '../Styles/Style';

const Navigator = StackNavigator(
//设置导航要展示的页面
{
  HomeScreen: { screen: HomeScreen },
  ChatScreen: { screen: ChatScreen },
},
//设置navigationOptions属性对象
{
  navigationOptions: {
    title: '首页内容', //在导航中显示的标题内容
    headerBackTitle: null,
    headerTintColor: '#333333',
    showIcon: true,
    swipeEnabled: false,
    animationEnabled: false
  },
  mode: 'card', //设置mode属性
});

export default class MovieTalk extends Component {
  render() {
    return (<Navigator/>);
  }
}
