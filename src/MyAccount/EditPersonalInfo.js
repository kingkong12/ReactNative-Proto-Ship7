import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import {Root, Card, CardItem, Body, Item, Label, Input, Button, Icon, Toast } from 'native-base'; 
import { Actions } from 'react-native-router-flux';

export default class EditPersonalInfo extends Component {
  constructor(props) {
      super(props); 
      this.state = {
          companyName: 'You parcel',
          firstName: 'Mithil',
          lastName: 'Vasani',
          altName: 'Abc'
      };  
  }
  
  onValChange = (key, value) => {   
     console.log(key);
     console.log(value); 
     this.setState({ [key]: value });     
  }

  SaveChanges() {  
    console.log(this.state);    
    Toast.show({
        text: this.state.error,
        buttonText: 'Personal information Saved Successfully !!!',
        type: 'success',
        position: 'top',
        duration: 4000    
      });
  }
  
  render() {
    return (
      <ScrollView style={styles.conatinerStyles}>
        <Root>
        <Card>
            <CardItem header bordered>
                    <Text 
                        style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}                        
                    >Personal Information
                    </Text>

            </CardItem>  

            
            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> COMPANY / BUSINESS NAME (Optional) </Label>
                        <Input 
                            value={this.state.companyName}   
                            onChangeText={this.onValChange.bind(this, 'companyName')} 
                        />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> First Name </Label>
                        <Input                         
                        value={this.state.firstName}
                        onChangeText={this.onValChange.bind(this, 'firstName')} 
                        />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> Last Name </Label>
                        <Input 
                        value={this.state.lastName}
                        onChangeText={this.onValChange.bind(this, 'lastName')} 
                        />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> ALT. NAME </Label>
                        <Input 
                        value={this.state.altName}
                        onChangeText={this.onValChange.bind(this, 'altName')} 
                        />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                
                <Body>                    
                    <Button block light onPress={this.SaveChanges.bind(this)}>
                        <Text >Save Changes</Text>
                    </Button>
                </Body>
            </CardItem>    
            <CardItem>
                        
                <Body>
                    <Button iconLeft block light onPress={() => Actions.pop()}>
                        <Icon name='arrow-back' />
                        <Text>Back To Account</Text>
                    </Button>
                </Body>
                
        </CardItem>

        </Card> 

        </Root>    
      </ScrollView>    
    );
  }
}


const styles = StyleSheet.create({
    conatinerStyles: {
        flex: 1,
        margin: 5,
        backgroundColor: '#C0C0C0'
    }
});

