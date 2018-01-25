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
  Image,
  ImageBackground
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
    <ImageBackground
      source={{ uri: 'http://wx3.sinaimg.cn/mw690/005BjCpAgy1fc277xlwxdj30bw0goade.jpg'}}
      style={styles.backgroundImage}
    >
      <View style={styles.description}>
        <Text style={[styles.title, styles.movieTitle]}>战狼II</Text>
        <Text style={[styles.title, styles.subContent]}>吴京 电影作品 A FILM BY WU JING</Text>
      </View>
    </ImageBackground>
  </View>
);

const CustomerText = (props) => (
  <Text style={styles.itemText}>
    {props.children}
  </Text>
)

export default MovieTalk;
