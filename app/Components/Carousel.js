import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class MovieTalk extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={styles.swiper}
            height={200}
            horizontal={true}
            paginationStyle={{bottom: 10}}
            showsButtons={false}
          >
            <Image source={require('../imgs/category.png')} style={styles.img}/>
            <Image source={require('../imgs/category1.png')} style={styles.img}/>
            <Image source={require('../imgs/play.png')} style={styles.img}/>
          </Swiper>
        </View>
        <View>
          <Text>Home page</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    height: 200,
    backgroundColor: '#000',
  },
});
