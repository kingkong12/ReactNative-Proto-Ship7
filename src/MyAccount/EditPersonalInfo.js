import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, Alert } from 'react-native';
import { Root, Card, CardItem, Body, Item, Label, Input, Button, Icon, Toast } from 'native-base'; 
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { ActionPersonalInfo } from '../ACTIONS/Act_Index.js'; 

class EditPersonalInfo extends Component {
  constructor(props) {
      super(props); 
      this.state = {
          companyName: this.props.company,
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          altName: this.props.alterateName, 
          
      };  
  }
    
    
  onValChange = (key, value) => {         
     this.setState({ [key]: value });     
   }

   
  SaveChanges() {
    Alert.alert('SUcc',
    'Personal Information Saved Successfully',   
    
);
        
      this.props.ActionPersonalInfo({
        company: this.state.companyName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        alterateName: this.state.altName         
      });
  }
  
  
  render() {          
    return (
      <ScrollView style={styles.conatinerStyles}>
        <Root>
        <Card>
            <CardItem header bordered>
                    <Text 
                        style={{ 
                            flex: 1, 
                            textAlign: 'center', 
                            fontWeight: 'bold' 
                            }}                        
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
                    <Button 
                    iconLeft block light onPress={() => Actions.popTo('MyAccount')}
                    >
                        <Icon name='arrow-back' />
                        <Text>Back To Home</Text>
                    </Button>
                </Body>
                
        </CardItem>      
         

        </Card>          

        </Root>    
      </ScrollView>    
    );
  }
}

const mapSatateToProps = state => {
    return {
        company: state.MyAccount.company, 
        firstName: state.MyAccount.firstName,
        lastName: state.MyAccount.lastName,
        alterateName: state.MyAccount.alterateName, 
    };
};

const styles = StyleSheet.create({
    conatinerStyles: {
        flex: 1,
        margin: 5,
        backgroundColor: '#C0C0C0'
    }
});

export default connect(mapSatateToProps, { ActionPersonalInfo })(EditPersonalInfo);
