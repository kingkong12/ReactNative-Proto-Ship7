import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { 
        Card, 
        CardItem,
        Container,
        Text, 
        Content,
        Picker, 
        Item,
        Label,
        Input, 
        Button,        
        Icon
      } from 'native-base'; 
import { ButtonGroup } from 'react-native-elements';

export default class Calculator extends Component {
  constructor(props) {
    super(props); 
    this.state = {
       pick1: 'val0', 
       pick2: 'val0',
       pick3: 'val0',
       length: '',
       width: '',
       height: '',
       error: ''    
    };
    
  }

  
  onValChange = (key, value) => {
    console.log('key ', key);
    console.log('value', value);
     this.setState({ [key]: value });
     setTimeout(() => console.log(this.state), 3000);
  }

  onButtonPress = () => {
    const { pick1, pick2, pick3, length, width, height } = this.state; 

    if (length.length || width.lenght || height.length === 0)
      {
        console.log(length.length, ' ', width.lenght, ' ', height.length)
        console.log('one or more field is empty'); 
        this.setState({ error: 'one or more field is empty'})
      } else {
        console.log('success');
      }

  }

  render() {
    const dimensionBtnContent = [
      {
        placeholder: 'Length',
        stateName: 'length',
        valData: 'this.state.length'  
      },
      {
        placeholder: 'Width',
        stateName: 'width',
        valData: 'this.state.width'
      },
      {
        placeholder: 'Height',
        stateName: 'height',
        valData: 'this.state.height'
      },
      
    ]; 
    const buttons = ['Hello', 'World', 'Buttons'];
    return (
      <Container>
        
        <Card>
           <CardItem>
          <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.pick1}
              onValueChange={this.onValChange.bind(this, 'pick1')}
          >
              <Picker.Item label="USA" value="val0" />
              <Picker.Item label="UK" value="val1" />
              
            </Picker>  
          </CardItem>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.pick2}
              onValueChange={this.onValChange.bind(this, 'pick2')}
            >
              <Picker.Item label="INDIA" value="val0" />
              <Picker.Item label="China" value="val1" />
              
            </Picker>  

            <Item inlineLabel>
                 <Label> Weight </Label> 
                 <Input /> 
            </Item>  

            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.pick3}
              onValueChange={this.onValChange.bind(this, 'pick3')}
            >
              <Picker.Item label="LBS" value="val0" />
              <Picker.Item label="KG" value="val1" />              
            </Picker>    

            {
             dimensionBtnContent.map((data, i) => {
              return (
                   
                      <TextInput 
                      key={i}
                      placeholder={data.placeholder}
                      onChangeText={this.onValChange.bind(this, data.stateName)}
                      />                  
                  
              );
             }) 
            }
            <Button 
                  block 
                  info
                  onPress={this.onButtonPress.bind(this)}
            >
              <Text>Info</Text>
            </Button>

            <ButtonGroup
              buttons={buttons}
              containerStyle={{height: 100, width: 300}}
            /> 
        </Card>   
        
      </Container>   
    );
  }
}

