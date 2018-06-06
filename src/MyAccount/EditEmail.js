import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Root, Card, CardItem, Body, Item, Label, Input, Button, Icon, Toast } from 'native-base'; 
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import validator from 'validator';
import { ChangeEmailSecurity } from '../ACTIONS/Act_Index.js'; 


class EditEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailUE: '',
            remailUE: ''  
        };
    }

    onValChange = (key, value) => {   
        this.setState({ [key]: value });     
     }

     validateUE() {
        if (this.state.emailUE === '' || this.state.remailUE === '') {            
            Toast.show({
                text: this.state.error,
                buttonText: 'one or more field is emty',
                type: 'danger',
                position: 'top',
                duration: 4000    
              });
        } else
        if (!validator.isEmail(this.state.emailUE)) {
            Toast.show({
                text: this.state.error,
                buttonText: 'A invalid email',
                type: 'danger',
                position: 'top',
                duration: 4000    
              });
        } else 
        if (this.state.emailUE !== this.state.remailUE) {            
            Toast.show({
                text: this.state.error,
                buttonText: 'passwords dont match',
                type: 'danger',
                position: 'top',
                duration: 4000    
              });
        } else {
            this.props.ChangeEmailSecurity(this.state.emailUE); 
            Toast.show({
                text: this.state.error,
                buttonText: 'EMail Updated ',
                type: 'success',
                position: 'top',
                duration: 4000    
              });
        }        
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
                            >Update Email Address
                            </Text>
                    </CardItem> 
                

                <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> Your Email Addres </Label>
                            <Input                           
                            keyboardType='email-address'
                            value={this.state.emailUE}   
                            onChangeText={
                                this.onValChange.bind(this, 'emailUE')
                                        }                          
                            />
                        </Item>
                    </Body>
                 </CardItem>

                 <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> Re Enter Email Addres </Label>
                            <Input 
                            keyboardType='email-address'  
                            value={this.state.remailUE}   
                            onChangeText={
                                this.onValChange.bind(this, 'remailUE')
                            }                            
                            />
                        </Item>
                    </Body>
                 </CardItem>

                <CardItem>
                        
                    <Body>
                        <Button 
                            block 
                            light 
                            onPress={this.validateUE.bind(this)}
                        >                            
                            <Text>Save Changes</Text>
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

export default connect(null, { ChangeEmailSecurity })(EditEmail); 
