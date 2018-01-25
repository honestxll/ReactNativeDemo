/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Platform,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import styles from '../Styles/Style';


const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

export default class MovieTalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.fetchData();
  }
  static navigationOptions = {
    title: '首页'
  }
  fetchData() {
    try {
      fetch(REQUEST_URL)
        .then(response => response.json())
        .then(responseData => {
          this.setState({
            movies: responseData.subjects
          });
        })
        .done();
    } catch (error) {
      console.error(error);
    }
  }
  renderMovieList({item: movie}) {
    return (
      <TouchableHighlight
        underlayColor="rgba(20, 20, 20, 0.1)"
        onPress={()=>{}}
        >
        <View style={styles.movieItem}>
          <View style={styles.itemImage}>
            <Image
              source={{uri: movie.images.medium}}
              style={styles.image}
            />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{movie.title}</Text>
            <Text style={styles.itemMeta}>{movie.original_title} ( {movie.year} )</Text>
            <Text style={[styles.itemMeta, styles.itemScore]}>{movie.rating.average} 分</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    if (!this.state.movies.length) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        </View>
      );
    } else {
      console.log("movies loaded", this.state.movies);
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.movies}
          renderItem={this.renderMovieList}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
