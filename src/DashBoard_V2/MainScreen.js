import React, { Component } from 'react';
import { Text } from 'react-native';
import { View } from 'native-base';

export default class MainScreen extends Component {
  render() {
    return (
      <View>  
        <Text>Email: {this.props.email} </Text> 
        <Text>Token ID generated: {this.props.uid}</Text>
      </View>

    );
  }
}
