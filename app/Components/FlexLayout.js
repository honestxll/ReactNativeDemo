/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image
} from 'react-native';
import styles from '../Styles/Style';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MovieTalk = () => (
  <View style={styles.container}>
    <View style={[styles.item, styles.itemOne]}>
      <Text style={styles.itemText}>1</Text>
    </View>
    <View style={[styles.item, styles.itemTwo]}>
      <Image
        source={{ uri: 'https://www.wingca.com/statics/images/phone-logo.png'}}
        style={styles.image}
      />
    </View>
    <View style={[styles.item, styles.itemThree]}>
      <CustomerText>Hola</CustomerText>
    </View>
  </View>
);

const CustomerText = (props) => (
  <Text style={styles.itemText}>
    {props.children}
  </Text>
)

export default MovieTalk;
