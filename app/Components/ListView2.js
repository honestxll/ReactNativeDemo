/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight,
} from 'react-native';
import styles from '../Styles/Style';

const REQUEST_URL = 'http://api.douban.com/v2/movie/top250';

export default class MovieTalk extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({
          movies: this.state.movies.cloneWithRows(responseData.subjects),
          loaded: true
        })
      })
      .done();
  }

  renderMovieList(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(0, 0, 0, 0.1)"
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
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>加载中...</Text>
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList}
        />
      </View>
    );
  }
}
