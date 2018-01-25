/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from '../Styles/Style';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={[styles.container, styles.homeScreen]}>
        <Text
          style={styles.whiteText}
          onPress={()=>this.props.navigation.navigate('ChatScreen', { title: '和 Lucy 聊天' })}
          >你好～Lucy</Text>
      </View>
    );
  }
}
