import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions,Modal } from 'react-native-router-flux';

export default class CostcalInfo extends Component {
  render() {
    return (
        
      <View style={{ flex: 1, backgroundColor:'#42e8f4'}}>  
      <Text
      onPress={() => Actions.pop()}
      >Hello world!</Text>
      </View>
      
    );
  }
}
