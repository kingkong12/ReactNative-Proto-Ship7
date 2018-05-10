import React, { Component } from 'react';
import { 
        Picker
} from 'react-native';

import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

class HelloWorldApp extends Component {

  state ={
      selected1: 'key0',
      selected2: 'key0'
  }   

  onValueChange = (key, value, index) => {   
      console.log('key', key); 
      console.log('value', value);
      console.log('index', index);
      const newState = { [key]: value };  
      this.setState(newState); 
      console.log(this.state.selected1);
  }
    
  render() {
    return (
        <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                
                <Picker
                    style={{ width: 100 }}
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange.bind(this,'selected1')}
                >
                
                <Picker.Item label='hello' value='key0' /> 
                <Picker.Item label='Borld' value='key1' /> 
                <Picker.Item label='Corld3' value='key2' /> 
                <Picker.Item label='Dorld4' value='key3' /> 
                

                </Picker>

                </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default HelloWorldApp; 
