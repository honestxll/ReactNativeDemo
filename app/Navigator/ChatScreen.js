/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import styles from '../Styles/Style';

export default class ChatScreen extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: navigation.state.params ? navigation.state.params.title: null
  })
  render() {
    return (
      <View style={[styles.container, styles.homeScreen]}>
        <Text
          style={styles.whiteText}
          onPress={()=> {this.props.navigation.goBack()}}
          >Hola～</Text>
      </View>
    );
  }
}
