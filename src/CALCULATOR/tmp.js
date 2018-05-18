/* Component is connected to actions but not reducers  */
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Card, CardItem, Picker, Input, Item, Root, Button, Toast } from 'native-base';
import { ButtonGroup } from 'react-native-elements';
import { ActionCostCalculator } from '../ACTIONS/Act_Index.js';


export default class Tmp extends Component {
  
  constructor(props) {
    super(props); 

    this.state = ({ 
      originState: 'USA',
      destinationState: 'USA',
      selectedIndex: 0, 
      weightState: '', 
      lengthState: '',
      widthSate: '',       
      heightState: '',
      error: ''
    });

    this.renderToast = this.renderToast.bind(this);
  }

  onValChange = (key, value) => {
    //console.log('key ', key);
    //console.log('value', value);
     this.setState({ [key]: value });
     //setTimeout(() => console.log(this.state), 3000);
  }
  
  onSubmitCalculator = () => {
        const { 
      originState, 
      destinationState, 
      selectedIndex, 
      weightState, 
      lengthState,
      widthSate,
      heightState } = this.state;  

      if (weightState === '' || lengthState === '' || widthSate === '' || heightState === '') {        
        this.setState({ error: 'One or more field is empty' });      
      } else {        
            
          ActionCostCalculator({ originState, 
          destinationState, 
          selectedIndex, 
          weightState, 
          lengthState,
          widthSate,
          heightState });
          Actions.displayCost(this.state);
        }
  }

  renderToast() {
    if (this.state.error !== '') {
      return (
          Toast.show({
          text: this.state.error,
          buttonText: 'Okay',
          type: 'danger',
      
        }));
  } 
  return (null); 
  }

  render() {
    const buttons = ['LBS - Inches', 'Kg - cm'];

    return (
      <Root style={styles.container}>        
        <Card>
          <CardItem style={styles.cardItem}>

              <Picker 
                    mode='dialog'
                    style={{ height: 50, width: 200 }}
                    selectedValue={this.state.originState}
                    onValueChange={this.onValChange.bind(this, 'originState')}
              >
                    
                    <Picker.Item label="USA Mailbox" value="USA" />
                    <Picker.Item label="United Kingdom mailbox" value="UK" />
              </Picker>

          </CardItem>

          <CardItem style={styles.cardItem}>

          <Picker 
                    mode='dialog'
                    style={{ height: 50, width: 200 }}
                    selectedValue={this.state.destinationState}
                    onValueChange={this.onValChange.bind(this, 'destinationState')}
          >
                    <Picker.Item label="USA" value="USA" />
                    <Picker.Item label="Greece" value="Greece" />
                    <Picker.Item label="Sapin" value="Spain" />
                    <Picker.Item label="Bermuda" value="Bermuda" />
                    <Picker.Item label="Brazil" value="Brazil" />
                    <Picker.Item label="China" value="China" />
                    <Picker.Item label="Qatar" value="Qatar" />
              </Picker> 
            
          </CardItem>

          <CardItem style={styles.cardItem}>
            <ButtonGroup              
              buttons={buttons}
              containerStyle={{ flex: 1, maxWidth: 400 }}
              selectedIndex={this.state.selectedIndex}
              onPress={this.onValChange.bind(this, 'selectedIndex')}
            /> 
          </CardItem> 

          <CardItem style={styles.cardItem}> 
            <Item>
                <Input 
                keyboardType='numeric'
                placeholder='Weight'
                value={this.state.weightState}
                onChangeText={this.onValChange.bind(this, 'weightState')}
                />
            </Item>  
          </CardItem>  

          <CardItem style={styles.cardItem} >
            
                <Input
                 keyboardType='numeric'
                 style={styles.inputCss}
                 placeholder='Length' 
                 vlaue={this.state.lengthState}
                 onChangeText={this.onValChange.bind(this, 'lengthState')}
                /> 
               
             
                <Input
                 keyboardType='numeric'
                 style={styles.inputCss}
                 placeholder='Width' 
                 vlaue={this.state.widthSate}
                 onChangeText={this.onValChange.bind(this, 'widthSate')}
                /> 
              
             
                <Input
                 keyboardType='numeric'
                 style={styles.inputCss}
                 placeholder='Height' 
                 vlaue={this.state.heightState}
                 onChangeText={this.onValChange.bind(this, 'heightState')}
                /> 
             
             
          </CardItem>  

          <CardItem style={styles.cardItem} >
              <Text
                onPress={() => Actions.costcalinfo()}
              > Why dimension matters? </Text> 
          </CardItem>
           
          <CardItem style={styles.cardItem} >
              <Button 
              style={{ flex: 1 }} block info 
              onPress={this.onSubmitCalculator.bind(this)}
              >
                <Text> Get Rates </Text> 
              </Button> 
          </CardItem>

          </Card>
          {this.state.error.length > 0 &&
            Toast.show({
              text: this.state.error,
              buttonText: 'Okay',
              type: 'danger',
              position: 'top'
            })
          }
      </Root>
      );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,  // means 100% screen avalibale 
   padding: 7,
   flexDirection: 'column'
  },  
  cardItem: {
    flex: 1,     
    maxHeight: 70,
    borderBottomWidth: 1,  
    padding: 5,
    marginBottom: 10, 
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative',
   
},
TextCs: {
  fontWeight: 'bold'
},
inputCss: {
  flex: 1, 
  justifyContent: 'space-between',
  marginBottom: 10,  
  borderColor: '#ddd',
  backgroundColor: '#fff',
  
}

}); 

