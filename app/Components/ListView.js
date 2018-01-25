/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import styles from '../Styles/Style';


export default class MovieTalk extends Component {
  constructor(props){
    super(props);
    let movies = [
      { title: "肖申克的救赎"},
      { title: "霸王别姬"},
      { title: "这个杀手不太冷"},
      { title: "美丽人生"},
    ];

    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      movies: dataSource.cloneWithRows(movies)
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={
            movie => <Text style={styles.itemText}>{movie.title}</Text>
          }
        />
      </View>
    );
  }
}
