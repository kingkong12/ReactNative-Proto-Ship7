import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import {Root, Card, CardItem, Body, Item, Label, Input, Button, Icon, Toast } from 'native-base'; 
import { Actions } from 'react-native-router-flux';

export default class HelloWorldApp extends Component {
  
   constructor(props){
       super(props); 
       this.state = {
           contactPerson: '',
           phone: '',
           addressLine1: '',
           addressLine2: '',
           addressLine3: '',
           districtTown: '',
           city: '', 
           postalCode: ''
       };
   } 

   onValChange = (key, value) => { 
    console.log("STATE =", key);
    console.log("Value =", value);     
    console.log(" ");
    this.setState({ [key]: value });     
 }

 validateAd(){

    console.log("Button Pressed");
 }

  render() {
    return (
        
            <ScrollView style={styles.conatinerStyles}>
                <Root>    
                    <Card>
                        <CardItem header bordered>
                                <Text 
                                    style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}  
                                                       
                                >My Address
                                </Text>
                        </CardItem>      

                    <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> CONTACT PERSON </Label>
                            <Input 
                            value={this.state.contactPerson}
                            onChangeText={this.onValChange.bind(this, 'contactPerson')}   
                            />
                        </Item>
                    </Body>
                    </CardItem>       

                    <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> PHONE </Label>
                            <Input 
                             value={this.state.phone}
                             onChangeText={this.onValChange.bind(this, 'phone')}   
                            />
                        </Item>
                    </Body>
                    </CardItem>  

                    <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> Address Line 1 </Label>
                            <Input
                            onChangeText={this.onValChange.bind(this, 'addressLine1')}   
                             value={this.state.addressLine1} 
                            />
                        </Item>
                    </Body>
                    </CardItem> 

                    <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> Address Line 2 </Label>
                            <Input 
                            onChangeText={this.onValChange.bind(this, 'addressLine2')}   
                            value={this.state.addressLine2}
                            />
                        </Item>
                    </Body>
                    </CardItem>

                    <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> Address Line 3 </Label>
                            <Input 
                            onChangeText={this.onValChange.bind(this, 'addressLine3')}   
                            value={this.state.addressLine3}
                            />
                        </Item>
                    </Body>
                    </CardItem>


                    <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> DISTRICT / TOWN / LOCALITY</Label>
                            <Input 
                            onChangeText={this.onValChange.bind(this, 'districtTown')}   
                            value={this.state.districtTown}
                            />
                        </Item>
                    </Body>
                    </CardItem>

                    <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label>CITY / STATE / PROVINCE</Label>
                            <Input
                            onChangeText={this.onValChange.bind(this, 'city')}    
                            value={this.state.city}
                            />
                        </Item>
                    </Body>
                    </CardItem>

                    <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label>POSTAL CODE</Label>
                            <Input 
                            onChangeText={this.onValChange.bind(this, 'postalCode')}   
                            value={this.state.postalCode}
                            />
                        </Item>
                    </Body>
                    </CardItem>

                    <CardItem>                        
                        <Body>
                            <Button block light onPress={this.validateAd.bind(this)}>                            
                                <Text>Save Changes</Text>
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
