/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

export default class TabBarImage extends Component {
  render() {
    return (
      <Image
        source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
        style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
      />
    );
  }
}
